import { Component, Input, OnInit } from '@angular/core'
import { PhComparisonDataPointModel, PhMatrixDataPointModel } from '@ph-app/models/ph-phash-app-ui/phash.model'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-ph-phash-comparison-summary',
  templateUrl: './ph-phash-comparison-summary.component.html',
  styleUrls: ['./ph-phash-comparison-summary.component.scss']
})
export class PhPhashComparisonSummaryComponent implements OnInit {

  // private _chartData$: BehaviorSubject<PhComparisonDataPointModel>
  private _chartData$: BehaviorSubject<PhMatrixDataPointModel>

  // @Input()
  // set chartData(value: PhComparisonDataPointModel) { this._chartData$.next(value) }
  // get chartData(): PhComparisonDataPointModel { return this._chartData$.getValue() }

  @Input()
  set chartData(value: PhMatrixDataPointModel) { this._chartData$.next(value) }
  get chartData(): PhMatrixDataPointModel { return this._chartData$.getValue() }

  displayedColumns: string[]

  inspectedVideoData: { parameter: string; value: string | number }[]
  referenceVideoData: { parameter: string; value: string | number }[]
  comparisonAnalysis: { parameter: string; value: string | number }[]

  constructor() {
    // this._chartData$ = new BehaviorSubject<PhComparisonDataPointModel>(null)
    this._chartData$ = new BehaviorSubject<PhMatrixDataPointModel>(null)
  }

  ngOnInit(): void {

    this._chartData$.subscribe(_ => { if (!!_) this.init({ chartData: _ }) })
  }

  // init(_: { chartData: PhComparisonDataPointModel }) {
  init(_: { chartData: PhMatrixDataPointModel }) {
    this.displayedColumns = ['parameter', 'value']

    this.inspectedVideoData = []
    for (let _key in _.chartData.inspectedVideo) {
      if (_key !== 'index' && _key !== 'url' && _key !== 'scenes') this.inspectedVideoData.push({ parameter: `${_key.charAt(0).toUpperCase()}${_key.slice(1)}`, value: _.chartData.inspectedVideo[_key] })
    }


    this.referenceVideoData = []
    for (let _key in _.chartData.referenceVideo) {
      if (_key !== 'index' && _key !== 'url' && _key !== 'scenes') this.referenceVideoData.push({ parameter: `${_key.charAt(0).toUpperCase()}${_key.slice(1)}`, value: _.chartData.referenceVideo[_key] })
    }

    this.comparisonAnalysis = [
      { parameter: 'Similarity Percentage', value: _.chartData.similarityPercentage },
      { parameter: 'Mean Hamming Distance', value: _.chartData.meanHammingDistance }
    ]
  }

}
