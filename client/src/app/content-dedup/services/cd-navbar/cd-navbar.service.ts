import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { BehaviorSubject, Observable } from 'rxjs'

import { CORE_ROUTES } from '@cd-core/cd-core.routes'
import { CdNavbarAssetsModel, INITIAL_NAVBAR_ASSETS } from '@cd-core/models/navbar/cd-navbar.model'
import { CdCoreService } from '../cd-core.service'

@Injectable({
  providedIn: 'root'
})
export class CdNavbarService {

  private _assets$: BehaviorSubject<CdNavbarAssetsModel> = new BehaviorSubject<CdNavbarAssetsModel>(INITIAL_NAVBAR_ASSETS)
  private _user$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  private _assets: CdNavbarAssetsModel

  constructor(
    private _coreService: CdCoreService
  ) {
    this._assets = {
      logo: {
        src: 'assets/dedup/business-ui/common/logo/logo.svg',
        alt: 'Content-Aware Deduplication Logo'
      },
      items: {
        common: [
          {
            label: 'Medialab',
            route: CORE_ROUTES.MEDIALAB,
            name: 'medialab',
            children: []
          },
          {
            label: 'Pricing',
            route: CORE_ROUTES.PRICING,
            name: 'pricing',
            children: []
          },
          {
            label: 'Application',
            route: CORE_ROUTES.APPLICATION,
            name: 'content-dedup-app',
            children: []
          },
        ],
        authenticated: [],
        anonymous: []
      }
    }
  }

  fetchAssets(): void {
    this._assets$.next(this._assets)
  }

  watchAssets$(): Observable<CdNavbarAssetsModel> {
    return this._assets$.asObservable()
  }

  fetchUser(): void {
    this._user$.next(!!localStorage.getItem('user'))
  }

  watchUser$(): Observable<boolean> {
    return this._user$.asObservable()
  }

  navigate(_: { path: string[], extras: NavigationExtras }) {
    this._coreService.navigate({ path: [..._.path], extras: { ..._.extras } })
  }

}
