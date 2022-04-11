import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LmFeedbackAssetsModel } from '@lm-core/models/lm-feedback/lm-feedback-assets.model';
import { LmFeedbackModel } from '@lm-core/models/lm-feedback/lm-feedback.model';
import { AppOptionModel } from '@shared/models/app-assets.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lm-feedback',
  templateUrl: './lm-feedback.component.html',
  styleUrls: ['./lm-feedback.component.scss']
})
export class LmFeedbackComponent implements OnInit {

  private _formGroup$: BehaviorSubject<any>
  private _assets$: BehaviorSubject<LmFeedbackAssetsModel>
  private _form$: BehaviorSubject<LmFeedbackModel>
  private _industry$: BehaviorSubject<AppOptionModel[]>
  private _country$: BehaviorSubject<AppOptionModel[]>
  private _services$: BehaviorSubject<AppOptionModel[]>

  @Input()
  set formGroup(value: FormGroup) { this._formGroup$.next(value) };
  get formGroup(): FormGroup { return this._formGroup$.getValue() };

  @Input()
  set assets(value: LmFeedbackAssetsModel) { this._assets$.next(value) };
  get assets(): LmFeedbackAssetsModel { return this._assets$.getValue() };

  @Input()
  set form(value: LmFeedbackModel) { this._form$.next(value) };
  get form(): LmFeedbackModel { return this._form$.getValue() };

  @Input()
  set industry(value: AppOptionModel[]) { this._industry$.next(value) };
  get industry(): AppOptionModel[] { return this._industry$.getValue() };

  @Input()
  set country(value: AppOptionModel[]) { this._country$.next(value) };
  get country(): AppOptionModel[] { return this._country$.getValue() };

  @Input()
  set services(value: AppOptionModel[]) { this._services$.next(value) };
  get services(): AppOptionModel[] { return this._services$.getValue() };

  @Output() triggerSubmit$: EventEmitter<void> = new EventEmitter<void>()

  constructor() {
    this._formGroup$ = new BehaviorSubject<any>(null)
    this._form$ = new BehaviorSubject<LmFeedbackModel>(null)
    this._industry$ = new BehaviorSubject<AppOptionModel[]>(null)
    this._country$ = new BehaviorSubject<AppOptionModel[]>(null)
    this._services$ = new BehaviorSubject<AppOptionModel[]>(null)
    this._assets$ = new BehaviorSubject<LmFeedbackAssetsModel>(null)
  }

  ngOnInit(): void {
  }

  submitForm(_: any) {
    if (_['submitter'].type === 'submit') {
      this.triggerSubmit$.emit(this.formGroup.value)
    }
  }

}
