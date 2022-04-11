import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { BehaviorSubject } from 'rxjs'

import { CdBucketAssetsModel, CdBucketFormModel, INITIAL_BUCKET_ASSETS, INITIAL_BUCKET_FORM } from '@cd-app/models/bucket/cd-bucket.model'
import { INITIAL_FORM_GROUP } from '@shared/models/app-form.model'

@Component({
  selector: 'app-cd-bucket',
  templateUrl: './cd-bucket.component.html',
  styleUrls: ['./cd-bucket.component.scss']
})
export class CdBucketComponent implements OnInit {

  private _assets$: BehaviorSubject<CdBucketAssetsModel> = new BehaviorSubject<CdBucketAssetsModel>(INITIAL_BUCKET_ASSETS)
  private _form$: BehaviorSubject<CdBucketFormModel> = new BehaviorSubject<CdBucketFormModel>(INITIAL_BUCKET_FORM)
  private _formGroup$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(INITIAL_FORM_GROUP)
  private _bIsProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _error$: BehaviorSubject<any> = new BehaviorSubject<any>({})

  @Input()
  set assets(value: CdBucketAssetsModel) { this._assets$.next(value) }
  get assets(): CdBucketAssetsModel { return this._assets$.getValue() }

  @Input()
  set form(value: CdBucketFormModel) { this._form$.next(value) }
  get form(): CdBucketFormModel { return this._form$.getValue() }

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

  formSubmit($: Event) {
    if ($['submitter'].type === 'submit') this.formSubmit$.emit(this.formGroup.value)
  }

}
