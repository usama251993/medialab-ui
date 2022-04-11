import { Injectable } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { Dictionary } from '@ngrx/entity'
import { MatSidenav } from '@angular/material/sidenav'

import { environment } from 'src/environments/environment'
import { LmRouterService } from '@lm-core/services/lm-router/lm-router.service'

import { State } from '@lm-core/state'
import * as fromActions from '@lm-core/state/actions/lm-navbar.action'
import { selectAssets } from '@lm-core/state/selectors/lm-navbar.selector'
import { ENTITY_ID } from '@lm-core/state/types'

import { LmNavbarAssetsModel } from '@lm-core/models/lm-navbar.model'

import { LmAuthService } from '../lm-auth/lm-auth.service'
import * as fromAuthSelector from '@lm-core/state/selectors/lm-auth.selector'
import { LmAuthResponseModel, LmUserModel } from '@shared/models/lm-auth.model'

@Injectable({
  providedIn: 'root'
})
export class LmNavbarService {

  assetsModel: LmNavbarAssetsModel

  constructor(
    private _store$: Store<State>,
    private authService: LmAuthService,
    private routerService: LmRouterService
  ) {

    this.assetsModel = {
      id: '',
      assets: {
        logo: {
          src: '../../../../../assets/images/logo/medialab-transparent-sm.png',
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
                  route: '',
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
                  route: '',
                  name: 'deduplication',
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
                  label: 'Advanced Advertising Rights Management',
                  route: '',
                  name: '',
                  children: []
                }, {
                  label: 'Realtime Practice Engine',
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
              route: 'login',
              name: 'login',
              children: []
            }, {
              label: 'Sign Up',
              route: 'signup',
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
                  route: '',
                  name: '',
                  children: []
                }, {
                  label: 'Logout',
                  route: 'logout',
                  name: '',
                  children: []
                }
              ]
            }
          ]
        }
      }, error: null
    }

    if (!environment.production) {
      this.assetsModel.assets.items.common
        .find(_ => _.name === 'services').children
        .push({
          label: 'Test APIs',
          route: 'test',
          name: '',
          children: []
        })
    }

  }

  getNavbarAssetsDict(): Observable<Dictionary<LmNavbarAssetsModel>> {
    this._store$.dispatch(new fromActions.LmLoadNavbarAssets({ id: ENTITY_ID.ASSETS }))
    return this._store$.pipe(select(selectAssets))
  }

  getNavEntityID(): Observable<string> {
    return of(ENTITY_ID.ASSETS)
  }

  getUserContextDict(): Observable<Dictionary<LmAuthResponseModel>> {
    return this._store$.pipe(select(fromAuthSelector.selectUserDict))
  }

  getUserEntityIDs(): Observable<string[]> {
    return <Observable<string[]>>this._store$.pipe(select(fromAuthSelector.selectUserID))
  }

  fetchAssets(id: string): Observable<LmNavbarAssetsModel> {
    return of({ ...this.assetsModel, id })
  }

  navigate(_: { path: string }): void {
    this.routerService.triggerNavigate(_)
  }

  logout(_: LmUserModel) {
    this.authService.logout(_)
  }

  triggerSidenavToggle(_: MatSidenav): void {
    this._store$.dispatch(new fromActions.LmToggleSidenav(_))
  }

}
