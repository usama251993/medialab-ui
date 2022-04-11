import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { IaPricingPageAssetsModel, INITIAL_PRICING_PAGE_ASSETS_MODEL } from '@ia-business/models/ia-pricing.model'

@Component({
  selector: 'app-ia-pricing',
  templateUrl: './ia-pricing.component.html',
  styleUrls: ['./ia-pricing.component.scss']
})
export class IaPricingComponent implements OnInit {

  private _assets$: BehaviorSubject<IaPricingPageAssetsModel> = new BehaviorSubject<IaPricingPageAssetsModel>(INITIAL_PRICING_PAGE_ASSETS_MODEL)

  @Input()
  set assets(value: IaPricingPageAssetsModel) { this._assets$.next(value) }
  get assets(): IaPricingPageAssetsModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
