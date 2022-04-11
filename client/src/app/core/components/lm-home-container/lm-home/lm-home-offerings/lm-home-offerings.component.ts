import { Component, OnInit, Input } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { LmHomeAssetsOfferingModel } from '@lm-core/models/lm-home.model'

@Component({
  selector: 'app-lm-home-offerings',
  templateUrl: './lm-home-offerings.component.html',
  styleUrls: ['./lm-home-offerings.component.scss']
})
export class LmHomeOfferingsComponent implements OnInit {

  assets$: BehaviorSubject<LmHomeAssetsOfferingModel>

  @Input()
  set assets(value: LmHomeAssetsOfferingModel) { this.assets$.next(value) };
  get assets(): LmHomeAssetsOfferingModel { return this.assets$.getValue() };

  constructor() {
    this.assets$ = new BehaviorSubject<LmHomeAssetsOfferingModel>(null)
  }

  ngOnInit(): void { }

}
