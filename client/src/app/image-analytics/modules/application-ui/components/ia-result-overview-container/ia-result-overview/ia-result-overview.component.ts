import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { IaResultModel, IaAnalysisModel, IaNextButtonModel } from '@ia-app/models/ia-result.model'

@Component({
  selector: 'app-ia-result-overview',
  templateUrl: './ia-result-overview.component.html',
  styleUrls: ['./ia-result-overview.component.scss']
})
export class IaResultOverviewComponent implements OnInit {

  // private _result$: BehaviorSubject<IaResultModel[]>
  private _analysis$: BehaviorSubject<IaAnalysisModel>
  private _videoCount$: BehaviorSubject<number>
  private _assets$: BehaviorSubject<IaNextButtonModel>

  private _error$: BehaviorSubject<{ code: number | string | null }>

  // @Input()
  // set result(value: IaResultModel[]) { this._result$.next(value) };
  // get result(): IaResultModel[] { return this._result$.getValue() };

  @Input()
  set error(value: { code: number | string | null }) { this._error$.next(value) };
  get error(): { code: number | string | null } { return this._error$.getValue() };

  @Input()
  set analysis(value: IaAnalysisModel) { this._analysis$.next(value) }
  get analysis(): IaAnalysisModel { return this._analysis$.getValue() }

  @Input()
  set videoCount(value: number) { this._videoCount$.next(value) }
  get videoCount(): number { return this._videoCount$.getValue() }

  @Input()
  set assets(value: IaNextButtonModel) { this._assets$.next(value) }
  get assets(): IaNextButtonModel { return this._assets$.getValue() }

  @Output() gotoDetails$: EventEmitter<IaAnalysisModel>

  constructor() {
    this._analysis$ = new BehaviorSubject<IaAnalysisModel>(null)
    // this._result$ = new BehaviorSubject<IaResultModel[]>(null)
    this._videoCount$ = new BehaviorSubject<number>(0)
    this._assets$ = new BehaviorSubject<IaNextButtonModel>(null)
    this._error$ = new BehaviorSubject<{ code: number | string | null }>(null)

    this.gotoDetails$ = new EventEmitter<IaAnalysisModel>()
  }

  ngOnInit(): void { }

  gotoDetails(_: IaAnalysisModel) {
    this.gotoDetails$.emit(_)
  }

}
