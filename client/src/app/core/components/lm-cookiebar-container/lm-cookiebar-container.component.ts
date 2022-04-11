import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { LmCookiebarService } from '@lm-core/services/lm-cookiebar/lm-cookiebar.service'
import { LmCookiebarAssetsModel } from '@lm-core/models/lm-cookiebar/lm-cookiebar-assets.model'
import { LmCookiebarModel } from '@lm-core/models/lm-cookiebar/lm-cookiebar.model'

@Component({
  selector: 'app-lm-cookiebar-container',
  template: `<app-lm-cookiebar [assets]                   = "assets$    | async"
                               [cookiebar]                = "cookiebar$ | async"
                               (triggerDismissCookiebar$) = "triggerDismissCookiebar($event)"></app-lm-cookiebar>`
})
export class LmCookiebarContainerComponent implements OnInit {

  assets$: Observable<LmCookiebarAssetsModel>
  cookiebar$: Observable<LmCookiebarModel>

  constructor(
    private _cookieService: LmCookiebarService
  ) { }

  ngOnInit(): void {
    this.assets$ = this._cookieService.fetchCookiebarAssets()
    this.cookiebar$ = this._cookieService.fetchCookiebarState()
  }

  triggerDismissCookiebar(_: LmCookiebarModel) {
    this.cookiebar$ = this._cookieService.dismissCookiebar(_)
  }

}
