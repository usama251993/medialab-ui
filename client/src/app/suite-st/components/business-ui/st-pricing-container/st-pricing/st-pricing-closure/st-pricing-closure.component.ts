import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { NavigationExtras } from '@angular/router'
import { INITIAL_PRICING_CLOSURE_MODEL, StPricingClosureModel } from '@st-core/models/st-pricing/st-pricing-assets.model'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-st-pricing-closure',
  templateUrl: './st-pricing-closure.component.html',
  styleUrls: ['./st-pricing-closure.component.scss']
})
export class StPricingClosureComponent implements OnInit {

  private _assets$: BehaviorSubject<StPricingClosureModel> = new BehaviorSubject<StPricingClosureModel>(INITIAL_PRICING_CLOSURE_MODEL)

  @Input()
  set assets(value: StPricingClosureModel) { this._assets$.next(value) }
  get assets(): StPricingClosureModel { return this._assets$.getValue() }

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() { }

  ngOnInit(): void {
  }

  navigate() {
    this.triggerNavigate$.emit({ path: [], extras: {} })
  }

}
