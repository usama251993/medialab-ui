import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LmKBAccountModel, LmKBPaymentMethodModel } from '@lm-core/models/lm-kb.model';
import { LmCoreService } from '@lm-core/services/lm-core.service';
import { LmKillbillService } from '@lm-core/services/lm-killbill/lm-killbill.service';
import { LmProfileService } from '@lm-core/services/lm-profile/lm-profile.service';
import { Observable } from 'rxjs';
import { LmDialogContainerComponent } from '../lm-dialog-container/lm-dialog-container.component';

@Component({
  selector: 'app-lm-settings-container',
  template: `<app-lm-settings       [kBAccountDetails]   = "kBAccountDetails$ | async"
                                    [paymentMethods]   = "paymentMethods$ | async"
                                    [assets]          = "assets$        | async"
                                    (triggerAddCard$)  = "triggerAddCard()"
                                                                                ></app-lm-settings>`
})
export class LmSettingsContainerComponent implements OnInit {

  kBAccountDetails$: Observable<LmKBAccountModel>
  paymentMethods$: Observable<LmKBPaymentMethodModel[]>
  assets$: Observable<any>

  constructor(
    private _killbillService: LmKillbillService,
    private _dialog: MatDialog,
    private _profileService: LmProfileService,
    private _coreService: LmCoreService
  ) { }

  ngOnInit(): void {
    var externalKey: string = JSON.parse(localStorage.getItem("user"))["http://wso2.org/claims/organization"] + "-" + JSON.parse(localStorage.getItem("user"))["http://wso2.org/claims/emailaddress"]
    console.log(externalKey)
    this.kBAccountDetails$ = this._killbillService.getAccountDetails(externalKey)
    this.kBAccountDetails$.subscribe(_ => {
      this._coreService.setAccountId({ accountId: _["accountId"] })
      this.paymentMethods$ = this._killbillService.getPaymentMethodsForAccount(_.accountId)
    })
    this.assets$ = this._profileService.fetchAssets()
  }

  triggerAddCard() {
    const dialogConfig: MatDialogConfig = {
      data: {},
      hasBackdrop: true,
      backdropClass: 'app-backdrop-gray',
      disableClose: true
    }
    this._dialog.open(LmDialogContainerComponent, dialogConfig)
  }

}
