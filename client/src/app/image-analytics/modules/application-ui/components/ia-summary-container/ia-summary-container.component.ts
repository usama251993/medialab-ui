import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { IaNextButtonModel, IaSummaryAssetsModel } from '@ia-app/models/ia-result.model'
import { IaAppCoreService } from '@ia-app/services/ia-app-core.service'
import { IaSummaryService } from '@ia-app/services/ia-summary/ia-summary.service'

@Component({
  selector: 'app-ia-summary-container',
  template: `<app-ia-summary [summary]          = "summary$ | async"
                             [assets]           = "buttonAssets$  | async"
                             (triggerNavigate$) = "triggerNavigate($event)"></app-ia-summary>`
})
export class IaSummaryContainerComponent implements OnInit {

  summary$: Observable<IaSummaryAssetsModel>
  buttonAssets$: Observable<IaNextButtonModel>

  constructor(
    private _coreService: IaAppCoreService,
    private _summaryService: IaSummaryService
  ) { }

  ngOnInit(): void {
    this._coreService.setButtonAsset()
    this._summaryService.setPageAssets()
    this.summary$ = this._summaryService.watchPageAssets()
    this.buttonAssets$ = this._coreService.watchButtonAsset$()
  }

  triggerNavigate(_: string): void {
    if (_ === 'results') this._coreService.gotoResults()
    else this._coreService.gotoBucketSelection()
  }

}
