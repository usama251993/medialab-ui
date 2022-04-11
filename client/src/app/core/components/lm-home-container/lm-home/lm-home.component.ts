import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Dictionary } from '@ngrx/entity'

import { LmHomeAssetsModel } from '@lm-core/models/lm-home.model'

@Component({
  selector: 'app-lm-home',
  templateUrl: './lm-home.component.html',
  styleUrls: ['./lm-home.component.scss']
})
export class LmHomeComponent implements OnInit {

  data$: BehaviorSubject<Dictionary<LmHomeAssetsModel>>
  cookiebar$: BehaviorSubject<Dictionary<LmHomeAssetsModel>>

  @Input()
  set assetsDict(value: Dictionary<LmHomeAssetsModel>) { this.data$.next(value) };
  get assetsDict(): Dictionary<LmHomeAssetsModel> { return this.data$.getValue() };

  @Input()
  set cookiebarDict(value: Dictionary<LmHomeAssetsModel>) { this.cookiebar$.next(value) };
  get cookiebarDict(): Dictionary<LmHomeAssetsModel> { return this.cookiebar$.getValue() };

  @Input() cookiebarEntityID: string
  @Input() assetsEntityID: string

  @Output() triggerDissmissCookiebar$: EventEmitter<LmHomeAssetsModel>

  constructor() {
    this.data$ = new BehaviorSubject<Dictionary<LmHomeAssetsModel>>(null)
    this.cookiebar$ = new BehaviorSubject<Dictionary<LmHomeAssetsModel>>(null)
    this.triggerDissmissCookiebar$ = new EventEmitter<LmHomeAssetsModel>()
  }

  ngOnInit(): void { }

  triggerDismissCookiebar(): void {
    this.triggerDissmissCookiebar$.emit(this.cookiebarDict[this.cookiebarEntityID])
  }
}
