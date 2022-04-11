import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { BehaviorSubject, Observable } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { Dictionary } from '@ngrx/entity'

import * as fromUtil from '@shared/util/app-form.util'
import { LmSignupRequestModel } from '@shared/models/lm-auth.model'
import { LmSignupAssetsModel } from '@lm-core/models/lm-signup.model'

@Component({
  selector: 'app-lm-signup',
  templateUrl: './lm-signup.component.html',
  styleUrls: ['./lm-signup.component.scss']
})
export class LmSignupComponent implements OnInit {

  assets$: BehaviorSubject<Dictionary<LmSignupAssetsModel>>
  form$: BehaviorSubject<Dictionary<LmSignupAssetsModel>>
  formGroup$: BehaviorSubject<FormGroup>

  @Input()
  set assetsDict(value: Dictionary<LmSignupAssetsModel>) { this.assets$.next(value) };
  get assetsDict(): Dictionary<LmSignupAssetsModel> { return this.assets$.getValue() };

  @Input()
  set formDict(value: Dictionary<LmSignupAssetsModel>) { this.form$.next(value) };
  get formDict(): Dictionary<LmSignupAssetsModel> { return this.form$.getValue() };

  @Input()
  set formGroup(value: FormGroup) { this.formGroup$.next(value) };
  get formGroup(): FormGroup { return this.formGroup$.getValue() };

  @Input() assetsEntityID: string
  @Input() formEntityID: string
  @Input() contextEntityID: string

  @Input() organizations: { value: string, viewValue: string }[]

  @Output() triggerSignup$: EventEmitter<LmSignupRequestModel>
  @Output() triggerValidate$: EventEmitter<{ form: LmSignupAssetsModel; input: string }>
  @Output() gotoLogin$: EventEmitter<void>

  constructor() {
    this.assets$ = new BehaviorSubject<Dictionary<LmSignupAssetsModel>>(null)
    this.form$ = new BehaviorSubject<Dictionary<LmSignupAssetsModel>>(null)
    this.formGroup$ = new BehaviorSubject<FormGroup>(null)
    this.triggerSignup$ = new EventEmitter<LmSignupRequestModel>()
    this.triggerValidate$ = new EventEmitter<{ form: LmSignupAssetsModel; input: string }>()
    this.gotoLogin$ = new EventEmitter<void>()
  }

  ngOnInit(): void {
    this.enableValidations()
  }

  enableValidations(): void {
    this.enablePasswordValidation(this.formGroup
      .get(this.formDict[this.formEntityID].form.password.name).valueChanges)
    this.enablePasswordValidation(this.formGroup
      .get(this.formDict[this.formEntityID].form.confirm.name).valueChanges)

    this.formGroup
      .get(this.formDict[this.formEntityID].form.password.name).valueChanges
      .pipe(debounceTime(150))
      .subscribe((input: string) => {
        this.triggerValidate$.emit({ form: this.formDict[this.formEntityID], input })
      })
  }

  enablePasswordValidation(dataStream$: Observable<string>): void {
    dataStream$.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(() => this.validateConfirm())
  }

  validateConfirm(): void {
    const formPassword: string = fromUtil.getFormControlValue({
      formGroup: this.formGroup,
      formControlName: this.formDict[this.formEntityID].form.password.name
    })
    const confirmPassword: string = fromUtil.getFormControlValue({
      formGroup: this.formGroup,
      formControlName: this.formDict[this.formEntityID].form.confirm.name
    })

    return (!!confirmPassword)
      ? (formPassword === confirmPassword)
        ? this.formGroup
          .get(this.formDict[this.formEntityID].form.confirm.name).setErrors(null)
        : this.formGroup
          .get(this.formDict[this.formEntityID].form.confirm.name).setErrors({
            passwordMismatch: {
              required: `(base64 encrypted) => ${btoa(formPassword)}`,
              entered: `(base64 encrypted) => ${btoa(confirmPassword)}`
            }
          })
      : this.formGroup
        .get(this.formDict[this.formEntityID].form.confirm.name).setErrors({
          required: true
        })

  }

  submitForm(event: Event): void {
    if (event['submitter'].type === 'submit') {
      let userModel: LmSignupRequestModel = {
        id: this.contextEntityID,
        givenname: fromUtil.getFormControlValue({
          formGroup: this.formGroup,
          formControlName: this.formDict[this.formEntityID].form.givenname.name
        }),
        lastname: fromUtil.getFormControlValue({
          formGroup: this.formGroup,
          formControlName: this.formDict[this.formEntityID].form.lastname.name

        }),
        username: fromUtil.getFormControlValue({
          formGroup: this.formGroup,
          formControlName: this.formDict[this.formEntityID].form.email.name

        }),
        password: fromUtil.getFormControlValue({
          formGroup: this.formGroup,
          formControlName: this.formDict[this.formEntityID].form.password.name

        }),
        country: fromUtil.getFormControlValue({
          formGroup: this.formGroup,
          formControlName: this.formDict[this.formEntityID].form.country.name

        }),
        organization: fromUtil.getFormControlValue({
          formGroup: this.formGroup,
          formControlName: this.formDict[this.formEntityID].form.organization.name
        }),
        designation: fromUtil.getFormControlValue({
          formGroup: this.formGroup,
          formControlName: this.formDict[this.formEntityID].form.designation.name
        })
      }
      this.triggerSignup$.emit(userModel)
    }
  }

  // toggleVisibility(payload: { formField: LmFormFieldModel, bVisibility: boolean }): void {
  // if (payload.bVisibility) {
  //   payload.formField.type = 'text'
  // } else {
  //   payload.formField.type = 'password'
  // }

  // return (payload.bVisibility) 
  //   ? payload.formField.type = 'text'
  //   : payload.formField.type = 'password'
  // }

  gotoLogin() {
    this.gotoLogin$.emit()
  }

  displayPolicy(): void { }

}
