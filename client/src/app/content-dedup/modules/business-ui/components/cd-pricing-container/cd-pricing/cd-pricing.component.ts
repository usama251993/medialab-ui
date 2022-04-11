import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { CdPricingPageAssetsModel, INITIAL_PRICING_PAGE_ASSETS_MODEL } from '@cd-business/models/cd-pricing.model'

@Component({
  selector: 'app-cd-pricing',
  templateUrl: './cd-pricing.component.html',
  styleUrls: ['./cd-pricing.component.scss']
})
export class CdPricingComponent implements OnInit {

  private _assets$: BehaviorSubject<CdPricingPageAssetsModel> = new BehaviorSubject<CdPricingPageAssetsModel>(INITIAL_PRICING_PAGE_ASSETS_MODEL)

  @Input()
  set assets(value: CdPricingPageAssetsModel) { this._assets$.next(value) }
  get assets(): CdPricingPageAssetsModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
