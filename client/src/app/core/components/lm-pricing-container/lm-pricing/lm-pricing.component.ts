import { Component, OnInit, Input } from '@angular/core'
import { Dictionary } from '@ngrx/entity'
import { BehaviorSubject } from 'rxjs'

import { LmUserModel } from '@shared/models/lm-auth.model'
import { LmPricingModel } from '@lm-core/models/lm-pricing.model'

@Component({
  selector: 'app-lm-pricing',
  templateUrl: './lm-pricing.component.html',
  styleUrls: ['./lm-pricing.component.scss']
})
export class LmPricingComponent implements OnInit {

  data$: BehaviorSubject<Dictionary<LmPricingModel>>
  user$: BehaviorSubject<Dictionary<LmUserModel>>

  infinity: number = Infinity;

  @Input()
  set assetsDict(updatedValue: Dictionary<LmPricingModel>) { this.data$.next(updatedValue) };
  get assetsDict(): Dictionary<LmPricingModel> { return this.data$.getValue() };

  @Input()
  assetsEntityID: string

  @Input()
  set userContextDict(updatedValue: Dictionary<LmUserModel>) { this.user$.next(updatedValue) };
  get userContextDict(): Dictionary<LmUserModel> { return this.user$.getValue() };

  @Input()
  userEntityID: string

  constructor() {
    this.data$ = new BehaviorSubject<Dictionary<LmPricingModel>>(null)
    this.user$ = new BehaviorSubject<Dictionary<LmUserModel>>(null)
  }

  ngOnInit(): void {
    console.log(this.userContextDict)
    console.log(this.userEntityID)
    console.log(this.userContextDict[this.userEntityID])
  }
}
