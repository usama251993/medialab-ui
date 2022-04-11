import { Component, OnInit } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { FormGroup } from '@angular/forms'

import { BehaviorSubject, Observable } from 'rxjs'
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators'

import { AppOptionModel } from '@shared/models/app-assets.model'
import { AppEndpointResponseModel } from '@shared/models/app-endpoint.model'

import { LmSignupRequestModel } from '@lm-core/models/common/auth/lm-auth-signup.model'
import { LmSignupPageAssetsModel } from '@lm-core/models/lm-signup/lm-signup-assets.model'
import { LmSignupFormAssetsModel } from '@lm-core/models/lm-signup/lm-signup.model'
import { LmWSO2ErrorResponseModel, INITIAL_WSO2_ERROR } from '@lm-core/models/lm-wso2-error.model'

import { LmKBAccountModel, LmKBAccountRequestModel, LmKBPlanModel } from '@lm-core/models/lm-kb.model'
import { LmKBErrorResponseModel, INITIAL_KB_ERROR } from '@lm-core/models/lm-kb-error.model'

import { LmSignupService } from '@lm-core/services/lm-signup/lm-signup.service'
import { LmKillbillService } from '@lm-core/services/lm-killbill/lm-killbill.service'


@Component({
  selector: 'app-lm-signup-container',
  template: `<app-lm-signup [assets]          = 'assets$        | async'
                            [form]            = 'form$          | async'
                            [formGroup]       = 'formGroup$     | async'
                            [organizations]   = 'organizations$ | async'
                            [countries]       = 'countries$     | async'
                            [bIsProcessing]   = 'bIsProcessing$ | async'
                            [error]           = 'wso2Error$     | async'
                            (triggerSignup$)  = 'triggerSignup($event)'
                            (gotoLogin$)      = 'gotoLogin()'></app-lm-signup>`
})
export class LmSignupContainerComponent implements OnInit {

  assets$: Observable<LmSignupPageAssetsModel>
  form$: Observable<LmSignupFormAssetsModel>
  formGroup$: Observable<FormGroup>
  organizations$: Observable<AppOptionModel[]>
  countries$: Observable<AppOptionModel[]>

  bIsProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  wso2Error$: BehaviorSubject<LmWSO2ErrorResponseModel> = new BehaviorSubject<LmWSO2ErrorResponseModel>(INITIAL_WSO2_ERROR)
  kbError$: BehaviorSubject<LmKBErrorResponseModel> = new BehaviorSubject<LmKBErrorResponseModel>(INITIAL_KB_ERROR)

  private _canCreateAccount$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _canCreateTag$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private _signupService: LmSignupService,
    private _kbService: LmKillbillService
  ) { }

  ngOnInit(): void {
    this._signupService.fetchPageAssets()
    this.assets$ = this._signupService.watchPageAssets$()

    this._signupService.fetchFormAssets()
    this.form$ = this._signupService.watchFormAssets$()

    this._signupService.fetchFormGroup()
    this.formGroup$ = this._signupService.watchFormGroup$()

    this._signupService.fetchOrganizations()
    this.organizations$ = this._signupService.watchOrganizations$()

    this._signupService.fetchCountries()
    this.countries$ = this._signupService.watchCountries$()

    this.bIsProcessing$.next(false)

    this._canCreateAccount$.next(false)
    this._canCreateTag$.next(false)
  }

  triggerSignup(_: LmSignupRequestModel): void {

    const username: string = this._signupService.getUserName({ email: _.email })
    const realm: string = this._signupService.getRealm({ email: _.email })

    _.username = username
    _.realm = realm

    this.bIsProcessing$.next(true)
    this.wso2Error$.next(null)


    this._signupService.triggerSignup(_).pipe(
      tap((__: AppEndpointResponseModel<any>) => {
        this.bIsProcessing$.next(false)

        console.groupCollapsed('[LM Signup Container] Signup Successful')
        console.log(__)

        console.log('Displaying snackbar')
        this._signupService.showSnackbar({ message: 'Registered Successfully', button: { text: 'OK!', link: '' } })

        console.log('Setting user context for code resend')
        this._signupService.setUserForResendProcess({ username, realm })

        console.log('Redirecting to verification page')
        this._signupService.gotoVerify({ username, realm })

        console.groupEnd()
      }),
      switchMap(__ => {
        const _kbRequest: LmKBAccountRequestModel = {
          name: `${_.givenname} ${_.lastname}`,
          externalKey: `${_.organization}-${_.email}`,
          email: _.email,
          company: _.organization,
          country: _.country,
          currency: 'USD'
        }

        return this._kbService.createKBAccount(_kbRequest).pipe(
          tap((__: AppEndpointResponseModel<any>) => {
            console.groupCollapsed('[LM Signup Container] Create KB Account Successful')
            console.log(__)
            console.groupEnd()
          }),
          switchMap(__ => this._kbService.getAccountDetails(_kbRequest.externalKey).pipe(
            tap((__: LmKBAccountModel) => {
              console.groupCollapsed('[LM Signup Container] Fetch Account Details Successful')
              console.log(__)
              console.groupEnd()
            }),
            switchMap(___ => this._kbService.createAccountTags(___.accountId).pipe(
              tap((__: LmKBPlanModel[]) => {
                console.groupCollapsed('[LM Signup Container] Create Account Tag Successful')
                console.log(__)
                console.groupEnd()
              }),

              catchError((__: HttpErrorResponse) => {
                console.groupCollapsed('[LM Signup Container] Create Account Tag failed')
                console.log(__)

                console.log('Handling Error')
                this.kbError$.next(this._signupService.handleKBError(__))
                console.groupEnd()

                return this.kbError$.asObservable()
              })
            )),

            catchError((__: HttpErrorResponse) => {
              console.groupCollapsed('[LM Signup Container] Fetch Account Details failed')
              console.log(__)

              console.log('Handling Error')
              this.kbError$.next(this._signupService.handleKBError(__))
              console.groupEnd()

              return this.kbError$.asObservable()
            })
          )),

          catchError((__: HttpErrorResponse) => {
            console.groupCollapsed('[LM Signup Container] Create Account failed')
            console.log(__)

            console.log('Handling Error')
            this.kbError$.next(this._signupService.handleKBError(__))
            console.groupEnd()

            return this.kbError$.asObservable()
          })
        )
      }),

      catchError((__: HttpErrorResponse) => {
        this.bIsProcessing$.next(false)
        console.groupCollapsed('[LM Signup Container] Signup failed')
        console.log(__)

        console.log('Handling Error')
        this.wso2Error$.next(this._signupService.handleWSO2Error(__))
        console.groupEnd()

        return this.wso2Error$.asObservable()
      })
    ).subscribe()
  }

  gotoLogin() {
    this._signupService.gotoLogin()
  }
}
