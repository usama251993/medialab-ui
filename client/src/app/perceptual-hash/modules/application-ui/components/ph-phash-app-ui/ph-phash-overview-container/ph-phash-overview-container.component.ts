import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { PhPhashOverviewService } from '@ph-app/services/ph-phash-app-ui/ph-phash-overview/ph-phash-overview.service'
import { PhPhashOverviewModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-overview/ph-phash-overview.model'
import { PhMatrixDataModel, PhMatrixDataPointModel } from '@ph-app/models/ph-phash-app-ui/phash.model'

@Component({
  selector: 'app-ph-phash-overview-container',
  template: `<app-ph-phash-overview [chartOverviewData]    = "chartOverviewData$ | async"
                                    [matrixData]           = "matrixData$        | async"
                                    [matrixDataPoint]      = "matrixDataPoint$   | async"
                                    (prepareMatrixData$)   = "prepareMatrixData($event)"
                                    (gotoBucketSelection$) = "gotoBucketSelection()"
                                    (updateDataPoint$)     = "updateDataPoint($event)"
                                    (gotoResults$)         = "gotoResults($event)"></app-ph-phash-overview>`
})
export class PhPhashOverviewContainerComponent implements OnInit {

  chartOverviewData$: Observable<PhPhashOverviewModel>
  matrixData$: Observable<PhMatrixDataModel>
  matrixDataPoint$: Observable<PhMatrixDataPointModel>

  constructor(
    private _overviewService: PhPhashOverviewService
  ) { }

  ngOnInit(): void {
    this.chartOverviewData$ = this._overviewService.watchChartOverview$()
    this.matrixData$ = this._overviewService.watchMatrixData$()
    this.matrixDataPoint$ = this._overviewService.watchMatrixDataPoint$()
  }

  prepareMatrixData(_: PhPhashOverviewModel): void {
    this._overviewService.prepareMatrixData(_)
  }

  gotoBucketSelection(): void {
    this._overviewService.gotoBucketSelection()
  }

  updateDataPoint(_: PhMatrixDataPointModel): void {
    this._overviewService.setDataPoint(_)
  }

  gotoResults(_: PhMatrixDataPointModel): void {
    this._overviewService.gotoResults(_)
  }

}
