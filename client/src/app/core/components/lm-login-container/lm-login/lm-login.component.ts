import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { BehaviorSubject, Observable } from 'rxjs'

import * as fromUtil from '@shared/util/app-form.util'
import { AppFormFieldModel, INITIAL_FORM_GROUP } from '@shared/models/app-form.model'

import { LmLoginRequestModel } from '@lm-core/models/common/auth/lm-auth-login.model'
import { LmWSO2ErrorResponseModel, INITIAL_WSO2_ERROR } from '@lm-core/models/lm-wso2-error.model'
import { INITIAL_COMPONENT_FLAGS, INITIAL_LOGIN_PAGE_ASSETS, LmLoginComponentFlags, LmLoginPageAssetsModel } from '@lm-core/models/lm-login/lm-login-assets.model'
import { INITIAL_LOGIN_FORM_ASSETS, LmLoginFormAssetsModel } from '@lm-core/models/lm-login/lm-login.model'
import { AppButton2Model } from '@shared/models/app-assets.model'

@Component({
  selector: 'app-lm-login',
  templateUrl: './lm-login.component.html',
  styleUrls: ['./lm-login.component.scss']
})
export class LmLoginComponent implements OnInit {

  private _assets$: BehaviorSubject<LmLoginPageAssetsModel> = new BehaviorSubject<LmLoginPageAssetsModel>(INITIAL_LOGIN_PAGE_ASSETS)
  private _form$: BehaviorSubject<LmLoginFormAssetsModel> = new BehaviorSubject<LmLoginFormAssetsModel>(INITIAL_LOGIN_FORM_ASSETS)
  private _formGroup$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(INITIAL_FORM_GROUP)
  private _error$: BehaviorSubject<LmWSO2ErrorResponseModel> = new BehaviorSubject<LmWSO2ErrorResponseModel>(INITIAL_WSO2_ERROR)
  loginAssets$: Observable<AppButton2Model>

  private _componentFlags$: BehaviorSubject<LmLoginComponentFlags> = new BehaviorSubject<LmLoginComponentFlags>(INITIAL_COMPONENT_FLAGS)

  @Input()
  set assets(value: LmLoginPageAssetsModel) { this._assets$.next(value) }
  get assets(): LmLoginPageAssetsModel { return this._assets$.getValue() }

  @Input()
  set form(value: LmLoginFormAssetsModel) { this._form$.next(value) }
  get form(): LmLoginFormAssetsModel { return this._form$.getValue() }

  @Input()
  set formGroup(value: FormGroup) { this._formGroup$.next(value) }
  get formGroup(): FormGroup { return this._formGroup$.getValue() }

  @Input()
  set error(value: LmWSO2ErrorResponseModel) { this._error$.next(value) }
  get error(): LmWSO2ErrorResponseModel { return this._error$.getValue() }

  @Input()
  set componentFlags(value: LmLoginComponentFlags) { this._componentFlags$.next(value) }
  get componentFlags(): LmLoginComponentFlags { return this._componentFlags$.getValue() }

  @Output() triggerLogin$: EventEmitter<LmLoginRequestModel> = new EventEmitter<LmLoginRequestModel>()
  @Output() gotoSignup$: EventEmitter<void> = new EventEmitter<void>()
  @Output() triggerResend$: EventEmitter<{ username: string }> = new EventEmitter<{ username: string }>()
  @Output() triggerResendVisibility$: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
    this._error$.subscribe(_ => { if (!!_?.resend) this.toggleResendVisibility(true) })
  }

  submitForm(event: Event): void {
    if (event['submitter'].type === 'submit') {
      this.triggerLogin$.emit(<LmLoginRequestModel>{
        ...this.formGroup.value,
        username: fromUtil.getFormControlValue({
          formGroup: this.formGroup,
          formControlName: this.form.username.name
        }).toString().split('@').join('-'),
        password: btoa(fromUtil.getFormControlValue({
          formGroup: this.formGroup,
          formControlName: this.form.password.name
        }).toString())
      })
    }
  }

  toggleVisibility(_: { formField: AppFormFieldModel, bVisibility: boolean }): void {
    if (!!_.bVisibility) _.formField.type = 'text'
    else _.formField.type = 'password'
  }

  toggleResendVisibility(_: boolean) {
    this.triggerResendVisibility$.emit(_)
  }

  triggerResend(_: { username: string }) {
    this.toggleResendVisibility(false)
    this.triggerResend$.emit(_)
  }

  dismissErrorMessage() {
    this.error = null
  }

  gotoSignup() {
    this.gotoSignup$.emit()
  }

}
