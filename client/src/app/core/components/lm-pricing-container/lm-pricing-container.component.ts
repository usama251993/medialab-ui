import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Dictionary } from '@ngrx/entity'

import { LmPricingModel } from '@lm-core/models/lm-pricing.model'
import { LmPricingService } from '@lm-core/services/lm-pricing/lm-pricing.service'

@Component({
  selector: 'app-lm-pricing-container',
  template: `<app-lm-pricing [assetsDict]      = "assetsDict$      | async"
                             [assetsEntityID]  = "assetsEntityID$  | async"></app-lm-pricing>`
})
export class LmPricingContainerComponent implements OnInit {

  assetsDict$: Observable<Dictionary<LmPricingModel>>
  assetsEntityID$: Observable<string>

  constructor(
    private pricingService: LmPricingService
  ) { }

  ngOnInit(): void {
    this.assetsDict$ = this.pricingService.getAssetsDict()
    this.assetsEntityID$ = this.pricingService.getAssetsEntityID()
  }
}
