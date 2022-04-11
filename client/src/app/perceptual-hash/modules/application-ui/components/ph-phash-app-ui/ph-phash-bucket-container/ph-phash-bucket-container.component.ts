import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { Observable } from 'rxjs'

import { PhPhashBucketFormModel, PhPhashBucketAssetsModel, PhPhashBucketComponentFlagModel, INITIAL_PHASH_BUCKET_FLAGS, PhPhashBucketFormValueModel } from '@ph-core/modules/application-ui/models/ph-phash-app-ui/ph-phash-bucket/ph-phash-bucket.model'

import { PhPhashBucketService } from '@ph-app/services/ph-phash-app-ui/ph-phash-bucket/ph-phash-bucket.service'

@Component({
  selector: 'app-ph-phash-bucket-container',
  template: `<app-ph-phash-bucket [assets]         = "assets$         | async"
                                  [form]           = "form$           | async"
                                  [formGroup]      = "formGroup$      | async"
                                  [componentFlags] = "componentFlags$ | async"
                                  (gotoHome$)      = "gotoHome()"
                                  (formSubmit$)    = "processBucket($event)"></app-ph-phash-bucket>`
})
export class PhPhashBucketContainerComponent implements OnInit {

  assets$: Observable<PhPhashBucketAssetsModel>
  form$: Observable<PhPhashBucketFormModel>
  formGroup$: Observable<FormGroup>
  componentFlags$: Observable<PhPhashBucketComponentFlagModel>

  private _componentFlags: PhPhashBucketComponentFlagModel

  constructor(
    private _bucketService: PhPhashBucketService
  ) { }

  ngOnInit(): void {

    this._componentFlags = { ...INITIAL_PHASH_BUCKET_FLAGS }

    this._bucketService.fetchPageAssets()
    this.assets$ = this._bucketService.watchPageAssets$()

    this._bucketService.fetchFormAssets()
    this.form$ = this._bucketService.watchFormAssets$()

    this._bucketService.fetchFormGroup()
    this.formGroup$ = this._bucketService.watchFormGroup$()

    this.componentFlags$ = this._bucketService.watchComponentFlags$()
  }

  gotoHome(): void {
    this._bucketService.gotoHome()
  }

  processBucket(_: PhPhashBucketFormValueModel): void {
    this._componentFlags = { ...this._componentFlags, process: { ...this._componentFlags.process, progress: true } }
    this._bucketService.setComponentFlags(this._componentFlags)
    this._bucketService.processBucket(_)
  }

}
