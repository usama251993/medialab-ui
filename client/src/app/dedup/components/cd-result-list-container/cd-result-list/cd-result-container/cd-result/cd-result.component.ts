import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

import { CdResultModel } from '@cd-core/models/cd-result.model'
import { CdResultOverviewModel } from '@cd-core/models/cd-result-overview.model'
import { AppOptionModel } from '@shared/models/app-assets.model'

@Component({
  selector: 'app-cd-result',
  templateUrl: './cd-result.component.html',
  styleUrls: ['./cd-result.component.scss']
})
export class CdResultComponent implements OnInit {

  private _result$: BehaviorSubject<CdResultModel[]>
  private _useCase$: BehaviorSubject<CdResultOverviewModel>
  private _bucketForm$: BehaviorSubject<FormData>
  private _tableColumns$: BehaviorSubject<AppOptionModel[]>

  @Input()
  set result(value: CdResultModel[]) { this._result$.next(value) };
  get result(): CdResultModel[] { return this._result$.getValue() };

  @Input()
  set useCase(value: CdResultOverviewModel) { this._useCase$.next(value) };
  get useCase(): CdResultOverviewModel { return this._useCase$.getValue() };

  @Input()
  set bucketForm(value: FormData) { this._bucketForm$.next(value) };
  get bucketForm(): FormData { return this._bucketForm$.getValue() };

  @Input()
  set tableColumns(value: AppOptionModel[]) { this._tableColumns$.next(value) };
  get tableColumns(): AppOptionModel[] { return this._tableColumns$.getValue() };

  @Output() gotoBucketSelection$: EventEmitter<void>
  @Output() playVideo$: EventEmitter<CdResultModel>

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
    this._useCase$ = new BehaviorSubject<CdResultOverviewModel>(null)
    this._bucketForm$ = new BehaviorSubject<FormData>(null)
    this._tableColumns$ = new BehaviorSubject<AppOptionModel[]>([])

    this.dataSource = new MatTableDataSource<CdResultModel>([])
    this.gotoBucketSelection$ = new EventEmitter<void>()
    this.playVideo$ = new EventEmitter<CdResultModel>()
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  ngOnInit(): void {
    this.displayedColumns = (!!this.tableColumns) ? [...this.tableColumns.map(_ => _.value.toString()), 'play'] : ['play']
    this.dataSource.data = this.result
    this.bucketLocation = (!!this.bucketForm) ? this.bucketForm['bucketLocation'].toString() : ''
  }

  gotoBucketSelection(): void {
    this.gotoBucketSelection$.emit()
  }

  playVideo(_: CdResultModel): void {
    this.playVideo$.emit(_)
  }

}
