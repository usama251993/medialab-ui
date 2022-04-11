import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { PhPricingPageAssetsModel, INITIAL_PRICING_PAGE_ASSETS_MODEL } from '@ph-core/modules/business-ui/models/ph-pricing.model'

@Component({
  selector: 'app-ph-pricing',
  templateUrl: './ph-pricing.component.html',
  styleUrls: ['./ph-pricing.component.scss']
})
export class PhPricingComponent implements OnInit {

  private _assets$: BehaviorSubject<PhPricingPageAssetsModel> = new BehaviorSubject<PhPricingPageAssetsModel>(INITIAL_PRICING_PAGE_ASSETS_MODEL)

  @Input()
  set assets(value: PhPricingPageAssetsModel) { this._assets$.next(value) }
  get assets(): PhPricingPageAssetsModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
