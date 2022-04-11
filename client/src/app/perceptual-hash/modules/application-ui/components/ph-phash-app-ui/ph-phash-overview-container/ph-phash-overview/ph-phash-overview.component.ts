import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import * as _lodash from 'lodash'

import { PhPhashOverviewModel, INITIAL_PHASH_OVERVIEW } from '@ph-app/models/ph-phash-app-ui/ph-phash-overview/ph-phash-overview.model'
import { PhMatrixDataModel, INITIAL_PH_MATRIX_DATA, PhMatrixDataPointModel, INITIAL_PH_MATRIX_DATAPOINT } from '@ph-app/models/ph-phash-app-ui/ph-phash-overview/ph-phash-matrix.model'

@Component({
  selector: 'app-ph-phash-overview',
  templateUrl: './ph-phash-overview.component.html',
  styleUrls: ['./ph-phash-overview.component.scss']
})
export class PhPhashOverviewComponent implements OnInit {

  private _chartOverviewData$: BehaviorSubject<PhPhashOverviewModel> = new BehaviorSubject<PhPhashOverviewModel>(INITIAL_PHASH_OVERVIEW)
  private _matrixData$: BehaviorSubject<PhMatrixDataModel> = new BehaviorSubject<PhMatrixDataModel>(INITIAL_PH_MATRIX_DATA)
  private _matrixDataPoint$: BehaviorSubject<PhMatrixDataPointModel> = new BehaviorSubject<PhMatrixDataPointModel>(INITIAL_PH_MATRIX_DATAPOINT)

  @Input()
  set chartOverviewData(value: PhPhashOverviewModel) { this._chartOverviewData$.next(value) }
  get chartOverviewData(): PhPhashOverviewModel { return this._chartOverviewData$.getValue() }

  @Input()
  set matrixData(value: PhMatrixDataModel) { this._matrixData$.next(value) }
  get matrixData(): PhMatrixDataModel { return this._matrixData$.getValue() }

  @Input()
  set matrixDataPoint(value: PhMatrixDataPointModel) { this._matrixDataPoint$.next(value) }
  get matrixDataPoint(): PhMatrixDataPointModel { return this._matrixDataPoint$.getValue() }

  localFlag: { overview: boolean; dataPoint: boolean } = { overview: false, dataPoint: false }

  @Output() updateDataPoint$: EventEmitter<PhMatrixDataPointModel> = new EventEmitter<PhMatrixDataPointModel>()
  @Output() prepareMatrixData$: EventEmitter<PhPhashOverviewModel> = new EventEmitter<PhPhashOverviewModel>()
  @Output() gotoBucketSelection$: EventEmitter<void> = new EventEmitter<void>()
  @Output() gotoResults$: EventEmitter<PhMatrixDataPointModel> = new EventEmitter<PhMatrixDataPointModel>()

  constructor() { }

  ngOnInit(): void {

    this._chartOverviewData$.subscribe(_ => {
      if (_lodash.isEqual(_, INITIAL_PHASH_OVERVIEW)) this.localFlag = { ...this.localFlag, overview: true }
      else {
        this.localFlag = { ...this.localFlag, overview: false }
        this.prepareMatrixData$.emit(_)
      }
    })

    this._matrixDataPoint$.subscribe(_ => {
      if (_lodash.isEqual(_, INITIAL_PH_MATRIX_DATAPOINT)) this.localFlag = { ...this.localFlag, dataPoint: true }
      else this.localFlag = { ...this.localFlag, dataPoint: false }
    })

  }

  gotoBucketSelection(): void {
    this.gotoBucketSelection$.emit()
  }

  updateDataPoint(_: PhMatrixDataPointModel): void {
    this.updateDataPoint$.emit(_)
  }

  gotoResults(_: PhMatrixDataPointModel) {
    this.gotoResults$.emit(_)
  }
}
