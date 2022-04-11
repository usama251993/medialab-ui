import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Dictionary } from '@ngrx/entity'

import { LmHomeAssetsModel } from '@lm-core/models/lm-home.model'
import { LmHomeService } from '@lm-core/services/lm-home/lm-home.service'

@Component({
  selector: 'app-lm-home-container',
  template: `<app-lm-home [assetsDict]             = "assetsDict$        | async"
                          [assetsEntityID]         = "assetsEntityID$    | async"
                          [cookiebarDict]          = "cookiebarDict$     | async"
                          [cookiebarEntityID]      = "cookiebarEntityID$ | async"
                          (triggerDissmissCookiebar$) = "triggerDismissCookiebar($event)"></app-lm-home>`
})
export class LmHomeContainerComponent implements OnInit {

  assetsDict$: Observable<Dictionary<LmHomeAssetsModel>>
  assetsEntityID$: Observable<string>
  cookiebarDict$: Observable<Dictionary<LmHomeAssetsModel>>
  cookiebarEntityID$: Observable<string>

  constructor(
    private homeService: LmHomeService
  ) { }

  ngOnInit(): void {
    this.assetsDict$ = this.homeService.getAssetsDict()
    this.assetsEntityID$ = this.homeService.getEntityID()
    this.cookiebarDict$ = this.homeService.getCookieAssetsDict()
    this.cookiebarEntityID$ = this.homeService.getCookieEntityID()
  }

  triggerDismissCookiebar(cookiebarModel: LmHomeAssetsModel) {
    this.assetsDict$ = this.homeService.triggerDismissCookiebar(cookiebarModel)
  }

}
