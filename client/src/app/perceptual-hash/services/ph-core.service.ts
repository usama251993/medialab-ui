import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { APP_ROUTES } from 'src/app/app.routes'

import { AppRouterService } from '@shared/services/app-router/app-router.service'

import { PhComparisonDataPointModel, PhCircularPackDataModel } from '@ph-app/models/ph-phash-app-ui/phash.model'
import { CORE_ROUTES } from '@ph-core/ph-core.routes'

@Injectable({
  providedIn: 'root'
})
export class PhCoreService {

  constructor(
    private _routerService: AppRouterService
  ) { }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    if (_.path.includes(CORE_ROUTES.CONTACT)) this._routerService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
    else if (_.path.includes(CORE_ROUTES.MEDIALAB)) this._routerService.navigate({ path: [APP_ROUTES.EMPTY], extras: {} })
    else this._routerService.navigate({ path: [APP_ROUTES.PERCEPTUAL_HASH, ..._.path], extras: { ..._.extras } })
  }
}
