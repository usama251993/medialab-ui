import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { CdPricingPageAssetsModel } from '@cd-business/models/cd-pricing.model'
import { CdPricingService } from '@cd-business/services/cd-pricing/cd-pricing.service'

@Component({
  selector: 'app-cd-pricing-container',
  template: `<app-cd-pricing [assets] = "assets$ | async"></app-cd-pricing>`
})
export class CdPricingContainerComponent implements OnInit {

  assets$: Observable<CdPricingPageAssetsModel>

  constructor(
    private _pricingService: CdPricingService
  ) { }

  ngOnInit(): void {
    this._pricingService.fetchAssets()
    this.assets$ = this._pricingService.watchAssets$()
  }

}
