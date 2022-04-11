import { Injectable, isDevMode } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'

import { APP_ROUTES } from 'src/app/app.routes'

import { AppRouterService } from '@shared/services/app-router/app-router.service'
import { AppSnackbarModel } from '@shared/models/app-snackbar.model'

import { LmNavbarAssetsModel } from '@lm-core/models/assets/lm-navbar.model'
import { LmUserModel } from '@lm-core/models/common/auth/lm-auth-user.model'
import { CORE_ROUTES } from '@lm-core/lm-core.routes'

import { LmCoreService } from '../lm-core.service'

@Injectable({
  providedIn: 'root'
})
export class LmNavbarService {

  private _user$: BehaviorSubject<LmUserModel>
  private _assets$: BehaviorSubject<LmNavbarAssetsModel>
  assetsModel: LmNavbarAssetsModel

  constructor(
    private _routerService: AppRouterService,
    private _coreService: LmCoreService
  ) {

    this.assetsModel = {
      logo: {
        src: 'assets/images/logo/medialab/medialab-blue.svg',
        alt: 'MediaLabs Logo'
      },
      items: {
        common: [
          {
            label: 'Services',
            route: '',
            name: 'services',
            children: [
              {
                label: 'Automation Testing Suite',
                route: APP_ROUTES.TESTSUITE,
                name: 'automationTestingSuite',
                children: []
              }
            ]
          }, {
            label: 'Solutions and PoC\'s',
            route: '',
            name: 'solutions',
            children: [
              {
                label: 'Content-aware Deduplication',
                route: APP_ROUTES.DEDUPLICATION,
                name: 'deduplication',
                children: [],
              },
              {
                label: 'Perceptual Hashing',
                route: APP_ROUTES.PERCEPTUAL_HASH,
                name: 'phash',
                children: [],
              },
              {
                label: 'Image Analytics',
                route: APP_ROUTES.IMAGE_ANALYTCS,
                name: 'image',
                children: [],
              }
            ]
          }, {
            label: 'Insights',
            route: '',
            name: 'insights',
            children: [
              {
                label: 'White Papers',
                route: '',
                name: '',
                children: []
              }, {
                label: 'News Letter',
                route: '',
                name: '',
                children: []
              }, {
                label: 'Our Clients',
                route: '',
                name: '',
                children: []
              }, {
                label: 'Use Cases',
                route: '',
                name: '',
                children: []
              }
            ]
          }, {
            label: 'Platforms',
            route: '',
            name: 'platforms',
            children: [

              {
                label: 'Cognitive++',
                route: '',
                name: '',
                children: []
              }, {
                label: 'Advanced Advertising',
                route: '',
                name: '',
                children: []
              }, {
                label: 'Rights Management',
                route: '',
                name: '',
                children: []
              }, {
                label: 'Realtime Pricing Engine',
                route: '',
                name: '',
                children: []
              }, {
                label: 'SRT Management',
                route: '',
                name: '',
                children: []
              }
            ]
          }, {
            label: 'About',
            route: '',
            name: 'about',
            children: [
              {
                label: 'Mission Statement',
                route: '',
                name: '',
                children: []
              }, {
                label: 'Feedback',
                route: CORE_ROUTES.FEEDBACK,
                name: '',
                children: []
              }, {
                label: 'About LTI',
                route: '',
                name: '',
                children: []
              }
            ]
          }
        ],
        anonymous: [
          {
            label: 'Login',
            route: CORE_ROUTES.LOGIN,
            name: 'login',
            children: []
          }, {
            label: 'Sign Up',
            route: CORE_ROUTES.SIGNUP,
            name: 'signup',
            children: []
          }
        ],
        authenticated: [
          {
            label: 'Profile',
            route: '',
            name: 'profile',
            children: [
              {
                label: 'Settings',
                route: CORE_ROUTES.SETTINGS,
                name: '',
                children: []
              }, {
                label: 'Logout',
                route: CORE_ROUTES.LOGOUT,
                name: '',
                children: []
              }
            ]
          }
        ]
      }
    }

    if (isDevMode()) {
      this.assetsModel.items.common
        .find(_ => _.name === 'services').children
        .push({
          label: 'Test APIs',
          route: 'test',
          name: '',
          children: []
        })
    }

    this._user$ = new BehaviorSubject<LmUserModel>(null)
    this._assets$ = new BehaviorSubject<LmNavbarAssetsModel>(null)

    this._coreService.watchUser$()
      .subscribe(_ => { this._user$.next(_) })
  }

  fetchAssets(): void {
    this._assets$.next({ ...this.assetsModel })
  }

  watchAssets(): Observable<LmNavbarAssetsModel> {
    return this._assets$.asObservable()
  }

  fetchUser() {
    this._coreService.getUser()
  }

  watchUser(): Observable<LmUserModel> {
    return this._user$.asObservable()
  }

  navigate(_: { path: string[] }): void {
    this._routerService.navigate({ path: [..._.path], extras: {} })
  }

  logout(): void {
    this._coreService.logout()
  }

  showSnackbar(_: AppSnackbarModel) {
    this._coreService.showSnackbar(_)
  }
}

