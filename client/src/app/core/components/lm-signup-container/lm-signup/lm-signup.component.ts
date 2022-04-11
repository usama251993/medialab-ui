import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { BehaviorSubject, Observable } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

import * as fromUtil from '@shared/util/app-form.util'
import { AppFormFieldModel, INITIAL_FORM_GROUP } from '@shared/models/app-form.model'
import { AppOptionModel } from '@shared/models/app-assets.model'
import { LmSignupRequestModel } from '@lm-core/models/common/auth/lm-auth-signup.model'
import { INITIAL_SIGNUP_PAGE_ASSETS, LmSignupPageAssetsModel } from '@lm-core/models/lm-signup/lm-signup-assets.model'
import { INITIAL_SIGNUP_FORM_ASSETS, LmSignupFormAssetsModel } from '@lm-core/models/lm-signup/lm-signup.model'
import { INITIAL_WSO2_ERROR, LmWSO2ErrorResponseModel } from '@lm-core/models/lm-wso2-error.model'

@Component({
  selector: 'app-lm-signup',
  templateUrl: './lm-signup.component.html',
  styleUrls: ['./lm-signup.component.scss']
})
export class LmSignupComponent implements OnInit {

  private _assets$: BehaviorSubject<LmSignupPageAssetsModel> = new BehaviorSubject<LmSignupPageAssetsModel>(INITIAL_SIGNUP_PAGE_ASSETS)
  private _form$: BehaviorSubject<LmSignupFormAssetsModel> = new BehaviorSubject<LmSignupFormAssetsModel>(INITIAL_SIGNUP_FORM_ASSETS)
  private _formGroup$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(INITIAL_FORM_GROUP)
  private _organizations$: BehaviorSubject<AppOptionModel[]> = new BehaviorSubject<AppOptionModel[]>([])
  private _countries$: BehaviorSubject<AppOptionModel[]> = new BehaviorSubject<AppOptionModel[]>([])
  private _bIsProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  private _error$: BehaviorSubject<LmWSO2ErrorResponseModel> = new BehaviorSubject<LmWSO2ErrorResponseModel>(INITIAL_WSO2_ERROR)

  @Input()
  set assets(value: LmSignupPageAssetsModel) { this._assets$.next(value) };
  get assets(): LmSignupPageAssetsModel { return this._assets$.getValue() };

  @Input()
  set form(value: LmSignupFormAssetsModel) { this._form$.next(value) };
  get form(): LmSignupFormAssetsModel { return this._form$.getValue() };

  @Input()
  set formGroup(value: FormGroup) { this._formGroup$.next(value) };
  get formGroup(): FormGroup { return this._formGroup$.getValue() };

  @Input()
  set organizations(value: AppOptionModel[]) { this._organizations$.next(value) };
  get organizations(): AppOptionModel[] { return this._organizations$.getValue() };

  @Input()
  set countries(value: AppOptionModel[]) { this._countries$.next(value) };
  get countries(): AppOptionModel[] { return this._countries$.getValue() };

  @Input()
  set bIsProcessing(value: boolean) { this._bIsProcessing$.next(value) };
  get bIsProcessing(): boolean { return this._bIsProcessing$.getValue() };

  @Input()
  set error(value: LmWSO2ErrorResponseModel) { this._error$.next(value) };
  get error(): LmWSO2ErrorResponseModel { return this._error$.getValue() };

  @Output() triggerSignup$: EventEmitter<LmSignupRequestModel> = new EventEmitter<LmSignupRequestModel>()
  @Output() gotoLogin$: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
    this.enableValidations()
  }

  enableValidations(): void {
    this.enablePasswordValidation(this.formGroup.get(this.form.password.name).valueChanges)
    this.enablePasswordValidation(this.formGroup.get(this.form.confirm.name).valueChanges)
  }

  enablePasswordValidation(_$: Observable<string>): void {
    _$.pipe(debounceTime(500), distinctUntilChanged()).subscribe(() => this.validateConfirm())
  }

  validateConfirm(): void {
    const formPassword: string = fromUtil.getFormControlValue({
      formGroup: this.formGroup,
      formControlName: this.form.password.name
    })
    const confirmPassword: string = fromUtil.getFormControlValue({
      formGroup: this.formGroup,
      formControlName: this.form.confirm.name
    })

    if (!confirmPassword) this.formGroup.get(this.form.confirm.name).setErrors({ required: true })
    else {
      if (formPassword === confirmPassword) this.formGroup.get(this.form.confirm.name).setErrors(null)
      else {
        this.formGroup.get(this.form.confirm.name).setErrors({
          passwordMismatch: {
            required: `(base64 encrypted) => ${btoa(formPassword)}`,
            entered: `(base64 encrypted) => ${btoa(confirmPassword)}`
          }
        })
      }
    }

  }

  submitForm($: Event): void {
    if ($['submitter'].type === 'submit') this.triggerSignup$.emit(<LmSignupRequestModel>this.formGroup.value)
  }

  toggleVisibility(_: { formField: AppFormFieldModel, bVisibility: boolean }): void {
    !!_.bVisibility ? _.formField.type = 'text' : _.formField.type = 'password'
  }

  gotoLogin() {
    this.gotoLogin$.emit()
  }

  dismissErrorMessage() {
    this.error = null
  }
}

