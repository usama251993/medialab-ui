import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { BehaviorSubject } from 'rxjs'
import { Dictionary } from '@ngrx/entity'

import * as fromUtil from '@shared/util/app-form.util'
import { LmLoginRequestModel } from '@shared/models/lm-auth.model'
import { LmLoginAssetsModel } from '@lm-core/models/lm-login.model'

@Component({
  selector: 'app-lm-login',
  templateUrl: './lm-login.component.html',
  styleUrls: ['./lm-login.component.scss']
})
export class LmLoginComponent implements OnInit {

  assets$: BehaviorSubject<Dictionary<LmLoginAssetsModel>>
  form$: BehaviorSubject<Dictionary<LmLoginAssetsModel>>
  formGroup$: BehaviorSubject<FormGroup>

  @Input()
  set assetsDict(value: Dictionary<LmLoginAssetsModel>) { this.assets$.next(value) };
  get assetsDict(): Dictionary<LmLoginAssetsModel> { return this.assets$.getValue() };

  @Input()
  set formDict(value: Dictionary<LmLoginAssetsModel>) { this.form$.next(value) };
  get formDict(): Dictionary<LmLoginAssetsModel> { return this.form$.getValue() };

  @Input()
  set formGroup(value: FormGroup) { this.formGroup$.next(value) };
  get formGroup(): FormGroup { return this.formGroup$.getValue() };

  @Input() assetsEntityID: string
  @Input() formEntityID: string
  @Input() contextEntityID: string

  @Output() triggerLogin$: EventEmitter<LmLoginRequestModel>
  @Output() gotoSignup$: EventEmitter<void>

  constructor(
  ) {
    this.assets$ = new BehaviorSubject<Dictionary<LmLoginAssetsModel>>(null)
    this.form$ = new BehaviorSubject<Dictionary<LmLoginAssetsModel>>(null)
    this.formGroup$ = new BehaviorSubject<FormGroup>(null)
    this.triggerLogin$ = new EventEmitter<LmLoginRequestModel>()
    this.gotoSignup$ = new EventEmitter<void>()
  }

  ngOnInit(): void { }

  submitForm(event: Event): void {
    if (event['submitter'].type === 'submit') {
      let data: LmLoginRequestModel = {
        id: this.contextEntityID,
        username: fromUtil.getFormControlValue({
          formGroup: this.formGroup,
          formControlName: this.formDict[this.formEntityID].form.username.name
        }).toString(),
        password: btoa(fromUtil.getFormControlValue({
          formGroup: this.formGroup,
          formControlName: this.formDict[this.formEntityID].form.password.name
        }).toString())
      }
      data.username = data.username.split('@').join('-')
      this.triggerLogin$.emit(data)
    } else { }
  }

  gotoSignup() {
    this.gotoSignup$.emit()
  }

}
