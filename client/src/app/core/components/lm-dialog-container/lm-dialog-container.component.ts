import { Component, Inject, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { Observable } from 'rxjs'

import { LmCardModel } from '@lm-core/models/lm-kb.model'
import { LmPaymentMethodAssetsModel } from '@lm-core/models/lm-payment-method/lm-payment-method-assets.model'
import { LmKillbillService } from '@lm-core/services/lm-killbill/lm-killbill.service'
import { LmPaymentMethodService } from '@lm-core/services/lm-payment-method/lm-payment-method.service'

@Component({
  selector: 'app-lm-dialog-container',
  template: `<app-lm-dialog [result]          = "data"
                            [form]            = "form$      | async"
                            [assets]          = "assets$    | async"
                            [formGroup]       = "formGroup$ | async"
                            (triggerAddCard$) = "triggerAddCard($event)"
                            (closeDialog$)    = "closeDialog()"> </app-lm-dialog>`
})
export class LmDialogContainerComponent implements OnInit {

  form$: Observable<LmCardModel>
  assets$: Observable<LmPaymentMethodAssetsModel>
  formGroup$: Observable<FormGroup>

  constructor(
    private _paymentMethodService: LmPaymentMethodService,
    private _killbillService: LmKillbillService,
    public dialogRef: MatDialogRef<LmDialogContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.assets$ = this._paymentMethodService.fetchAssets()
    this.form$ = this._paymentMethodService.fetchFormAssets()
    this.formGroup$ = this._paymentMethodService.fetchFormGroup()
  }

  ngOnInit(): void { }

  closeDialog() {
    this.dialogRef.close()
  }

  triggerAddCard(_: any) {
    this._paymentMethodService.addToStripeAccount(_).subscribe(__ => {
      console.log(__)
      this._killbillService.addPaymentMethod(__.id).subscribe(data => {
        console.log(data)
      })
    })
  }
}
