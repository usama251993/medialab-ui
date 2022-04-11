import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { CdPricingPlanModel, INITIAL_PRICING_PLAN_MODEL } from '@cd-business/models/cd-pricing.model'

@Component({
  selector: 'app-cd-pricing-plan',
  templateUrl: './cd-pricing-plan.component.html',
  styleUrls: ['./cd-pricing-plan.component.scss']
})
export class CdPricingPlanComponent implements OnInit {

  private _assets$: BehaviorSubject<CdPricingPlanModel> = new BehaviorSubject<CdPricingPlanModel>(INITIAL_PRICING_PLAN_MODEL)

  @Input()
  set assets(value: CdPricingPlanModel) { this._assets$.next(value) }
  get assets(): CdPricingPlanModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void {
  }

}
