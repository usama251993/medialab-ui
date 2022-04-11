import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { CdNextButtonModel, CdSummaryModel } from '@cd-app/models/cd-result.model'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-cd-summary',
  templateUrl: './cd-summary.component.html',
  styleUrls: ['./cd-summary.component.scss']
})
export class CdSummaryComponent implements OnInit {

  private _summary$: BehaviorSubject<CdSummaryModel>
  private _assets$: BehaviorSubject<CdNextButtonModel>

  @Input()
  set summary(value: CdSummaryModel) { this._summary$.next(value) }
  get summary(): CdSummaryModel { return this._summary$.getValue() }

  @Input()
  set assets(value: CdNextButtonModel) { this._assets$.next(value) }
  get assets(): CdNextButtonModel { return this._assets$.getValue() }

  displayedColumns: string[]

  chartData: { name: string; value: string | number }[]

  @Output() triggerNavigate$: EventEmitter<string>

  constructor() {
    this.displayedColumns = ['parameter', 'count']
    this._summary$ = new BehaviorSubject<CdSummaryModel>(null)
    this._assets$ = new BehaviorSubject<CdNextButtonModel>(null)

    this.triggerNavigate$ = new EventEmitter<string>()
  }

  ngOnInit(): void {
    this._summary$.subscribe(_ => { if (!!_) this.initializeSummaryData(_) })
  }

  initializeSummaryData(_: CdSummaryModel) {
    this.chartData = [
      { name: 'Unique Videos', value: _.unique_videos },
      { name: 'Duplicates', value: _.duplicates_found }
    ]
  }

  triggerNavigate(_: string): void {
    this.triggerNavigate$.emit(_)
  }

}
