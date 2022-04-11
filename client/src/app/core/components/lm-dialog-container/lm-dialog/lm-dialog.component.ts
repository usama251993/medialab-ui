import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LmCardModel } from '@lm-core/models/lm-kb.model';
import { LmPaymentMethodAssetsModel } from '@lm-core/models/lm-payment-method/lm-payment-method-assets.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lm-dialog',
  templateUrl: './lm-dialog.component.html',
  styleUrls: ['./lm-dialog.component.scss']
})
export class LmDialogComponent implements OnInit {

  private _result$: BehaviorSubject<any>
  private _assets$: BehaviorSubject<LmPaymentMethodAssetsModel>
  private _formGroup$: BehaviorSubject<any>
  private _form$: BehaviorSubject<LmCardModel>

  @Input()
  set result(value: any) { this._result$.next(value) }
  get result(): any { return this._result$.getValue() }

  @Input()
  set assets(value: LmPaymentMethodAssetsModel) { this._assets$.next(value) }
  get assets(): LmPaymentMethodAssetsModel { return this._assets$.getValue() }

  @Input()
  set formGroup(value: FormGroup) { this._formGroup$.next(value) };
  get formGroup(): FormGroup { return this._formGroup$.getValue() };

  @Input()
  set form(value: LmCardModel) { this._form$.next(value) };
  get form(): LmCardModel { return this._form$.getValue() };


  @Output() closeDialog$: EventEmitter<void>
  @Output() triggerAddCard$: EventEmitter<LmCardModel>


  constructor() {
    this._result$ = new BehaviorSubject<any>(null)
    this._formGroup$ = new BehaviorSubject<any>(null)
    this._assets$ = new BehaviorSubject<LmPaymentMethodAssetsModel>(null)
    this._form$ = new BehaviorSubject<LmCardModel>(null)
    this.closeDialog$ = new EventEmitter<void>()
    this.triggerAddCard$ = new EventEmitter<LmCardModel>()
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.closeDialog$.emit()
  }

  submitForm(event: Event) {
    if (event['submitter'].type === 'submit') {
      this.triggerAddCard$.emit(<LmCardModel>this.formGroup.value)
    }
  }

}
