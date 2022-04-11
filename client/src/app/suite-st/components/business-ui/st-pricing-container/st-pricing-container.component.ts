import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { CORE_ROUTES } from '@st-core/st-core.routes'
import { StPricingPageAssetsModel } from '@st-core/models/st-pricing/st-pricing-assets.model'

import { StPricingService } from '@st-core/services/business-ui/st-pricing/st-pricing.service'

@Component({
  selector: 'app-st-pricing-container',
  template: `<app-st-pricing [assets]           = "pageAssets$ | async"
                             (triggerNavigate$) = "triggerNavigate()"> </app-st-pricing>`
})
export class StPricingContainerComponent implements OnInit {

  pageAssets$: Observable<StPricingPageAssetsModel>

  constructor(
    private _pricingService: StPricingService,
  ) { }

  ngOnInit(): void {
    this._pricingService.fetchPricingAssets()
    this.pageAssets$ = this._pricingService.watchPricingAssets$()
  }

  triggerNavigate(): void {
    this._pricingService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }

}
