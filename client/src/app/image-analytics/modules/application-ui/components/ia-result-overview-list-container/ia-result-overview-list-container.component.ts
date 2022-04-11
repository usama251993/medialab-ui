import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { IaNextButtonModel, IaResultOverviewListModel } from '@ia-app/models/ia-result.model'
import { IaAppCoreService } from '@ia-app/services/ia-app-core.service'

@Component({
  selector: 'app-ia-result-overview-list-container',
  template: `<app-ia-result-overview-list [overviewList] = "overviewList$ | async"
                                          [assets]       = "buttonAsset$  | async"
                                          (showSummary$) = "showSummary()"></app-ia-result-overview-list>`
})
export class IaResultOverviewListContainerComponent implements OnInit {

  overviewList$: Observable<IaResultOverviewListModel>
  buttonAsset$: Observable<IaNextButtonModel>

  constructor(
    private _coreService: IaAppCoreService
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
