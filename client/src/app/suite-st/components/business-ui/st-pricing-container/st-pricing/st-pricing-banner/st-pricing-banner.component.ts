import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { StPricingBannerModel, INITIAL_PRICING_BANNER_MODEL } from '@st-core/models/st-pricing/st-pricing-assets.model'
import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-st-pricing-banner',
  templateUrl: './st-pricing-banner.component.html',
  styleUrls: ['./st-pricing-banner.component.scss']
})
export class StPricingBannerComponent implements OnInit {

  private _assets$: BehaviorSubject<StPricingBannerModel> = new BehaviorSubject<StPricingBannerModel>(INITIAL_PRICING_BANNER_MODEL)

  @Input()
  set assets(value: StPricingBannerModel) { this._assets$.next(value) }
  get assets(): StPricingBannerModel { return this._assets$.getValue() }

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() { }

  ngOnInit(): void { }

  navigate() {
    this.triggerNavigate$.emit({ path: [], extras: {} })
  }
}
