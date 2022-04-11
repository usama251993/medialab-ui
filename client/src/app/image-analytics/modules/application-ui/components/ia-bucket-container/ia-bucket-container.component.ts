import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { Observable, of } from 'rxjs'

import { IaBucketService } from '@ia-app/services/ia-bucket/ia-bucket.service'
import { IaBucketAssetsModel, IaBucketFormModel } from '../../models/bucket/ia-bucket.model'

@Component({
  selector: 'app-ia-bucket-container',
  template: `<app-ia-bucket [assets]        = "assets$        | async"
                            [form]          = "form$          | async"
                            [formGroup]     = "formGroup$     | async"
                            [bIsProcessing] = "bIsProcessing$ | async"
                            [error]         = "error$         | async"
                            (formSubmit$)   = "processBucket($event)"></app-ia-bucket>`
})
export class IaBucketContainerComponent implements OnInit {

  assets$: Observable<IaBucketAssetsModel>
  form$: Observable<IaBucketFormModel>
  formGroup$: Observable<FormGroup>
  bIsProcessing$: Observable<boolean>
  error$: Observable<any>

  constructor(
    private _bucketService: IaBucketService
  ) { }

  ngOnInit(): void {
    // this._bucketService.fetchBucketList()
    // this.bucketList$ = this._bucketService.watchBucketList$()

    this._bucketService.fetchPageAssets()
    this.assets$ = this._bucketService.watchPageAssets$()

    this._bucketService.fetchFormGroup()
    this.form$ = this._bucketService.watchFromAssets$()

    this._bucketService.fetchFromAssets()
    this.formGroup$ = this._bucketService.watchFormGroup$()

    this.bIsProcessing$ = this._bucketService.watchDataProcessing$()

    this.error$ = of(null)
  }

  processBucket(formData: FormData): void {
    this._bucketService.processBucket(formData)
  }
}
