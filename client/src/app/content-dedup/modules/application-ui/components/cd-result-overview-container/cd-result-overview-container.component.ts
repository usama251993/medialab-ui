import { Component, OnInit, Input } from '@angular/core'

import { BehaviorSubject, Observable, Subject } from 'rxjs'

import { CdAnalysisModel, CdNextButtonModel } from '@cd-app/models/cd-result.model'
import { CdAppCoreService } from '@cd-app/services/cd-app-core.service'

@Component({
  selector: 'app-cd-result-overview-container',
  template: `<app-cd-result-overview [analysis]     = "analysis"
                                     [videoCount]   = "videoCount"
                                     [error]        = "error$  | async"
                                     [assets]        = "buttonAssets$  | async"
                                     (gotoDetails$) = "gotoDetails($event)"></app-cd-result-overview>`
})
export class CdResultOverviewContainerComponent implements OnInit {

  private _analysis$: BehaviorSubject<CdAnalysisModel>
  private _videoCount$: BehaviorSubject<number>

  buttonAssets$: Observable<CdNextButtonModel>
  // result$: Observable<CdResultModel[]>
  error$: Subject<{}>

  @Input()
  set analysis(value: CdAnalysisModel) { this._analysis$.next(value) }
  get analysis(): CdAnalysisModel { return this._analysis$.getValue() }

  @Input()
  set videoCount(value: number) { this._videoCount$.next(value) }
  get videoCount(): number { return this._videoCount$.getValue() }

  constructor(
    private _coreService: CdAppCoreService
  ) {
    this._analysis$ = new BehaviorSubject<CdAnalysisModel>(null)
    this._videoCount$ = new BehaviorSubject<number>(0)

    this.error$ = new Subject<{ code: number | string | null }>()

    this._coreService.setButtonAsset()
    this.buttonAssets$ = this._coreService.watchButtonAsset$()

  }

  ngOnInit(): void { }

  gotoDetails(_: CdAnalysisModel) {
    this._coreService.gotoDetails(_)
  }

}
