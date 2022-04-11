import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { IaNextButtonModel, IaResultOverviewListModel } from '@ia-app/models/ia-result.model'

@Component({
  selector: 'app-ia-result-overview-list',
  templateUrl: './ia-result-overview-list.component.html',
  styleUrls: ['./ia-result-overview-list.component.scss']
})
export class IaResultOverviewListComponent implements OnInit {

  private _overviewList$: BehaviorSubject<IaResultOverviewListModel>
  private _assets$: BehaviorSubject<IaNextButtonModel>

  @Output() showSummary$: EventEmitter<void>

  @Input()
  set overviewList(value: IaResultOverviewListModel) { this._overviewList$.next(value) }
  get overviewList(): IaResultOverviewListModel { return this._overviewList$.getValue() }

  @Input()
  set assets(value: IaNextButtonModel) { this._assets$.next(value) }
  get assets(): IaNextButtonModel { return this._assets$.getValue() }

  constructor() {
    this._overviewList$ = new BehaviorSubject<IaResultOverviewListModel>(null)
    this._assets$ = new BehaviorSubject<IaNextButtonModel>(null)
    this.showSummary$ = new EventEmitter<void>()
  }

  ngOnInit(): void { }

  showSummary(): void {
    this.showSummary$.emit()
  }

}
