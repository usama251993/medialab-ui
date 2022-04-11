import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { IaPricingPageAssetsModel } from '@ia-business/models/ia-pricing.model'
import { IaPricingService } from '@ia-business/services/ia-pricing/ia-pricing.service'

@Component({
  selector: 'app-ia-pricing-container',
  template: `<app-ia-pricing [assets] = "assets$ | async"></app-ia-pricing>`
})
export class IaPricingContainerComponent implements OnInit {

  assets$: Observable<IaPricingPageAssetsModel>

  constructor(
    private _pricingService: IaPricingService
  ) { }

  ngOnInit(): void {
    this._pricingService.fetchAssets()
    this.assets$ = this._pricingService.watchAssets$()
  }

}
