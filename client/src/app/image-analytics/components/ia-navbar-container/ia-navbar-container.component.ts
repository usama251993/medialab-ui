import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { IaNavbarAssetsModel } from '@ia-core/models/navbar/ia-navbar.model'
import { IaNavbarService } from '@ia-core/services/ia-navbar/ia-navbar.service'

import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-ia-navbar-container',
  template: `<app-ia-navbar [assets]           = "assets$ | async"
                            [user]             = "user$   | async"
                            (triggerNavigate$) = "triggerNavigate($event)"></app-ia-navbar>`
})
export class IaNavbarContainerComponent implements OnInit {

  assets$: Observable<IaNavbarAssetsModel>
  user$: Observable<boolean>

  constructor(
    private _navbarService: IaNavbarService
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
