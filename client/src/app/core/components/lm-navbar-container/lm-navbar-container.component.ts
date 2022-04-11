import { Component, OnInit, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { Dictionary } from '@ngrx/entity'
import { MatSidenav } from '@angular/material/sidenav'

import { LmNavbarAssetsModel } from '@lm-core/models/lm-navbar.model'
import { LmNavbarService } from '@lm-core/services/lm-navbar/lm-navbar.service'
import { LmAuthResponseModel, LmUserModel } from '@shared/models/lm-auth.model'

@Component({
  selector: 'app-lm-navbar-container',
  template: `<app-lm-navbar [assetsDict]       = "assetsDict$      | async"
                            [assetsEntityID]   = "assetsEntityID$  | async"
                            [userContextDict]  = "userContextDict$ | async"
                            [userEntityIDs]    = "userEntityIDs$   | async"
                            (triggerNavigate$) = "navigate($event)"
                            (triggerLogout$)   = "logout($event)"
                            (toggleSidenav$)   = "toggleSidenav($event)"></app-lm-navbar>`
})
export class LmNavbarContainerComponent implements OnInit {

  assetsDict$: Observable<Dictionary<LmNavbarAssetsModel>>
  assetsEntityID$: Observable<string>
  userContextDict$: Observable<Dictionary<LmAuthResponseModel>>
  userEntityIDs$: Observable<string[]>

  constructor(
    private navbarService: LmNavbarService
  ) { }

  ngOnInit(): void {
    this.assetsDict$ = this.navbarService.getNavbarAssetsDict()
    this.assetsEntityID$ = this.navbarService.getNavEntityID()
    this.userContextDict$ = this.navbarService.getUserContextDict()
    this.userEntityIDs$ = this.navbarService.getUserEntityIDs()
  }

  navigate(_: { path: string }) {
    this.navbarService.navigate(_)
  }

  logout(_: LmUserModel) {
    this.navbarService.logout(_)
  }

  toggleSidenav(_: MatSidenav) {
    this.navbarService.triggerSidenavToggle(_)
  }

}
