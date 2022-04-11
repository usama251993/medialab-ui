import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { LmCookiebarAssetsModel } from '@lm-core/models/lm-cookiebar/lm-cookiebar-assets.model'
import { LmCookiebarModel } from '@lm-core/models/lm-cookiebar/lm-cookiebar.model'

@Component({
  selector: 'app-lm-cookiebar',
  templateUrl: './lm-cookiebar.component.html',
  styleUrls: ['./lm-cookiebar.component.scss']
})
export class LmCookiebarComponent implements OnInit {

  private _assets$: BehaviorSubject<LmCookiebarAssetsModel>
  private _cookiebar$: BehaviorSubject<LmCookiebarModel>

  @Input()
  set assets(value: LmCookiebarAssetsModel) { this._assets$.next(value) };
  get assets(): LmCookiebarAssetsModel { return this._assets$.getValue() };

  @Input()
  set cookiebar(value: LmCookiebarModel) { this._cookiebar$.next(value) };
  get cookiebar(): LmCookiebarModel { return this._cookiebar$.getValue() };

  @Output() triggerDismissCookiebar$: EventEmitter<LmCookiebarModel>

  constructor() {
    this._assets$ = new BehaviorSubject<LmCookiebarAssetsModel>(null)
    this._cookiebar$ = new BehaviorSubject<LmCookiebarModel>(null)

    this.triggerDismissCookiebar$ = new EventEmitter<LmCookiebarModel>()
  }

  ngOnInit(): void { }

  triggerDismissCookiebar(): void {
    this.triggerDismissCookiebar$.emit(this.cookiebar)
  }
}
