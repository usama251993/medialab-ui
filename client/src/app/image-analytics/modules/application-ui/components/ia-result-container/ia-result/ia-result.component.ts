import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

import { IaAnalysisModel, IaNextButtonModel, IaResultModel } from '@ia-app/models/ia-result.model'
import { AppOptionModel } from '@shared/models/app-assets.model'

@Component({
  selector: 'app-ia-result',
  templateUrl: './ia-result.component.html',
  styleUrls: ['./ia-result.component.scss']
})
export class IaResultComponent implements OnInit {

  private _assets$: BehaviorSubject<IaNextButtonModel> = new BehaviorSubject<IaNextButtonModel>(null)
  private _result$: BehaviorSubject<IaResultModel[]> = new BehaviorSubject<IaResultModel[]>([])
  private _analysis$: BehaviorSubject<IaAnalysisModel> = new BehaviorSubject<IaAnalysisModel>(null)
  private _tableColumns$: BehaviorSubject<AppOptionModel[]> = new BehaviorSubject<AppOptionModel[]>([])

  @Input()
  set result(value: IaResultModel[]) { this._result$.next(value) }
  get result(): IaResultModel[] { return this._result$.getValue() }

  @Input()
  set analysis(value: IaAnalysisModel) { this._analysis$.next(value) }
  get analysis(): IaAnalysisModel { return this._analysis$.getValue() }

  @Input()
  set tableColumns(value: AppOptionModel[]) { this._tableColumns$.next(value) };
  get tableColumns(): AppOptionModel[] { return this._tableColumns$.getValue() };

  @Input()
  set assets(value: IaNextButtonModel) { this._assets$.next(value) }
  get assets(): IaNextButtonModel { return this._assets$.getValue() }

  @Output() openImage$: EventEmitter<IaResultModel> = new EventEmitter<IaResultModel>()
  @Output() gotoResults$: EventEmitter<void> = new EventEmitter<void>()

  private sort: MatSort
  private paginator: MatPaginator

  @ViewChild(MatSort, { static: false }) private set _sort(_: MatSort) {
    this.sort = _
    this.setDataSourceAttributes()
  }

  @ViewChild(MatPaginator, { static: false }) private set _paginator(_: MatPaginator) {
    this.paginator = _
    this.setDataSourceAttributes()
  }

  bucketLocation: string
  dataSource: MatTableDataSource<IaResultModel> = new MatTableDataSource<IaResultModel>([])
  displayedColumns: string[]

  constructor() { }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  ngOnInit(): void {
    this._result$.subscribe(_ => {

      console.groupCollapsed(`[C-Ia-Result] _result$ subscribe`)
      console.log(_)
      console.groupEnd()

      this.dataSource.data = this.result
    })

    this._tableColumns$.subscribe(_ => {

      console.groupCollapsed(`[C-Ia-Result] _tableColumns$ subscribe`)
      console.log(this.tableColumns)
      console.log(_)
      console.groupEnd()

      this.displayedColumns = (!!this.tableColumns)
        ? [...this.tableColumns.filter(__ => __.value !== 'url').map(__ => __.value.toString()), 'view']
        : ['view']
    })
  }

  openImage(_: IaResultModel): void {
    this.openImage$.emit(_)
  }

  applyFilter(_: KeyboardEvent) {
    const _filterString = (<HTMLInputElement>_.target).value.trim().toLowerCase()
    this.dataSource.filter = _filterString
  }

  clearInput(_: HTMLInputElement) {
    _.value = ''
    this.dataSource.filter = ''
  }

  gotoResults() {
    this.gotoResults$.emit()
  }

}
