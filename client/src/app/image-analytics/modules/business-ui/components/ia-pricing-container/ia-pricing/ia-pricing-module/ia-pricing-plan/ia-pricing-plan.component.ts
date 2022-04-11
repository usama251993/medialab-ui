import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { IaPricingPlanModel, INITIAL_PRICING_PLAN_MODEL } from '@ia-business/models/ia-pricing.model'

@Component({
  selector: 'app-ia-pricing-plan',
  templateUrl: './ia-pricing-plan.component.html',
  styleUrls: ['./ia-pricing-plan.component.scss']
})
export class IaPricingPlanComponent implements OnInit {

  private _assets$: BehaviorSubject<IaPricingPlanModel> = new BehaviorSubject<IaPricingPlanModel>(INITIAL_PRICING_PLAN_MODEL)

  @Input()
  set assets(value: IaPricingPlanModel) { this._assets$.next(value) }
  get assets(): IaPricingPlanModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void {
  }

}
