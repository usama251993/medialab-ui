import { Component, OnInit, Input } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { LmHomeAssetsCustomerModel } from '@lm-core/models/assets/lm-home.model'

@Component({
  selector: 'app-lm-home-customers',
  templateUrl: './lm-home-customers.component.html',
  styleUrls: ['./lm-home-customers.component.scss']
})
export class LmHomeCustomersComponent implements OnInit {

  private _assets$: BehaviorSubject<LmHomeAssetsCustomerModel>

  @Input()
  set assets(value: LmHomeAssetsCustomerModel) { this._assets$.next(value) };
  get assets(): LmHomeAssetsCustomerModel { return this._assets$.getValue() };

  constructor() {
    this._assets$ = new BehaviorSubject<LmHomeAssetsCustomerModel>(null)
  }

  ngOnInit(): void { }

}
