import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { Observable, BehaviorSubject } from 'rxjs'

import { INITIAL_NAVBAR_ASSETS, StNavbarAssetsModel } from '@st-core/models/st-navbar/st-navbar.model'
import { CORE_ROUTES } from '@st-core/st-core.routes'
import { StCoreService } from '@st-core/services/st-core.service'

@Injectable({
  providedIn: 'root'
})
export class StNavbarService {

  private _user$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _assets$: BehaviorSubject<StNavbarAssetsModel> = new BehaviorSubject<StNavbarAssetsModel>(INITIAL_NAVBAR_ASSETS)

  assets: StNavbarAssetsModel

  constructor(
    private _coreService: StCoreService
  ) {

    this.assets = {
      logo: {
        src: 'assets/suite-st/common/logo/logo.svg',
        alt: 'MediaLabs Logo'
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
            label: 'Features',
            route: CORE_ROUTES.FEATURE,
            name: 'features',
            children: []
          },
          {
            label: 'Control Units',
            route: CORE_ROUTES.EMPTY,
            name: '',
            children: [
              {
                label: 'Media Analyfx Box',
                route: CORE_ROUTES.BOX,
                name: 'box',
                children: []
              },
              {
                label: 'Media Analyfx Mono',
                route: CORE_ROUTES.MONO,
                name: 'mono',
                children: []
              }
            ]
          },
          {
            label: 'Pricing',
            route: CORE_ROUTES.PRICING,
            name: 'pricing',
            children: []
          },
          {
            label: 'Start Test',
            route: CORE_ROUTES.APPLICATION,
            name: 'app',
            children: []
          }
        ],
        authenticated: [],
        anonymous: []
      }
    }

    this._assets$ = new BehaviorSubject<any>(null)

  }

  fetchAssets(): void {
    this._assets$.next({ ...this.assets })
  }

  watchAssets$(): Observable<any> {
    return this._assets$.asObservable()
  }

  fetchUser(): void {
    this._user$.next(!!localStorage.getItem('user'))
  }

  watchUser$(): Observable<boolean> {
    return this._user$.asObservable()
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._coreService.navigate({ path: [..._.path], extras: {} })
  }
}
