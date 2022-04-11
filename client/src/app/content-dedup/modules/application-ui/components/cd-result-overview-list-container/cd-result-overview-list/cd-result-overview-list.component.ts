import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { CdNextButtonModel, CdResultOverviewListModel } from '@cd-app/models/cd-result.model'

@Component({
  selector: 'app-cd-result-overview-list',
  templateUrl: './cd-result-overview-list.component.html',
  styleUrls: ['./cd-result-overview-list.component.scss']
})
export class CdResultOverviewListComponent implements OnInit {

  private _overviewList$: BehaviorSubject<CdResultOverviewListModel>
  private _assets$: BehaviorSubject<CdNextButtonModel>

  @Output() showSummary$: EventEmitter<void>

  @Input()
  set overviewList(value: CdResultOverviewListModel) { this._overviewList$.next(value) }
  get overviewList(): CdResultOverviewListModel { return this._overviewList$.getValue() }

  @Input()
  set assets(value: CdNextButtonModel) { this._assets$.next(value) }
  get assets(): CdNextButtonModel { return this._assets$.getValue() }

  constructor() {
    this._overviewList$ = new BehaviorSubject<CdResultOverviewListModel>(null)
    this._assets$ = new BehaviorSubject<CdNextButtonModel>(null)
    this.showSummary$ = new EventEmitter<void>()
  }

  ngOnInit(): void { }

  showSummary(): void {
    this.showSummary$.emit()
  }

}
