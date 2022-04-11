import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { PhPricingPlanModel, INITIAL_PRICING_PLAN_MODEL } from '@ph-core/modules/business-ui/models/ph-pricing.model'

@Component({
  selector: 'app-ph-pricing-plan',
  templateUrl: './ph-pricing-plan.component.html',
  styleUrls: ['./ph-pricing-plan.component.scss']
})
export class PhPricingPlanComponent implements OnInit {

  private _assets$: BehaviorSubject<PhPricingPlanModel> = new BehaviorSubject<PhPricingPlanModel>(INITIAL_PRICING_PLAN_MODEL)

  @Input()
  set assets(value: PhPricingPlanModel) { this._assets$.next(value) }
  get assets(): PhPricingPlanModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void {
  }

}
