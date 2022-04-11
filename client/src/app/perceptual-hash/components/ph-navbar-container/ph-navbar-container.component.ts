import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { PhNavbarAssetsModel } from '@ph-core/models/navbar/ph-navbar.model'
import { PhNavbarService } from '@ph-core/services/ph-navbar/ph-navbar.service'

import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-ph-navbar-container',
  template: `<app-ph-navbar [assets]           = "assets$ | async"
                            [user]             = "user$   | async"
                            (triggerNavigate$) = "triggerNavigate($event)"></app-ph-navbar>`
})
export class PhNavbarContainerComponent implements OnInit {

  assets$: Observable<PhNavbarAssetsModel>
  user$: Observable<boolean>

  constructor(
    private _navbarService: PhNavbarService
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
