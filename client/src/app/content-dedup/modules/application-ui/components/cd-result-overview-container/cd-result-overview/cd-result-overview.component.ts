import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { CdResultModel, CdAnalysisModel, CdNextButtonModel } from '@cd-app/models/cd-result.model'

@Component({
  selector: 'app-cd-result-overview',
  templateUrl: './cd-result-overview.component.html',
  styleUrls: ['./cd-result-overview.component.scss']
})
export class CdResultOverviewComponent implements OnInit {

  // private _result$: BehaviorSubject<CdResultModel[]>
  private _analysis$: BehaviorSubject<CdAnalysisModel>
  private _videoCount$: BehaviorSubject<number>
  private _assets$: BehaviorSubject<CdNextButtonModel>

  private _error$: BehaviorSubject<{ code: number | string | null }>

  // @Input()
  // set result(value: CdResultModel[]) { this._result$.next(value) };
  // get result(): CdResultModel[] { return this._result$.getValue() };

  @Input()
  set error(value: { code: number | string | null }) { this._error$.next(value) };
  get error(): { code: number | string | null } { return this._error$.getValue() };

  @Input()
  set analysis(value: CdAnalysisModel) { this._analysis$.next(value) }
  get analysis(): CdAnalysisModel { return this._analysis$.getValue() }

  @Input()
  set videoCount(value: number) { this._videoCount$.next(value) }
  get videoCount(): number { return this._videoCount$.getValue() }

  @Input()
  set assets(value: CdNextButtonModel) { this._assets$.next(value) }
  get assets(): CdNextButtonModel { return this._assets$.getValue() }

  @Output() gotoDetails$: EventEmitter<CdAnalysisModel>

  constructor() {
    this._analysis$ = new BehaviorSubject<CdAnalysisModel>(null)
    // this._result$ = new BehaviorSubject<CdResultModel[]>(null)
    this._videoCount$ = new BehaviorSubject<number>(0)
    this._assets$ = new BehaviorSubject<CdNextButtonModel>(null)
    this._error$ = new BehaviorSubject<{ code: number | string | null }>(null)

    this.gotoDetails$ = new EventEmitter<CdAnalysisModel>()
  }

  ngOnInit(): void { }

  gotoDetails(_: CdAnalysisModel) {
    this.gotoDetails$.emit(_)
  }

}
