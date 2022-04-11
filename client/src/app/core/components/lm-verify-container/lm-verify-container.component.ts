import { Component, OnInit } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { ParamMap } from '@angular/router'

import { BehaviorSubject, Observable } from 'rxjs'

import { AppEndpointResponseModel } from '@shared/models/app-endpoint.model'

import { LmVerifyAssetsModel, LmVerifyComponentFlags, INITIAL_COMPONENT_FLAGS } from '@lm-core/models/lm-verify/lm-verify.model'
import { LmWSO2ErrorResponseModel } from '@lm-core/models/lm-wso2-error.model'
import { LmVerifyService } from '@lm-core/services/lm-verify/lm-verify.service'

@Component({
  selector: 'app-lm-verify-container',
  template: `<app-lm-verify [assets]                      = "assets$         | async"
                            [user]                        = "user$           | async"
                            [queryParams]                 = "queryParams$    | async"
                            [error]                       = "error$          | async"
                            [componentFlags]              = "componentFlags$ | async"
                            (triggerResendCode$)          = "resendCode($event)"
                            (triggerVerification$)        = "triggerVerification($event)"
                            (triggerComponentFlagChange$) = "triggerComponentFlagChange($event)"></app-lm-verify>`
})

export class LmVerifyContainerComponent implements OnInit {

  assets$: Observable<LmVerifyAssetsModel>
  user$: Observable<{ username: string, realm: string }>
  queryParams$: Observable<ParamMap>

  error$: BehaviorSubject<LmWSO2ErrorResponseModel> = new BehaviorSubject<LmWSO2ErrorResponseModel>(null)
  componentFlags$: Observable<LmVerifyComponentFlags>

  constructor(
    private _verifyService: LmVerifyService
  ) { }

  ngOnInit(): void {

    this._verifyService.fetchAssets()
    this.assets$ = this._verifyService.watchAssets$()

    this.user$ = this._verifyService.watchUser$()
    this.componentFlags$ = this._verifyService.watchComponentFlags$()
    this.queryParams$ = this._verifyService.watchParamMap$()

    this.error$.next(null)
  }

  resendCode(_: { username: string, realm: string }) {
    this._verifyService.setComponentFlags({
      ...INITIAL_COMPONENT_FLAGS,
      resend: {
        ...INITIAL_COMPONENT_FLAGS.resend,
        progress: true
      }
    })

    this.error$.next(null)
    this._verifyService.triggerResendCode(_).subscribe(

      // success handler
      (__: AppEndpointResponseModel<any>) => {

        console.groupCollapsed('[LM Verify Container] Resend Code success')
        console.log(__)

        // Setting component flags
        console.log('Setting component flags')
        this._verifyService.setComponentFlags({
          ...INITIAL_COMPONENT_FLAGS,
          resend: {
            ...INITIAL_COMPONENT_FLAGS.resend,
            success: true
          }
        })

        // Displaying snackbar message
        console.log('Displaying snackbar')
        this._verifyService.showSnackbar({ message: `Verification code sent`, button: { text: 'OK!', link: '', icon: null } })

        console.groupEnd()
      },

      // error handler
      (__: HttpErrorResponse) => {
        console.groupCollapsed('[LM Verify Container] Resend Code failed')
        console.log(__)

        // Setting component flags
        console.log('Setting component flags')
        this._verifyService.setComponentFlags({
          ...INITIAL_COMPONENT_FLAGS,
          resend: {
            ...INITIAL_COMPONENT_FLAGS.resend,
            fail: true
          }
        })

        // Displaying snackbar message
        console.log('Displaying snackbar')
        this._verifyService.showSnackbar({ message: 'Unable to send verification code', button: { text: 'OK!', link: '', icon: null } })

        this.error$.next(this._verifyService.handleError(__))
        console.groupEnd()
      },

      // complete
      () => {
        console.log('[LM Verify Container] Resend Code subscription complete')
      }
    )
  }

  triggerVerification(_: { token: string }) {
    this._verifyService.setComponentFlags({
      ...INITIAL_COMPONENT_FLAGS,
      verify: {
        ...INITIAL_COMPONENT_FLAGS.verify,
        progress: true
      }
    })

    this.error$.next(null)

    this._verifyService.triggerVerify(_).subscribe(

      // success handler
      (__: AppEndpointResponseModel<any>) => {
        console.groupCollapsed('[LM Verify] Verification success')
        console.log(__)

        // Setting component flags
        console.log('Setting component flags')
        this._verifyService.setComponentFlags({
          ...INITIAL_COMPONENT_FLAGS,
          verify: {
            ...INITIAL_COMPONENT_FLAGS.verify,
            success: true
          }
        })

        // Displaying snackbar message
        console.log('Displaying snackbar')
        this._verifyService.showSnackbar({ message: `E-mail verification successful`, button: { text: 'OK!', link: '', icon: null } })

        // this._loginService.gotoHome()
        console.groupEnd()
      },

      // error handler
      (__: HttpErrorResponse) => {
        console.groupCollapsed('[LM Verify Container] Email verification failed')
        console.log(__)

        // Setting component flags
        console.log('Setting component flags')
        this._verifyService.setComponentFlags({
          ...INITIAL_COMPONENT_FLAGS,
          verify: {
            ...INITIAL_COMPONENT_FLAGS.verify,
            fail: true
          }
        })

        // Displaying snackbar message
        console.log('Displaying snackbar')
        this._verifyService.showSnackbar({ message: `E-mail verification failed`, button: { text: 'OK!', link: '', icon: null } })

        // Handling Error
        console.log('Handling Error')
        this.error$.next(this._verifyService.handleError(__))

        console.groupEnd()
      },

      // complete
      () => {
        console.groupCollapsed('[LM Verify Container] Verify subscription complete')
        console.groupEnd()
      }
    )
  }

  triggerComponentFlagChange(_: LmVerifyComponentFlags): void {
    this._verifyService.setComponentFlags(_)
  }

}
