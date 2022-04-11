import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { IaNextButtonModel, IaResultModel } from '@ia-app/models/ia-result.model'
import { Observable } from 'rxjs'
import { IaAppCoreService } from '../../services/ia-app-core.service'

@Component({
  selector: 'app-ia-dialog-container',
  template: `<app-ia-dialog [result]       = "data"
                            [assets]       = "buttonAssets$  | async"
                            (closeDialog$) = "closeDialog()"></app-ia-dialog>`
})
export class IaDialogContainerComponent implements OnInit {

  buttonAssets$: Observable<IaNextButtonModel>

  constructor(
    private _coreService: IaAppCoreService,
    public dialogRef: MatDialogRef<IaDialogContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IaResultModel
  ) {
    this._coreService.setButtonAsset()
    this.buttonAssets$ = this._coreService.watchButtonAsset$()
  }

  ngOnInit(): void { }

  closeDialog() {
    this.dialogRef.close()
  }

}
