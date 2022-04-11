import { Component, Input, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { INITIAL_PRICING_PLAN_MODEL, StPricingPlanModel } from '@st-core/models/st-pricing/st-pricing-assets.model'
@Component({
  selector: 'app-st-pricing-plan',
  templateUrl: './st-pricing-plan.component.html',
  styleUrls: ['./st-pricing-plan.component.scss']
})
export class StPricingPlanComponent implements OnInit {

  private _assets$: BehaviorSubject<StPricingPlanModel> = new BehaviorSubject<StPricingPlanModel>(INITIAL_PRICING_PLAN_MODEL)

  @Input()
  set assets(value: StPricingPlanModel) { this._assets$.next(value) }
  get assets(): StPricingPlanModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }
}
