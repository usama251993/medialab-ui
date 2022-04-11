import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { StCoreService } from '@st-core/services/st-core.service'
import { StAppService } from '@st-core/services/application-ui/st-application/st-app.service'

@Component({
  selector: 'app-st-result-dialog-container',
  template: `<app-st-result-dialog [testPackResult]       = "_testPackResult$ | async"
                                   [data]                 = "data | async"
                                   (closeDialog$)         = "closeDialog()"
                                  > </app-st-result-dialog>`
})
export class StResultDialogContainerComponent implements OnInit {

  _testPackResult$: any

  constructor(
    private _coreService: StCoreService,
    private _appService: StAppService,
    public dialogRef: MatDialogRef<StResultDialogContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit(): void {
    console.log(this.data)
    // this._testPackResult$ = this._appService.fetchTestPackResult$()
  }

  closeDialog() {
    this.dialogRef.close()
  }


}
