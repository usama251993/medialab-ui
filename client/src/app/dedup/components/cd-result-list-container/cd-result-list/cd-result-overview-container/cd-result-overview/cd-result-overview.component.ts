import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { CdResultModel } from '@cd-core/models/cd-result.model'
import { CdResultOverviewModel } from '@cd-core/models/cd-result-overview.model'

@Component({
  selector: 'app-cd-result-overview',
  templateUrl: './cd-result-overview.component.html',
  styleUrls: ['./cd-result-overview.component.scss']
})
export class CdResultOverviewComponent implements OnInit {

  private _result$: BehaviorSubject<CdResultModel[]>

  @Input()
  set result(value: CdResultModel[]) { this._result$.next(value) };
  get result(): CdResultModel[] { return this._result$.getValue() };

  @Input() useCase: CdResultOverviewModel

  @Output() gotoDetails$: EventEmitter<{ path: string, data: CdResultModel[], useCase: CdResultOverviewModel }>

  constructor() {
    this._result$ = new BehaviorSubject<CdResultModel[]>(null)
    this.gotoDetails$ = new EventEmitter<{ path: string, data: CdResultModel[], useCase: CdResultOverviewModel }>()
  }

  ngOnInit(): void { }

  gotoDetails(_: CdResultOverviewModel) {
    this.gotoDetails$.emit({ path: _.algorithm.value.toString(), data: this.result, useCase: this.useCase })
  }

}
