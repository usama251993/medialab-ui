import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { CdNavbarAssetsModel } from '@cd-core/models/navbar/cd-navbar.model'
import { CdNavbarService } from '@cd-core/services/cd-navbar/cd-navbar.service'

import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-cd-navbar-container',
  template: `<app-cd-navbar [assets]           = "assets$ | async"
                            [user]             = "user$   | async"
                            (triggerNavigate$) = "triggerNavigate($event)"></app-cd-navbar>`
})
export class CdNavbarContainerComponent implements OnInit {

  assets$: Observable<CdNavbarAssetsModel>
  user$: Observable<boolean>

  constructor(
    private _navbarService: CdNavbarService
  ) { }

  ngOnInit(): void {
    this._navbarService.fetchAssets()
    this.assets$ = this._navbarService.watchAssets$()

    this._navbarService.fetchUser()
    this.user$ = this._navbarService.watchUser$()
  }

  triggerNavigate(_: { path: string[], extras: NavigationExtras }): void {
    if (!!_) this._navbarService.navigate({ path: [..._.path], extras: {} })
  }

}
