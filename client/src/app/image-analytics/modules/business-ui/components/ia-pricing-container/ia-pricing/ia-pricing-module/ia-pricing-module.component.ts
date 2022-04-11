import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { IaPricingModuleAssetsModel, INITIAL_PRICING_ASSETS_MODEL } from '@ia-business/models/ia-pricing.model'

@Component({
  selector: 'app-ia-pricing-module',
  templateUrl: './ia-pricing-module.component.html',
  styleUrls: ['./ia-pricing-module.component.scss']
})
export class IaPricingModuleComponent implements OnInit {

  private _assets$: BehaviorSubject<IaPricingModuleAssetsModel> = new BehaviorSubject<IaPricingModuleAssetsModel>(INITIAL_PRICING_ASSETS_MODEL)

  @Input()
  set assets(value: IaPricingModuleAssetsModel) { this._assets$.next(value) }
  get assets(): IaPricingModuleAssetsModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
