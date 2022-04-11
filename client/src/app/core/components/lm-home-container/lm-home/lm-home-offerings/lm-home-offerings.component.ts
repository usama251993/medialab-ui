import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { LmHomeAssetsOfferingModel } from '@lm-core/models/assets/lm-home.model'
import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-lm-home-offerings',
  templateUrl: './lm-home-offerings.component.html',
  styleUrls: ['./lm-home-offerings.component.scss']
})
export class LmHomeOfferingsComponent implements OnInit {

  private _assets$: BehaviorSubject<LmHomeAssetsOfferingModel>

  @Input()
  set assets(value: LmHomeAssetsOfferingModel) { this._assets$.next(value) };
  get assets(): LmHomeAssetsOfferingModel { return this._assets$.getValue() };

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() {
    this._assets$ = new BehaviorSubject<LmHomeAssetsOfferingModel>(null)
  }

  ngOnInit(): void { }

  navigate() {
    this.triggerNavigate$.emit({ path: [], extras: {} })
  }

}
