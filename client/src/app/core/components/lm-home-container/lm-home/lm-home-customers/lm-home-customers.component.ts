import { Component, OnInit, Input } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { LmHomeAssetsCustomerModel } from '@lm-core/models/lm-home.model'

@Component({
  selector: 'app-lm-home-customers',
  templateUrl: './lm-home-customers.component.html',
  styleUrls: ['./lm-home-customers.component.scss']
})
export class LmHomeCustomersComponent implements OnInit {

  assets$: BehaviorSubject<LmHomeAssetsCustomerModel>

  @Input()
  set assets(value: LmHomeAssetsCustomerModel) { this.assets$.next(value) };
  get assets(): LmHomeAssetsCustomerModel { return this.assets$.getValue() };

  constructor() {
    this.assets$ = new BehaviorSubject<LmHomeAssetsCustomerModel>(null)
  }

  ngOnInit(): void { }

}
