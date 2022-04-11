import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { PhPricingPageAssetsModel } from '@ph-core/modules/business-ui/models/ph-pricing.model'
import { PhPricingService } from '@ph-core/modules/business-ui/services/ph-pricing/ph-pricing.service'

@Component({
  selector: 'app-ph-pricing-container',
  template: `<app-ph-pricing [assets] = "assets$ | async"></app-ph-pricing>`
})
export class PhPricingContainerComponent implements OnInit {

  assets$: Observable<PhPricingPageAssetsModel>

  constructor(
    private _pricingService: PhPricingService
  ) { }

  ngOnInit(): void {
    this._pricingService.fetchAssets()
    this.assets$ = this._pricingService.watchAssets$()
  }

}
