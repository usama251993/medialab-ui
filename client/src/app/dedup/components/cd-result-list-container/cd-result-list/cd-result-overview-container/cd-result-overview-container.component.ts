import { Component, OnInit, Input } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

import { CdResultOverviewModel } from '@cd-core/models/cd-result-overview.model'
import { CdResultModel } from '@cd-core/models/cd-result.model'
import { CdResultService } from '@cd-core/services/cd-result-list/cd-result/cd-result.service'
import { CdCoreService } from '@cd-core/services/cd-core.service'

@Component({
  selector: 'app-cd-result-overview-container',
  template: `<app-cd-result-overview [useCase]     = "useCase"
                                     [result]      = "result$ | async"
                                     (gotoDetails$) = "gotoDetails($event)"></app-cd-result-overview>`
})
export class CdResultOverviewContainerComponent implements OnInit {

  private _useCase$: BehaviorSubject<CdResultOverviewModel>

  result$: Observable<CdResultModel[]>

  @Input()
  set useCase(value: CdResultOverviewModel) { this._useCase$.next(value) };
  get useCase(): CdResultOverviewModel { return this._useCase$.getValue() };

  constructor(
    private _coreService: CdCoreService,
    private _resultService: CdResultService
  ) {
    this._useCase$ = new BehaviorSubject<CdResultOverviewModel>(null)
  }

  ngOnInit(): void {
    this.result$ = this._resultService.fetchResult$({ route: this.useCase.algorithm.value.toString() })
    // this.result$ = this._resultService.fakeResult$({ route: this.useCase.algorithm.value.toString() })
  }

  gotoDetails(_: {
    path: string,
    data: CdResultModel[],
    useCase: CdResultOverviewModel
  }) {
    this._coreService.setTableColumns(_.useCase)
    this._resultService.gotoDetails(_)
  }

}
