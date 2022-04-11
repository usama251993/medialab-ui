import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { LmKBAccountModel, LmKBPaymentMethodModel } from '@lm-core/models/lm-kb.model';
import { LmKillbillService } from '@lm-core/services/lm-killbill/lm-killbill.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-lm-payment-method',
  templateUrl: './lm-payment-method.component.html',
  styleUrls: ['./lm-payment-method.component.scss']
})
export class LmPaymentMethodComponent implements OnInit {

  accountId$: Observable<string>
  private _paymentMethods$: BehaviorSubject<LmKBPaymentMethodModel[]>

  @Input()
  set paymentMethods(value: LmKBPaymentMethodModel[]) { this._paymentMethods$.next(value) };
  get paymentMethods(): LmKBPaymentMethodModel[] { return this._paymentMethods$.getValue() };

  constructor(
    private _killbillService: LmKillbillService
  ) {
    this._paymentMethods$ = new BehaviorSubject<LmKBPaymentMethodModel[]>(null)
  }

  ngOnInit(): void {

    var externalKey: string = JSON.parse(localStorage.getItem("user"))["http://wso2.org/claims/organization"] + "-" + JSON.parse(localStorage.getItem("user"))["http://wso2.org/claims/emailaddress"]

  }

  ngOnChanges(change: SimpleChanges) {
    console.log(this.paymentMethods)
  }


}
