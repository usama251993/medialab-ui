import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { ParamMap } from '@angular/router'

import { BehaviorSubject, Observable } from 'rxjs'

import { AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { AppSnackbarModel } from '@shared/models/app-snackbar.model'

import { INITIAL_COMPONENT_FLAGS, LmVerifyAssetsModel, LmVerifyComponentFlags } from '@lm-core/models/lm-verify/lm-verify.model'
import { LmWSO2ErrorResponseModel } from '@lm-core/models/lm-wso2-error.model'

import { LmCoreService } from '../lm-core.service'
import { LmAuthService } from '../lm-auth/lm-auth.service'

@Injectable({
  providedIn: 'root'
})
export class LmVerifyService {

  private _assets$: BehaviorSubject<LmVerifyAssetsModel> = new BehaviorSubject<LmVerifyAssetsModel>(null)
  private _componentFlags$: BehaviorSubject<LmVerifyComponentFlags> = new BehaviorSubject<LmVerifyComponentFlags>(INITIAL_COMPONENT_FLAGS)

  assetsModel: LmVerifyAssetsModel

  constructor(
    private _coreService: LmCoreService,
    private _authService: LmAuthService
  ) {
    this.assetsModel = {
      _: {
        title: 'Email Verification',
        content: 'Your e-mail is not verified. Please click on the link in the e-mail to verify it.'
      },
      resend: {
        message: {
          _: 'Did not receive the e-mail?',
          progress: 'Resending the verification code',
          success: 'Verification code sent successfully',
          failed: 'Unable to send verification code. Kindly contact the administrator.'
        },
        button: {
          text: 'Resend Email',
          link: null,
          appearance: 'link',
          color: 'accent',
          type: 'button',
          disabled: false
        }
      },
      verify: {
        message: {
          _: 'Verify your email by clicking',
          progress: 'Verifying email',
          success: 'Email verified successfully!',
          failed: 'Unable to verify email. Kindly contact the administrator.'
        },
        button: {
          text: 'here',
          link: null,
          appearance: 'link',
          color: 'accent',
          type: 'button',
          disabled: false
        }
      }
    }
  }

  fetchAssets(): void {
    this._assets$.next({ ...this.assetsModel })
  }

  watchAssets$(): Observable<LmVerifyAssetsModel> {
    return this._assets$.asObservable()
  }

  watchUser$(): Observable<{ username: string, realm: string }> {
    return this._coreService.watchUserForResendProcess$()
  }

  triggerVerify(_: { token: string }): Observable<AppEndpointResponseModel<any>> {
    return this._authService.verify(_)
  }

  handleError(_: HttpErrorResponse): LmWSO2ErrorResponseModel {
    return this._coreService.handleWSO2Error(_)
  }

  setComponentFlags(_: LmVerifyComponentFlags): void {
    this._componentFlags$.next(_)
  }

  watchComponentFlags$(): Observable<LmVerifyComponentFlags> {
    return this._componentFlags$.asObservable()
  }

  watchParamMap$(): Observable<ParamMap> {
    return this._coreService.watchParamMap$()
  }

  triggerResendCode(_: { username: string, realm: string }): Observable<AppEndpointResponseModel<any>> {
    return this._authService.resendCode(_)
  }

  showSnackbar(_: AppSnackbarModel) {
    this._coreService.showSnackbar(_)
  }
}
