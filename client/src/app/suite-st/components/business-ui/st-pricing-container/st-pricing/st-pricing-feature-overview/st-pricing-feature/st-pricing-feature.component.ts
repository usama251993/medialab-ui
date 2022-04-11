import { Component, Input, OnInit } from '@angular/core'
import { StPricingFeatureModel, INITIAL_PRICING_FEATURE_MODEL } from '@st-core/models/st-pricing/st-pricing-assets.model'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-st-pricing-feature',
  templateUrl: './st-pricing-feature.component.html',
  styleUrls: ['./st-pricing-feature.component.scss']
})
export class StPricingFeatureComponent implements OnInit {

  private _assets$: BehaviorSubject<StPricingFeatureModel> = new BehaviorSubject<StPricingFeatureModel>(INITIAL_PRICING_FEATURE_MODEL)

  @Input()
  set assets(value: StPricingFeatureModel) { this._assets$.next(value) }
  get assets(): StPricingFeatureModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
