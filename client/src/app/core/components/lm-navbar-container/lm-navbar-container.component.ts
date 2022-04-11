import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { LmUserModel } from '@lm-core/models/common/auth/lm-auth-user.model'
import { LmNavbarAssetsModel } from '@lm-core/models/assets/lm-navbar.model'
import { LmNavbarService } from '@lm-core/services/lm-navbar/lm-navbar.service'

@Component({
  selector: 'app-lm-navbar-container',
  template: `<app-lm-navbar [assets]           = "assets$ | async"
                            [user]             = "user$   | async"
                            (triggerNavigate$) = "navigate($event)"
                            (triggerLogout$)   = "logout()"></app-lm-navbar>`
})
export class LmNavbarContainerComponent implements OnInit {

  assets$: Observable<LmNavbarAssetsModel>
  user$: Observable<LmUserModel>

  constructor(
    private _navbarService: LmNavbarService
  ) { }

  ngOnInit(): void {
    this._navbarService.fetchAssets()
    this.assets$ = this._navbarService.watchAssets()
    this._navbarService.fetchUser()
    this.user$ = this._navbarService.watchUser()
  }

  navigate(_: { path: string[] }): void {
    this._navbarService.navigate(_)
  }

  logout(): void {
    this._navbarService.logout()
    this._navbarService.showSnackbar({ message: 'Logged out Successfully', button: { text: 'OK!', link: '' } })
    this._navbarService.navigate({ path: [] })
  }
}

