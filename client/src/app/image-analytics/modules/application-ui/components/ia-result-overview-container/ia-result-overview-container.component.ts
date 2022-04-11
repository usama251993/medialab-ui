import { Component, OnInit, Input } from '@angular/core'

import { BehaviorSubject, Observable, Subject } from 'rxjs'

import { IaAnalysisModel, IaNextButtonModel } from '@ia-app/models/ia-result.model'
import { IaAppCoreService } from '@ia-app/services/ia-app-core.service'

@Component({
  selector: 'app-ia-result-overview-container',
  template: `<app-ia-result-overview [analysis]     = "analysis"
                                     [videoCount]   = "videoCount"
                                     [error]        = "error$  | async"
                                     [assets]        = "buttonAssets$  | async"
                                     (gotoDetails$) = "gotoDetails($event)"></app-ia-result-overview>`
})
export class IaResultOverviewContainerComponent implements OnInit {

  private _analysis$: BehaviorSubject<IaAnalysisModel>
  private _videoCount$: BehaviorSubject<number>

  buttonAssets$: Observable<IaNextButtonModel>
  // result$: Observable<IaResultModel[]>
  error$: Subject<{}>

  @Input()
  set analysis(value: IaAnalysisModel) { this._analysis$.next(value) }
  get analysis(): IaAnalysisModel { return this._analysis$.getValue() }

  @Input()
  set videoCount(value: number) { this._videoCount$.next(value) }
  get videoCount(): number { return this._videoCount$.getValue() }

  constructor(
    private _coreService: IaAppCoreService
  ) {
    this._analysis$ = new BehaviorSubject<IaAnalysisModel>(null)
    this._videoCount$ = new BehaviorSubject<number>(0)

    this.error$ = new Subject<{ code: number | string | null }>()

    this._coreService.setButtonAsset()
    this.buttonAssets$ = this._coreService.watchButtonAsset$()

  }

  ngOnInit(): void { }

  gotoDetails(_: IaAnalysisModel) {
    this._coreService.gotoDetails(_)
  }

}
