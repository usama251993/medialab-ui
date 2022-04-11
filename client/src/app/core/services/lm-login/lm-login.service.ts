import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http'

import { BehaviorSubject, Observable } from 'rxjs'

import { AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { AppButtonModel } from '@shared/models/app-assets.model'
import { INITIAL_FORM_GROUP } from '@shared/models/app-form.model'

import { LmLoginRequestModel } from '@lm-core/models/common/auth/lm-auth-login.model'
import { LmLoginPageAssetsModel, INITIAL_LOGIN_PAGE_ASSETS, LmLoginComponentFlags, INITIAL_COMPONENT_FLAGS } from '@lm-core/models/lm-login/lm-login-assets.model'
import { LmLoginFormAssetsModel, INITIAL_LOGIN_FORM_ASSETS } from '@lm-core/models/lm-login/lm-login.model'
import { LmWSO2ErrorResponseModel } from '@lm-core/models/lm-wso2-error.model'
import { CORE_ROUTES } from '@lm-core/lm-core.routes'

import { LmCoreService } from '../lm-core.service'
import { LmAuthService } from '../lm-auth/lm-auth.service'

@Injectable({
  providedIn: 'root'
})
export class LmLoginService {

  private _pageAssets$: BehaviorSubject<LmLoginPageAssetsModel> = new BehaviorSubject<LmLoginPageAssetsModel>(INITIAL_LOGIN_PAGE_ASSETS)
  private _formAssets$: BehaviorSubject<LmLoginFormAssetsModel> = new BehaviorSubject<LmLoginFormAssetsModel>(INITIAL_LOGIN_FORM_ASSETS)
  private _formGroup$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(INITIAL_FORM_GROUP)
  private _componentFlags$: BehaviorSubject<LmLoginComponentFlags> = new BehaviorSubject<LmLoginComponentFlags>(INITIAL_COMPONENT_FLAGS)

  private _pageAssets: LmLoginPageAssetsModel
  private _formAssets: LmLoginFormAssetsModel
  private _formGroup: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _coreService: LmCoreService,
    private _authService: LmAuthService
  ) {

    this._pageAssets = {
      title: 'Login to LTI MediaLabs',
      login: {
        text: 'Login',
        link: null,
        appearance: 'stroked',
        color: 'primary',
        type: 'submit',
        disabled: false
      },
      // login: 'Login',
      // signup: 'Signup'
      signup: {
        text: 'Signup',
        link: null,
        appearance: 'link',
        color: 'accent',
        type: 'button',
        disabled: false
      }
    }

    this._formAssets = {
      username: {
        name: 'username',
        type: 'text',
        placeholder: 'Username',
        label: 'Username',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      password: {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        label: 'Password',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
    }

    this._formGroup = this._fb.group({
      username: [
        {
          value: this._formAssets.username.initialization.value,
          disabled: this._formAssets.username.initialization.disabled
        },
        [Validators.required]
      ],
      password: [
        {
          value: this._formAssets.password.initialization.value,
          disabled: this._formAssets.password.initialization.disabled
        },
        [Validators.required]
      ]
    })
  }

  fetchPageAssets(): void {
    this._pageAssets$.next(this._pageAssets)
  }

  fetchFormAssets(): void {
    this._formAssets$.next(this._formAssets)
  }

  fetchFormGroup(): void {
    this._formGroup$.next(this._formGroup)
  }

  watchPageAssets$(): Observable<LmLoginPageAssetsModel> {
    return this._pageAssets$.asObservable()
  }

  watchFormAssets$(): Observable<LmLoginFormAssetsModel> {
    return this._formAssets$.asObservable()
  }

  watchFormGroup$(): Observable<FormGroup> {
    return this._formGroup$.asObservable()
  }

  setComponentFlags(_: LmLoginComponentFlags): void {
    this._componentFlags$.next(_)
  }

  watchComponentFlags$(): Observable<LmLoginComponentFlags> {
    return this._componentFlags$.asObservable()
  }

  triggerResend(_: { username: string }): Observable<AppEndpointResponseModel<any>> {
    const username: string = this._authService.getUserName({ email: _.username })
    const realm: string = this._authService.getRealm({ email: _.username })
    return this._authService.resendCode({ username, realm })
  }

  triggerLogin(_: LmLoginRequestModel): Observable<AppEndpointResponseModel<any>> {
    return this._authService.login(_)
  }

  storeToken(_: { token: string }): void {
    this._coreService.setToken(_)
  }

  storeUserDetails(_: LmLoginRequestModel): void {
    this._coreService.setUser(_)
  }

  handleError(_: HttpErrorResponse): LmWSO2ErrorResponseModel {
    return this._coreService.handleWSO2Error(_)
  }

  gotoSignup() {
    this._coreService.navigate({ path: [CORE_ROUTES.SIGNUP], extras: {} })
  }

  gotoHome() {
    this._coreService.navigate({ path: [CORE_ROUTES.HOME], extras: {} })
  }

  showSnackbar(_: { message: string; button: AppButtonModel }) {
    this._coreService.showSnackbar(_)
  }
}
