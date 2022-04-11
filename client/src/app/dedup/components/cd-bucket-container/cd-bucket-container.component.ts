import { Component, OnInit } from '@angular/core'
import { Observable, of } from 'rxjs'
import { CdBucketService } from '@cd-core/services/cd-bucket/cd-bucket.service'
import { AppOptionModel } from '@shared/models/app-assets.model'

@Component({
  selector: 'app-cd-bucket-container',
  template: `<app-cd-bucket [bucketList]  = "bucketList$ | async"
                            [bIsLoading]  = "bIsLoading$ | async"
                            (formSubmit$) = "formSubmit($event)"></app-cd-bucket>`
})
export class CdBucketContainerComponent implements OnInit {

  bucketList$: Observable<AppOptionModel[]>
  bIsLoading$: Observable<boolean>

  constructor(
    private _bucketService: CdBucketService
  ) { }

  ngOnInit(): void {
    this.bIsLoading$ = of(false)
    this.bucketList$ = this._bucketService.fetchBuckets$()
  }

  formSubmit(formData: FormData) {
    this._bucketService.handleForm(formData)
    this.bIsLoading$ = of(true)
  }

}
