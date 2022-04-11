import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http'

import { BehaviorSubject, Observable } from 'rxjs'

import { AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { AppOptionModel } from '@shared/models/app-assets.model'
import { INITIAL_FORM_GROUP } from '@shared/models/app-form.model'
import { AppSnackbarModel } from '@shared/models/app-snackbar.model'
import { AppRouterService } from '@shared/services/app-router/app-router.service'

import { LmSignupRequestModel } from '@lm-core/models/common/auth/lm-auth-signup.model'
import { INITIAL_SIGNUP_PAGE_ASSETS, LmSignupPageAssetsModel } from '@lm-core/models/lm-signup/lm-signup-assets.model'
import { INITIAL_SIGNUP_FORM_ASSETS, LmSignupFormAssetsModel } from '@lm-core/models/lm-signup/lm-signup.model'
import { LmWSO2ErrorResponseModel } from '@lm-core/models/lm-wso2-error.model'
import { LmKBErrorResponseModel } from '@lm-core/models/lm-kb-error.model'
import { CORE_ROUTES } from '@lm-core/lm-core.routes'

import { LmAuthService } from '../lm-auth/lm-auth.service'
import { LmCoreService } from '../lm-core.service'

@Injectable({
  providedIn: 'root'
})
export class LmSignupService {

  private _pageAssets$: BehaviorSubject<LmSignupPageAssetsModel> = new BehaviorSubject<LmSignupPageAssetsModel>(INITIAL_SIGNUP_PAGE_ASSETS)
  private _formAssets$: BehaviorSubject<LmSignupFormAssetsModel> = new BehaviorSubject<LmSignupFormAssetsModel>(INITIAL_SIGNUP_FORM_ASSETS)
  private _formGroup$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(INITIAL_FORM_GROUP)
  private _organizations$: BehaviorSubject<AppOptionModel[]> = new BehaviorSubject<AppOptionModel[]>([])
  private _countries$: BehaviorSubject<AppOptionModel[]> = new BehaviorSubject<AppOptionModel[]>([])

  private _pageAssets: LmSignupPageAssetsModel
  private _formAssets: LmSignupFormAssetsModel
  private _formGroup: FormGroup
  private _organizations: AppOptionModel[]
  private _countries: AppOptionModel[]

  constructor(
    private _fb: FormBuilder,
    private _authService: LmAuthService,
    private _coreService: LmCoreService,
    private _routerService: AppRouterService
  ) {

    this._pageAssets = {
      title: 'Sign up for LTI MediaLabs',
      login: {
        text: 'Login',
        link: null,
        appearance: 'link',
        color: 'accent',
        type: 'button',
        disabled: false
      },
      signup: {
        text: 'Signup',
        link: null,
        appearance: 'stroked',
        color: 'primary',
        type: 'submit',
        disabled: false
      },
      passwordPolicy: {
        conditions: [
          {
            policy: 'length',
            statement: 'At least 8 characters long, but no more than 32',
            bIsValid: false
          },
          {
            policy: 'uppercase',
            statement: 'An uppercase letter',
            bIsValid: false
          },
          {
            policy: 'lowercase',
            statement: 'A lowercase letter',
            bIsValid: false
          },
          {
            policy: 'digit',
            statement: 'A number',
            bIsValid: false
          },
          {
            policy: 'special',
            statement: 'A special character *.!@#$%^&(){}[]:;<>,.?/~_+-=|\\',
            bIsValid: false
          }
        ]
      }
    }

    this._formAssets = {
      givenname: {
        name: 'givenname',
        label: 'First Name',
        placeholder: 'Your First Name',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      lastname: {
        name: 'lastname',
        label: 'Last Name',
        placeholder: 'Your Last Name',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      email: {
        name: 'email',
        label: 'E-mail',
        placeholder: 'Your Work E-mail',
        type: 'email',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      password: {
        name: 'password',
        label: 'Password',
        placeholder: 'Choose a Password',
        type: 'password',
        initialization: { value: '', disabled: false },
        validation: {
          bIsMandatory: true,
          pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\*\.\!\@\#\$\%\^\&\(\)\{\}\[\]\:\;\<\>\,\.\?\/\~\\_\+\-\=\|\\])(.){8,32}$/
        }
      },
      confirm: {
        name: 'confirm',
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
        type: 'password',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      country: {
        name: 'country',
        label: 'Country',
        placeholder: 'Your Country',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      organization: {
        name: 'organization',
        label: 'Organization',
        placeholder: 'Your Organization',
        type: 'select',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      }
    }

    this._formGroup = this._fb.group({
      givenname: [
        {
          value: this._formAssets.givenname.initialization.value,
          disabled: this._formAssets.givenname.initialization.disabled
        },
        [Validators.required]
      ],
      lastname: [
        {
          value: this._formAssets.lastname.initialization.value,
          disabled: this._formAssets.lastname.initialization.disabled
        },
        [Validators.required]
      ],
      email: [
        {
          value: this._formAssets.email.initialization.value,
          disabled: this._formAssets.email.initialization.disabled
        },
        [Validators.required, Validators.email]
      ],
      password: [
        {
          value: this._formAssets.password.initialization.value,
          disabled: this._formAssets.password.initialization.disabled
        },
        [
          Validators.required,
          Validators.pattern(this._formAssets.password.validation.pattern)
        ]
      ],
      confirm: [
        {
          value: this._formAssets.confirm.initialization.value,
          disabled: this._formAssets.confirm.initialization.disabled
        },
        [Validators.required]
      ],
      country: [
        {
          value: this._formAssets.country.initialization.value,
          disabled: this._formAssets.country.initialization.disabled
        },
        [Validators.required]
      ],
      organization: [
        {
          value: this._formAssets.organization.initialization.value,
          disabled: this._formAssets.organization.initialization.disabled
        },
        [Validators.required]
      ]
    })

    this._organizations = [{ value: 'sony', viewValue: 'Sony' }]

    this._countries = [{ value: 'US', viewValue: 'United States of America' }]
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

  fetchOrganizations(): void {
    this._organizations$.next(this._organizations)
  }

  fetchCountries(): void {
    this._countries$.next(this._countries)
  }

  watchPageAssets$(): Observable<LmSignupPageAssetsModel> {
    return this._pageAssets$.asObservable()
  }

  watchFormAssets$(): Observable<LmSignupFormAssetsModel> {
    return this._formAssets$.asObservable()
  }

  watchFormGroup$(): Observable<FormGroup> {
    return this._formGroup$.asObservable()
  }

  watchOrganizations$(): Observable<AppOptionModel[]> {
    return this._organizations$.asObservable()
  }

  watchCountries$(): Observable<AppOptionModel[]> {
    return this._countries$.asObservable()
  }

  setUserForResendProcess(_: { username: string; realm: string }): void {
    this._coreService.setUserForResendProcess(_)
  }

  getUserName(_: { email: string }): string {
    return this._authService.getUserName(_)
  }

  getRealm(_: { email: string }): string {
    return this._authService.getRealm(_)
  }

  triggerSignup(_: LmSignupRequestModel): Observable<AppEndpointResponseModel<any>> {
    return this._authService.signup(_)
  }

  gotoLogin(): void {
    this._routerService.navigate({ path: [CORE_ROUTES.LOGIN], extras: {} })
  }

  gotoVerify(_: { username: string; realm: string }): void {
    this._routerService.navigate({ path: [CORE_ROUTES.VERIFY], extras: { queryParams: { ..._ } } })
  }

  handleWSO2Error(_: HttpErrorResponse): LmWSO2ErrorResponseModel {
    return this._coreService.handleWSO2Error(_)
  }

  handleKBError(_: HttpErrorResponse): LmKBErrorResponseModel {
    return this._coreService.handleKBError(_)
  }

  showSnackbar(_: AppSnackbarModel): void {
    this._coreService.showSnackbar(_)
  }

}
