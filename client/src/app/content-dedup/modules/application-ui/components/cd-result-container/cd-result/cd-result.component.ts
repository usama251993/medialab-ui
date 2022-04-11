import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

import { CdAnalysisModel, CdNextButtonModel, CdResultModel } from '@cd-app/models/cd-result.model'
import { AppOptionModel } from '@shared/models/app-assets.model'

@Component({
  selector: 'app-cd-result',
  templateUrl: './cd-result.component.html',
  styleUrls: ['./cd-result.component.scss']
})
export class CdResultComponent implements OnInit {

  private _result$: BehaviorSubject<CdResultModel[]>
  private _tableColumns$: BehaviorSubject<AppOptionModel[]>
  private _analysis$: BehaviorSubject<CdAnalysisModel>
  private _assets$: BehaviorSubject<CdNextButtonModel>

  @Input()
  set result(value: CdResultModel[]) { this._result$.next(value) }
  get result(): CdResultModel[] { return this._result$.getValue() }

  @Input()
  set analysis(value: CdAnalysisModel) { this._analysis$.next(value) }
  get analysis(): CdAnalysisModel { return this._analysis$.getValue() }

  @Input()
  set tableColumns(value: AppOptionModel[]) { this._tableColumns$.next(value) };
  get tableColumns(): AppOptionModel[] { return this._tableColumns$.getValue() };

  @Input()
  set assets(value: CdNextButtonModel) { this._assets$.next(value) }
  get assets(): CdNextButtonModel { return this._assets$.getValue() }

  @Output() triggerCompare$: EventEmitter<CdResultModel>
  @Output() triggerNavigate$: EventEmitter<void>

  private sort: MatSort
  private paginator: MatPaginator

  @ViewChild(MatSort, { static: false })
  private set _sort(_: MatSort) {
    this.sort = _
    this.setDataSourceAttributes()
  }

  @ViewChild(MatPaginator, { static: false })
  private set _paginator(_: MatPaginator) {
    this.paginator = _
    this.setDataSourceAttributes()
  }

  bucketLocation: string
  dataSource: MatTableDataSource<CdResultModel>
  displayedColumns: string[]

  constructor() {
    this._result$ = new BehaviorSubject<CdResultModel[]>([])
    this._tableColumns$ = new BehaviorSubject<AppOptionModel[]>([])
    this._analysis$ = new BehaviorSubject<CdAnalysisModel>(null)
    this._assets$ = new BehaviorSubject<CdNextButtonModel>(null)
    this.dataSource = new MatTableDataSource<CdResultModel>([])

    this.triggerCompare$ = new EventEmitter<CdResultModel>()
    this.triggerNavigate$ = new EventEmitter<void>()
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  ngOnInit(): void {
    this._result$.subscribe(_ => { this.dataSource.data = this.result })
    this._tableColumns$.subscribe(_ => {
      this.displayedColumns = (!!this.tableColumns)
        ? [...this.tableColumns.map(_ => _.value.toString()), 'play']
        : ['play']
    })
  }

  compareVideos(_: CdResultModel): void {
    this.triggerCompare$.emit(_)
  }

  applyFilter(_: KeyboardEvent) {
    const _filterString = (<HTMLInputElement>_.target).value.trim().toLowerCase()
    this.dataSource.filter = _filterString
  }

  clearInput(_: HTMLInputElement) {
    _.value = ''
    this.dataSource.filter = ''
  }

  triggerNavigate() {
    this.triggerNavigate$.emit()
  }

}
