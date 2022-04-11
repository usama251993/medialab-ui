import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'

import { IaAppCoreService } from '@ia-app/services/ia-app-core.service'
import { IaAnalysisModel, IaNextButtonModel, IaResultModel } from '@ia-app/models/ia-result.model'
import { AppOptionModel } from '@shared/models/app-assets.model'
import { IaDialogContainerComponent } from '@ia-app/components/ia-dialog-container/ia-dialog-container.component'

@Component({
  selector: 'app-ia-result-container',
  template: `<app-ia-result [result]       = "result$       | async"
                            [tableColumns] = "tableColumns$ | async"
                            [analysis]     = "analysis$     | async"
                            [assets]       = "assets$       | async"
                            (openImage$)   = "openImage($event)"
                            (gotoResults$) = "gotoResults()"></app-ia-result>`
})
export class IaResultContainerComponent implements OnInit {

  result$: Observable<IaResultModel>
  tableColumns$: Observable<AppOptionModel[]>
  analysis$: Observable<IaAnalysisModel>
  assets$: Observable<IaNextButtonModel>

  constructor(
    private _coreService: IaAppCoreService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.result$ = this._coreService.watchResult$()
    this.tableColumns$ = this._coreService.watchTableColumns$()
    this.analysis$ = this._coreService.watchAnalysis$()
    this._coreService.setButtonAsset()
    this.assets$ = this._coreService.watchButtonAsset$()
  }

  gotoBucketSelection(): void {
    this._coreService.gotoBucketSelection()
  }

  openImage(_: IaResultModel): void {
    const dialogConfig: MatDialogConfig = {
      data: { ..._ },
      hasBackdrop: true,
      backdropClass: 'app-backdrop-gray',
      disableClose: true,
      width: '800px',
      height: '600px'
    }
    this._dialog.open(IaDialogContainerComponent, dialogConfig)
  }

  gotoResults(): void {
    this._coreService.gotoResults()
  }

}
