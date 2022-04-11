import { Component, OnInit } from '@angular/core';
import { LmKillbillService } from '@lm-core/services/lm-killbill/lm-killbill.service'
import { Observable } from 'rxjs';
import { LmKBPlanModel } from '@lm-core/models/lm-kb.model';

@Component({
  selector: 'app-lm-pricing-container',
  template: '<app-lm-pricing [pricingData] = "pricingData$ | async" (triggerNavigate$) = "navigate($event)"  > </app-lm-pricing>'
})
export class LmPricingContainerComponent implements OnInit {

  pricingData$: Observable<LmKBPlanModel[]>

  constructor(
    private _killbillService: LmKillbillService
  ) { }

  ngOnInit(): void {
    this.pricingData$ = this._killbillService.fetchBasePlans()

  }

  navigate($event) {
    console.log("Here")
  }

}
