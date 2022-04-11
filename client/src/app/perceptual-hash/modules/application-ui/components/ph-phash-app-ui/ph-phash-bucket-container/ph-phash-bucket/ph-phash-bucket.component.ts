import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { BehaviorSubject } from 'rxjs'

import { INITIAL_FORM_GROUP } from '@shared/models/app-form.model'

import { PhPhashBucketFormModel, PhPhashBucketAssetsModel, PhPhashBucketComponentFlagModel, INITIAL_PHASH_BUCKET_ASSETS, INITIAL_PHASH_BUCKET_FORM, INITIAL_PHASH_BUCKET_FLAGS, PhPhashBucketFormValueModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-bucket/ph-phash-bucket.model'

@Component({
  selector: 'app-ph-phash-bucket',
  templateUrl: './ph-phash-bucket.component.html',
  styleUrls: ['./ph-phash-bucket.component.scss']
})
export class PhPhashBucketComponent implements OnInit {

  private _assets$: BehaviorSubject<PhPhashBucketAssetsModel> = new BehaviorSubject<PhPhashBucketAssetsModel>(INITIAL_PHASH_BUCKET_ASSETS)
  private _form$: BehaviorSubject<PhPhashBucketFormModel> = new BehaviorSubject<PhPhashBucketFormModel>(INITIAL_PHASH_BUCKET_FORM)
  private _formGroup$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(INITIAL_FORM_GROUP)
  private _componentFlags$: BehaviorSubject<PhPhashBucketComponentFlagModel> = new BehaviorSubject<PhPhashBucketComponentFlagModel>(INITIAL_PHASH_BUCKET_FLAGS)

  @Input()
  set assets(value: PhPhashBucketAssetsModel) { this._assets$.next(value) }
  get assets(): PhPhashBucketAssetsModel { return this._assets$.getValue() }

  @Input()
  set form(value: PhPhashBucketFormModel) { this._form$.next(value) }
  get form(): PhPhashBucketFormModel { return this._form$.getValue() }

  @Input()
  set formGroup(value: FormGroup) { this._formGroup$.next(value) }
  get formGroup(): FormGroup { return this._formGroup$.getValue() }

  @Input()
  set componentFlags(value: PhPhashBucketComponentFlagModel) { this._componentFlags$.next(value) }
  get componentFlags(): PhPhashBucketComponentFlagModel { return this._componentFlags$.getValue() }

  @Output() gotoHome$: EventEmitter<void> = new EventEmitter<void>()
  @Output() formSubmit$: EventEmitter<PhPhashBucketFormValueModel> = new EventEmitter<PhPhashBucketFormValueModel>()

  constructor() { }

  ngOnInit(): void { }

  formSubmit($: Event) {
    if ($['submitter'].type === 'submit') this.formSubmit$.emit(<PhPhashBucketFormValueModel>this.formGroup.value)
  }

  gotoHome(): void {
    this.gotoHome$.emit()
  }
}
