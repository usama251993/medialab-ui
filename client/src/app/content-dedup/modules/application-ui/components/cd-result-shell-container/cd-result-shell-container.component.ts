import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { CdAppCoreService } from '@cd-app/services/cd-app-core.service'
import { CdNextButtonModel } from '../../models/cd-result.model'

@Component({
  selector: 'app-cd-results-shell-container',
  template: `<app-cd-result-shell [bucketForm]           = "bucketForm$    | async"
                                  [bIsProcessing]        = "bIsProcessing$ | async"
                                  [assets]               = "buttonAssets$  | async"
                                  (gotoBucketSelection$) = "gotoBucketSelection()"></app-cd-result-shell>`
})
export class CdResultShellContainerComponent implements OnInit {

  bucketForm$: Observable<FormData>
  bIsProcessing$: Observable<boolean>
  buttonAssets$: Observable<CdNextButtonModel>

  constructor(
    private _coreService: CdAppCoreService
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
