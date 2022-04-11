import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { BehaviorSubject, Observable } from 'rxjs'

import { CORE_ROUTES } from '@ia-core/ia-core.routes'
import { IaNavbarAssetsModel, INITIAL_NAVBAR_ASSETS } from '@ia-core/models/navbar/ia-navbar.model'
import { IaCoreService } from '../ia-core.service'

@Injectable({
  providedIn: 'root'
})
export class IaNavbarService {

  private _assets$: BehaviorSubject<IaNavbarAssetsModel> = new BehaviorSubject<IaNavbarAssetsModel>(INITIAL_NAVBAR_ASSETS)
  private _user$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  private _assets: IaNavbarAssetsModel

  constructor(
    private _coreService: IaCoreService
  ) {
    this._assets = {
      logo: {
        src: null,
        alt: 'Image Analytics Logo'
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
            name: 'app',
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

  watchAssets$(): Observable<IaNavbarAssetsModel> {
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
