import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { CdNextButtonModel, CdResultModel } from '@cd-app/models/cd-result.model'
import { Observable } from 'rxjs'
import { CdAppCoreService } from '../../services/cd-app-core.service'

@Component({
  selector: 'app-cd-dialog-container',
  template: `<app-cd-dialog [result]       = "data"
                            [assets]       = "buttonAssets$  | async"
                            (closeDialog$) = "closeDialog()"></app-cd-dialog>`
})
export class CdDialogContainerComponent implements OnInit {

  buttonAssets$: Observable<CdNextButtonModel>

  constructor(
    private _coreService: CdAppCoreService,
    public dialogRef: MatDialogRef<CdDialogContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CdResultModel
  ) {
    this._coreService.setButtonAsset()
    this.buttonAssets$ = this._coreService.watchButtonAsset$()
  }

  ngOnInit(): void { }

  closeDialog() {
    this.dialogRef.close()
  }

}
