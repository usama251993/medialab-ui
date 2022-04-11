import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { CdPricingModuleAssetsModel, INITIAL_PRICING_ASSETS_MODEL } from '@cd-business/models/cd-pricing.model'

@Component({
  selector: 'app-cd-pricing-module',
  templateUrl: './cd-pricing-module.component.html',
  styleUrls: ['./cd-pricing-module.component.scss']
})
export class CdPricingModuleComponent implements OnInit {

  private _assets$: BehaviorSubject<CdPricingModuleAssetsModel> = new BehaviorSubject<CdPricingModuleAssetsModel>(INITIAL_PRICING_ASSETS_MODEL)

  @Input()
  set assets(value: CdPricingModuleAssetsModel) { this._assets$.next(value) }
  get assets(): CdPricingModuleAssetsModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
