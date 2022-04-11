import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { BehaviorSubject, Observable } from 'rxjs'

import { CORE_ROUTES } from '@ph-core/ph-core.routes'
import { PhNavbarAssetsModel, INITIAL_NAVBAR_ASSETS } from '@ph-core/models/navbar/ph-navbar.model'
import { PhCoreService } from '../ph-core.service'

@Injectable({
  providedIn: 'root'
})
export class PhNavbarService {

  private _assets$: BehaviorSubject<PhNavbarAssetsModel> = new BehaviorSubject<PhNavbarAssetsModel>(INITIAL_NAVBAR_ASSETS)
  private _user$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  private _assets: PhNavbarAssetsModel

  constructor(
    private _coreService: PhCoreService
  ) {
    this._assets = {
      logo: {
        src: 'assets/phash/business-ui/common/logo/logo.svg',
        alt: 'Perceptual Hash Logo'
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

  watchAssets$(): Observable<PhNavbarAssetsModel> {
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
