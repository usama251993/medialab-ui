import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { Observable, of } from 'rxjs'

import { CdBucketService } from '@cd-app/services/cd-bucket/cd-bucket.service'
import { CdBucketAssetsModel, CdBucketFormModel } from '../../models/bucket/cd-bucket.model'

@Component({
  selector: 'app-cd-bucket-container',
  template: `<app-cd-bucket [assets]        = "assets$        | async"
                            [form]          = "form$          | async"
                            [formGroup]     = "formGroup$     | async"
                            [bIsProcessing] = "bIsProcessing$ | async"
                            [error]         = "error$         | async"
                            (formSubmit$)   = "processBucket($event)"></app-cd-bucket>`
})
export class CdBucketContainerComponent implements OnInit {

  assets$: Observable<CdBucketAssetsModel>
  form$: Observable<CdBucketFormModel>
  formGroup$: Observable<FormGroup>
  bIsProcessing$: Observable<boolean>
  error$: Observable<any>

  constructor(
    private _bucketService: CdBucketService
  ) { }

  ngOnInit(): void {
    this._bucketService.fetchPageAssets()
    this.assets$ = this._bucketService.watchPageAssets$()

    this._bucketService.fetchFormAssets()
    this.form$ = this._bucketService.watchFormAssets$()

    this._bucketService.fetchFormGroup()
    this.formGroup$ = this._bucketService.watchFormGroup$()

    this.bIsProcessing$ = this._bucketService.watchDataProcessing$()

    this.error$ = of(null)
  }

  processBucket(formData: FormData): void {
    this._bucketService.processBucket(formData)
  }
}
