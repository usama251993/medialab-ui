import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { PhPricingModuleAssetsModel, INITIAL_PRICING_ASSETS_MODEL } from '@ph-core/modules/business-ui/models/ph-pricing.model'

@Component({
  selector: 'app-ph-pricing-module',
  templateUrl: './ph-pricing-module.component.html',
  styleUrls: ['./ph-pricing-module.component.scss']
})
export class PhPricingModuleComponent implements OnInit {

  private _assets$: BehaviorSubject<PhPricingModuleAssetsModel> = new BehaviorSubject<PhPricingModuleAssetsModel>(INITIAL_PRICING_ASSETS_MODEL)

  @Input()
  set assets(value: PhPricingModuleAssetsModel) { this._assets$.next(value) }
  get assets(): PhPricingModuleAssetsModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
