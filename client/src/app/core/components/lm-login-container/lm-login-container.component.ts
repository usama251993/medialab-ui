import { Component, OnInit } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { FormGroup } from '@angular/forms'

import { BehaviorSubject, Observable } from 'rxjs'

import { AppEndpointResponseModel } from '@shared/models/app-endpoint.model'

import { LmLoginRequestModel, LmLoginResponseModel } from '@lm-core/models/common/auth/lm-auth-login.model'
import { LmWSO2ErrorResponseModel, INITIAL_WSO2_ERROR } from '@lm-core/models/lm-wso2-error.model'
import { INITIAL_COMPONENT_FLAGS, LmLoginComponentFlags, LmLoginPageAssetsModel } from '@lm-core/models/lm-login/lm-login-assets.model'
import { LmLoginFormAssetsModel } from '@lm-core/models/lm-login/lm-login.model'
import { LmLoginService } from '@lm-core/services/lm-login/lm-login.service'

@Component({
  selector: 'app-lm-login-container',
  template: `<app-lm-login [assets]                   = "assets$         | async"
                           [form]                     = "form$           | async"
                           [formGroup]                = "formGroup$      | async"
                           [error]                    = "error$          | async"
                           [componentFlags]           = "componentFlags$ | async"
                           (triggerResendVisibility$) = "triggerResendVisibility($event)"
                           (triggerLogin$)            = "triggerLogin($event)"
                           (triggerResend$)           = "triggerResend($event)"
                           (gotoSignup$)              = "gotoSignup()"></app-lm-login>`
})
export class LmLoginContainerComponent implements OnInit {

  assets$: Observable<LmLoginPageAssetsModel>
  form$: Observable<LmLoginFormAssetsModel>
  formGroup$: Observable<FormGroup>

  error$: BehaviorSubject<LmWSO2ErrorResponseModel> = new BehaviorSubject<LmWSO2ErrorResponseModel>(INITIAL_WSO2_ERROR)
  componentFlags$: Observable<LmLoginComponentFlags>

  constructor(
    private _loginService: LmLoginService
  ) { }

  ngOnInit(): void {

    this._loginService.fetchPageAssets()
    this._loginService.fetchFormAssets()
    this._loginService.fetchFormGroup()

    this.assets$ = this._loginService.watchPageAssets$()
    this.form$ = this._loginService.watchFormAssets$()
    this.formGroup$ = this._loginService.watchFormGroup$()
    this.componentFlags$ = this._loginService.watchComponentFlags$()

    this.error$.next(null)
  }

  triggerResendVisibility(_: boolean): void {
    this._loginService.setComponentFlags({
      ...INITIAL_COMPONENT_FLAGS,
      resend: {
        ...INITIAL_COMPONENT_FLAGS.resend,
        visible: _
      }
    })
  }

  triggerLogin(_: LmLoginRequestModel): void {
    const { username, password } = _

    this._loginService.setComponentFlags({
      ...INITIAL_COMPONENT_FLAGS,
      login: {
        ...INITIAL_COMPONENT_FLAGS.login,
        progress: true
      }
    })

    this.error$.next(null)
    this._loginService.triggerLogin(_).subscribe(

      // success handler
      (_: AppEndpointResponseModel<any>) => {
        console.groupCollapsed('[LM Login Container] Login success')
        console.log(_)

        // Setting component flags
        console.log('Setting component flags')
        this._loginService.setComponentFlags({
          ...INITIAL_COMPONENT_FLAGS,
          login: {
            ...INITIAL_COMPONENT_FLAGS.login,
            success: true
          }
        })

        console.log('Displaying snackbar')
        this._loginService.showSnackbar({ message: 'Login Successful', button: { text: 'OK!', link: '', icon: null } })

        console.log('Storing token into local Storage')
        // store the token in localStorage
        this._loginService.storeToken({ token: (<LmLoginResponseModel>_.data).token })

        console.log('Storing user details into local Storage')
        // update the navbar
        this._loginService.storeUserDetails({ username, password })

        console.log('Redirecting')
        // redirect to homepage
        this._loginService.gotoHome()

        console.groupEnd()
      },

      // error handler
      (_: HttpErrorResponse) => {
        // this.bIsProcessing$.next(false)

        console.groupCollapsed('[LM Login Container] Login failed')

        // Setting component flags
        console.log('Setting component flags')
        this._loginService.setComponentFlags({
          ...INITIAL_COMPONENT_FLAGS,
          login: {
            ...INITIAL_COMPONENT_FLAGS.login,
            fail: true
          }
        })

        this.error$.next(this._loginService.handleError(_))

        console.groupEnd()
      },

      // complete
      () => {
        console.groupCollapsed('[LM Login Container] Login subscription complete')
        console.groupEnd()
      }
    )
  }

  triggerResend(_: { username: string }) {
    // this.bIsResending$.next(true)
    this._loginService.setComponentFlags({
      ...INITIAL_COMPONENT_FLAGS,
      resend: {
        ...INITIAL_COMPONENT_FLAGS.resend,
        progress: true
      }
    })

    this._loginService.triggerResend(_).subscribe(

      // success handler
      (__: AppEndpointResponseModel<any>) => {
        console.groupCollapsed('[LM Login Container] Resend Code success')
        console.log(__)

        // Setting component flags
        console.log('Setting component flags')
        this._loginService.setComponentFlags({
          ...INITIAL_COMPONENT_FLAGS,
          resend: {
            ...INITIAL_COMPONENT_FLAGS.resend,
            success: true
          }
        })

        // Displaying snackbar message
        console.log('Displaying snackbar')
        this._loginService.showSnackbar({ message: `Verification code sent`, button: { text: 'OK!', link: '', icon: null } })

        console.groupEnd()
      },

      // error handler
      (__: HttpErrorResponse) => {
        console.groupCollapsed('[LM Login Container] Resend Code failed')
        console.log(__)

        // Setting component flags
        console.log('Setting component flags')
        this._loginService.setComponentFlags({
          ...INITIAL_COMPONENT_FLAGS,
          resend: {
            ...INITIAL_COMPONENT_FLAGS.resend,
            fail: true
          }
        })

        // Displaying snackbar message
        console.log('Displaying snackbar')
        this._loginService.showSnackbar({ message: 'Unable to send verification code', button: { text: 'OK!', link: '', icon: null } })

        console.log('Handling error')
        this.error$.next(this._loginService.handleError(__))

        console.groupEnd()
      },

      // complete
      () => {
        console.groupCollapsed('[LM Login Container] Resend Code subscription complete')
        console.groupEnd()
      }
    )
  }

  gotoSignup(): void {
    this._loginService.gotoSignup()
  }
}
