import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'

import { CdAppCoreService } from '@cd-app/services/cd-app-core.service'
import { CdAnalysisModel, CdNextButtonModel, CdResultModel } from '@cd-app/models/cd-result.model'
import { AppOptionModel } from '@shared/models/app-assets.model'
import { CdDialogContainerComponent } from '@cd-app/components/cd-dialog-container/cd-dialog-container.component'

@Component({
  selector: 'app-cd-result-container',
  template: `<app-cd-result [result]           = "result$       | async"
                            [tableColumns]     = "tableColumns$ | async"
                            [analysis]         = "analysis$     | async"
                            [assets]           = "assets$       | async"
                            (triggerCompare$)  = "triggerCompare($event)"
                            (triggerNavigate$) = "triggerNavigate()"></app-cd-result>`
})
export class CdResultContainerComponent implements OnInit {

  result$: Observable<CdResultModel>
  tableColumns$: Observable<AppOptionModel[]>
  analysis$: Observable<CdAnalysisModel>
  assets$: Observable<CdNextButtonModel>

  constructor(
    private _coreService: CdAppCoreService,
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

  triggerCompare(_: CdResultModel): void {
    const dialogConfig: MatDialogConfig = {
      data: { ..._ },
      hasBackdrop: true,
      backdropClass: 'app-backdrop-gray',
      disableClose: true
    }
    this._dialog.open(CdDialogContainerComponent, dialogConfig)
  }

  triggerNavigate(): void {
    this._coreService.gotoResults()
  }

}
