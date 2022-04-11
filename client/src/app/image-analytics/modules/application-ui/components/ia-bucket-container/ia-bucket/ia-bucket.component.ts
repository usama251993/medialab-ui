import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { BehaviorSubject } from 'rxjs'

import { IaBucketAssetsModel, IaBucketFormModel, INITIAL_BUCKET_ASSETS, INITIAL_BUCKET_FORM } from '@ia-app/models/bucket/ia-bucket.model'
import { INITIAL_FORM_GROUP } from '@shared/models/app-form.model'

@Component({
  selector: 'app-ia-bucket',
  templateUrl: './ia-bucket.component.html',
  styleUrls: ['./ia-bucket.component.scss']
})
export class IaBucketComponent implements OnInit {

  private _assets$: BehaviorSubject<IaBucketAssetsModel> = new BehaviorSubject<IaBucketAssetsModel>(INITIAL_BUCKET_ASSETS)
  private _form$: BehaviorSubject<IaBucketFormModel> = new BehaviorSubject<IaBucketFormModel>(INITIAL_BUCKET_FORM)
  private _formGroup$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(INITIAL_FORM_GROUP)
  private _bIsProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _error$: BehaviorSubject<any> = new BehaviorSubject<any>({})

  @Input()
  set assets(value: IaBucketAssetsModel) { this._assets$.next(value) }
  get assets(): IaBucketAssetsModel { return this._assets$.getValue() }

  @Input()
  set form(value: IaBucketFormModel) { this._form$.next(value) }
  get form(): IaBucketFormModel { return this._form$.getValue() }

  @Input()
  set formGroup(value: FormGroup) { this._formGroup$.next(value) }
  get formGroup(): FormGroup { return this._formGroup$.getValue() }

  @Input()
  set bIsProcessing(value: boolean) { this._bIsProcessing$.next(value) }
  get bIsProcessing(): boolean { return this._bIsProcessing$.getValue() }

  @Input()
  set error(value: any) { this._error$.next(value) }
  get error(): any { return this._error$.getValue() }


  @Output() formSubmit$: EventEmitter<FormData> = new EventEmitter<FormData>()

  constructor() { }

  ngOnInit(): void { }

  formSubmit(_: Event) {
    if (_['submitter'].type === 'submit') this.formSubmit$.emit(this.formGroup.value)
  }

}
