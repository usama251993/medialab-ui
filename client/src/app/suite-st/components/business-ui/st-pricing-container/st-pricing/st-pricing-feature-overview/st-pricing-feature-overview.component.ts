import { Component, Input, OnInit } from '@angular/core'
import { INITIAL_PRICING_FEATURE_CONTAINER_MODEL, StPricingFeatureContainerModel } from '@st-core/models/st-pricing/st-pricing-assets.model'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-st-pricing-feature-overview',
  templateUrl: './st-pricing-feature-overview.component.html',
  styleUrls: ['./st-pricing-feature-overview.component.scss']
})
export class StPricingFeatureOverviewComponent implements OnInit {

  private _assets$: BehaviorSubject<StPricingFeatureContainerModel> = new BehaviorSubject<StPricingFeatureContainerModel>(INITIAL_PRICING_FEATURE_CONTAINER_MODEL)

  @Input()
  set assets(value: StPricingFeatureContainerModel) { this._assets$.next(value) }
  get assets(): StPricingFeatureContainerModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
