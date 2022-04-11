import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { AppRouterService } from '@shared/services/app-router/app-router.service'
import { APP_ROUTES } from 'src/app/app.routes'
import { NavigationExtras } from '@angular/router'
import { CORE_ROUTES } from '@st-core/st-core.routes'

@Injectable({
  providedIn: 'root'
})
export class StCoreService {

  private _currentAppName: FormData
  private _appList: any
  private _testPackResult: any

  constructor(
    private _routerService: AppRouterService
  ) {
    this._currentAppName = null
  }

  setCurrentAppName(_: FormData): void {
    this._currentAppName = null
    this._currentAppName = { ..._ }
  }

  getCurrentAppName(): Observable<FormData> {
    return of(this._currentAppName)
  }

  setAppList(_: FormData): void {
    this._appList = null
    this._appList = { ..._ }
  }

  getAppList(): Observable<FormData> {
    return of(this._appList)
  }

  setTestRunResult(_: any) {
    this._testPackResult = null
    this._testPackResult = { ..._ }
  }

  getTestRunResult(): Observable<any> {
    return of(this._testPackResult)
  }

  navigate(_: { path: string[], extras: NavigationExtras }) {
    if (_.path.includes(CORE_ROUTES.CONTACT)) this._routerService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
    else if (_.path.includes(CORE_ROUTES.MEDIALAB)) this._routerService.navigate({ path: [APP_ROUTES.EMPTY], extras: {} })
    else this._routerService.navigate({ path: [APP_ROUTES.TESTSUITE, ..._.path], extras: { ..._.extras } })
  }
}
