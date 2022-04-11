import { Component, OnInit, SimpleChange } from '@angular/core';
import { LmInvoiceModel } from '@lm-core/models/lm-kb.model';
import { LmKillbillService } from '@lm-core/services/lm-killbill/lm-killbill.service';

@Component({
  selector: 'app-lm-invoices',
  templateUrl: './lm-invoices.component.html',
  styleUrls: ['./lm-invoices.component.scss']
})
export class LmInvoicesComponent implements OnInit {

  accountId: string;
  invoiceData: LmInvoiceModel[]
  displayedColumns = ['description', 'startDate', 'endDate', 'subscriptionId', 'amount']

  constructor(
    private _killbillService: LmKillbillService
  ) { }

  ngOnInit(): void {
    this.accountId = localStorage.getItem("accountId")
    this._killbillService.getInvoices(this.accountId).subscribe(data => {
      this.invoiceData = data;
      console.log(data)
    });
  }

  ngOnChanges(change: SimpleChange) {
    console.log(this.invoiceData)
  }

}
