import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { AppOptionModel } from '@shared/models/app-assets.model'

import { IaNextButtonModel, IaSummaryAssetsModel } from '@ia-app/models/ia-result.model'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-ia-summary',
  templateUrl: './ia-summary.component.html',
  styleUrls: ['./ia-summary.component.scss']
})
export class IaSummaryComponent implements OnInit {

  private _summary$: BehaviorSubject<IaSummaryAssetsModel>
  private _assets$: BehaviorSubject<IaNextButtonModel>

  @Input()
  set summary(value: IaSummaryAssetsModel) { this._summary$.next(value) }
  get summary(): IaSummaryAssetsModel { return this._summary$.getValue() }

  @Input()
  set assets(value: IaNextButtonModel) { this._assets$.next(value) }
  get assets(): IaNextButtonModel { return this._assets$.getValue() }

  displayedColumns: string[]
  dataSource: MatTableDataSource<AppOptionModel> = new MatTableDataSource<AppOptionModel>()

  @Output() triggerNavigate$: EventEmitter<string>

  constructor() {
    this.displayedColumns = ['parameter', 'value']
    this._summary$ = new BehaviorSubject<IaSummaryAssetsModel>(null)
    this._assets$ = new BehaviorSubject<IaNextButtonModel>(null)

    this.triggerNavigate$ = new EventEmitter<string>()
  }

  ngOnInit(): void {
    this._summary$.subscribe(_ => {
      console.groupCollapsed(`[C-Ia-Summary] _summary$ subscribe`)
      console.log(_)
      console.groupEnd()
      this.dataSource.data = _.summary.filter(__ => !!__.value)
    })
  }

  triggerNavigate(_: string): void {
    this.triggerNavigate$.emit(_)
  }

}
