import { Component, OnInit } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { Observable } from 'rxjs'

import { StNavbarAssetsModel } from '@st-core/models/st-navbar/st-navbar.model'
import { StNavbarService } from '@st-core/services/common/st-navbar/st-navbar.service'

@Component({
  selector: 'app-st-navbar-container',
  template: `<app-st-navbar [assets]           = "assets$ | async"
                            [user]             = "user$   | async"
                            (triggerNavigate$) = "navigate($event)"> </app-st-navbar>`
})
export class StNavbarContainerComponent implements OnInit {

  assets$: Observable<StNavbarAssetsModel>
  user$: Observable<boolean>

  constructor(
    private _navbarService: StNavbarService
  ) { }

  ngOnInit(): void {
    this._navbarService.fetchAssets()
    this.assets$ = this._navbarService.watchAssets$()

    this._navbarService.fetchUser()
    this.user$ = this._navbarService.watchUser$()
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    if (!!_) this._navbarService.navigate({ path: [..._.path], extras: {} })
  }
}
