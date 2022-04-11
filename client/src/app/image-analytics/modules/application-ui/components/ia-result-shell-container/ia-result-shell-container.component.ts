import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { IaAppCoreService } from '@ia-app/services/ia-app-core.service'
import { IaNextButtonModel } from '../../models/ia-result.model'

@Component({
  selector: 'app-ia-results-shell-container',
  template: `<app-ia-result-shell [bucketForm]           = "bucketForm$    | async"
                                  [bIsProcessing]        = "bIsProcessing$ | async"
                                  [assets]               = "buttonAssets$  | async"
                                  (gotoBucketSelection$) = "gotoBucketSelection()"></app-ia-result-shell>`
})
export class IaResultShellContainerComponent implements OnInit {

  bucketForm$: Observable<FormData>
  bIsProcessing$: Observable<boolean>
  buttonAssets$: Observable<IaNextButtonModel>

  constructor(
    private _coreService: IaAppCoreService
  ) { }

  ngOnInit(): void {
    this.bucketForm$ = this._coreService.watchBucketForm$()
    this.bIsProcessing$ = this._coreService.watchDataProcessing$()
    this._coreService.setButtonAsset()
    this.buttonAssets$ = this._coreService.watchButtonAsset$()
    this._coreService.setOverviewAvailability(true)
  }

  gotoBucketSelection(): void {
    this._coreService.gotoBucketSelection()
  }
}
