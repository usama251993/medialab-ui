import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { INITIAL_PRICING_ASSETS_MODEL, StPricingPageAssetsModel } from '@st-core/models/st-pricing/st-pricing-assets.model'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-st-pricing',
  templateUrl: './st-pricing.component.html',
  styleUrls: ['./st-pricing.component.scss']
})
export class StPricingComponent implements OnInit {

  private _assets$: BehaviorSubject<StPricingPageAssetsModel> = new BehaviorSubject<StPricingPageAssetsModel>(INITIAL_PRICING_ASSETS_MODEL)

  @Input()
  set assets(value: StPricingPageAssetsModel) { this._assets$.next(value) }
  get assets(): StPricingPageAssetsModel { return this._assets$.getValue() }

  @Output() triggerNavigate$: EventEmitter<void>

  constructor() {
    this.triggerNavigate$ = new EventEmitter<void>()
  }

  ngOnInit(): void { }

  navigate(): void {
    this.triggerNavigate$.emit()
  }

}
