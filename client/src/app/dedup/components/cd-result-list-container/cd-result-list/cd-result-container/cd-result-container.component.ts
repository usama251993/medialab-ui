import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'

import { CdCoreService } from '@cd-core/services/cd-core.service'
import { CdResultModel } from '@cd-core/models/cd-result.model'
import { CdResultListService } from '@cd-core/services/cd-result-list/cd-result-list.service'
import { CdResultOverviewModel } from '@cd-core/models/cd-result-overview.model'
import { AppOptionModel } from '@shared/models/app-assets.model'
import { CdDialogContainerComponent } from '@cd-core/components/cd-dialog-container/cd-dialog-container.component'

@Component({
  selector: 'app-cd-result-container',
  template: `<app-cd-result [result]               = "result$       | async"
                            [useCase]              = "useCase$      | async"
                            [bucketForm]           = "bucketForm$   | async"
                            [tableColumns]         = "tableColumns$ | async"
                            (gotoBucketSelection$) = "gotoBucketSelection()"
                            (playVideo$)           = "playVideo($event)"></app-cd-result>`
})
export class CdResultContainerComponent implements OnInit {

  result$: Observable<CdResultModel[]>
  useCase$: Observable<CdResultOverviewModel>
  bucketForm$: Observable<FormData>
  tableColumns$: Observable<AppOptionModel[]>


  constructor(
    private _coreService: CdCoreService,
    private _resultListService: CdResultListService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.result$ = this._coreService.getResultData()
    this.useCase$ = this._coreService.getUseCase()
    this.bucketForm$ = this._coreService.getBucketForm()
    this.tableColumns$ = this._coreService.getTableColumns()
  }

  gotoBucketSelection(): void {
    this._resultListService.gotoBucketSelection()
  }

  playVideo(_: CdResultModel) {
    const dialogConfig: MatDialogConfig = {
      data: { ..._ },
      hasBackdrop: true,
      backdropClass: 'cd-backdrop-gray',
      disableClose: true
    }
    this._dialog.open(CdDialogContainerComponent, dialogConfig)
  }

}
