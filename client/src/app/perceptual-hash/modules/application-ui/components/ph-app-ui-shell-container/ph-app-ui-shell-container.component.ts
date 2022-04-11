import { Component, OnInit } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { Observable } from 'rxjs'

import { PhAppUIShellService } from '@ph-app/services/ph-app-ui-shell/ph-app-ui-shell.service'
import { PhAppCoreService } from '@ph-app/services/ph-app-core.service'

import { PhApplicationModel } from '@ph-app/models/ph-app-ui-shell/ph-app-ui-shell.model'

@Component({
  selector: 'app-ph-app-ui-shell-container',
  template: `<app-ph-app-ui-shell [appList]          = "appList$ | async"
                                  (gotoApplication$) = "gotoApplication($event)"></app-ph-app-ui-shell>`
})
export class PhAppUIShellContainerComponent implements OnInit {

  appList$: Observable<PhApplicationModel[]>

  constructor(
    private _appUIShellService: PhAppUIShellService,
    private _coreService: PhAppCoreService
  ) { }

  ngOnInit(): void {
    this._appUIShellService.fetchAppList()
    this.appList$ = this._appUIShellService.watchAppList$()
  }

  gotoApplication(_: { path: string; extras: NavigationExtras }) {
    this._coreService.navigate({ path: [_.path], extras: { ..._.extras } })
  }

}
