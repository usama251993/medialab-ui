import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { StPricingModuleModel, INITIAL_PRICING_MODULE_MODEL } from '@st-core/models/st-pricing/st-pricing-assets.model'
import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-st-pricing-module',
  templateUrl: './st-pricing-module.component.html',
  styleUrls: ['./st-pricing-module.component.scss']
})
export class StPricingModuleComponent implements OnInit {

  private _assets$: BehaviorSubject<StPricingModuleModel> = new BehaviorSubject<StPricingModuleModel>(INITIAL_PRICING_MODULE_MODEL)

  @Input()
  set assets(value: StPricingModuleModel) { this._assets$.next(value) }
  get assets(): StPricingModuleModel { return this._assets$.getValue() }

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() { }

  ngOnInit(): void { }

  navigate() {
    this.triggerNavigate$.emit({ path: [], extras: {} })
  }

}
