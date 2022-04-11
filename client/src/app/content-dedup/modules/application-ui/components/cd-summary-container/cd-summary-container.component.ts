import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { CdNextButtonModel, CdSummaryModel } from '@cd-app/models/cd-result.model'
import { CdAppCoreService } from '@cd-app/services/cd-app-core.service'

@Component({
  selector: 'app-cd-summary-container',
  template: `<app-cd-summary [summary]          = "summary$ | async"
                             [assets]           = "buttonAssets$  | async"
                             (triggerNavigate$) = "triggerNavigate($event)"></app-cd-summary>`
})
export class CdSummaryContainerComponent implements OnInit {

  summary$: Observable<CdSummaryModel>
  buttonAssets$: Observable<CdNextButtonModel>

  constructor(
    private _coreService: CdAppCoreService
  ) { }

  ngOnInit(): void {
    this.summary$ = this._coreService.watchSummary$()
    this._coreService.setButtonAsset()
    this.buttonAssets$ = this._coreService.watchButtonAsset$()
  }

  triggerNavigate(_: string): void {
    if (_ === 'results') this._coreService.gotoResults()
    else this._coreService.gotoBucketSelection()
  }

}
