import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { CdResultModel } from '@cd-core/models/cd-result.model'

@Component({
  selector: 'app-cd-dialog-container',
  template: `<app-cd-dialog [result]       = "data"
                            (closeDialog$) = "closeDialog()"></app-cd-dialog>`
})
export class CdDialogContainerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CdDialogContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CdResultModel
  ) { }

  ngOnInit(): void { }

  closeDialog() {
    this.dialogRef.close()
  }

}
