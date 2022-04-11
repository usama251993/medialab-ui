import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { CdNextButtonModel, CdResultOverviewListModel } from '@cd-app/models/cd-result.model'
import { CdAppCoreService } from '@cd-app/services/cd-app-core.service'

@Component({
  selector: 'app-cd-result-overview-list-container',
  template: `<app-cd-result-overview-list [overviewList] = "overviewList$ | async"
                                          [assets]       = "buttonAsset$  | async"
                                          (showSummary$) = "showSummary()"></app-cd-result-overview-list>`
})
export class CdResultOverviewListContainerComponent implements OnInit {

  overviewList$: Observable<CdResultOverviewListModel>
  buttonAsset$: Observable<CdNextButtonModel>

  constructor(
    private _coreService: CdAppCoreService
  ) { }

  ngOnInit(): void {
    this.overviewList$ = this._coreService.watchOverviewList$()
    this._coreService.setOverviewAvailability(true)
    this._coreService.setButtonAsset()
    this.buttonAsset$ = this._coreService.watchButtonAsset$()
  }

  showSummary(): void {
    this._coreService.gotoSummary()
  }

}
