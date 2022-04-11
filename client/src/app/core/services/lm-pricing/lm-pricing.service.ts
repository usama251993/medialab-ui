import { Injectable } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { Dictionary } from '@ngrx/entity'

import { State } from '@lm-core/state'
import * as fromActions from '@lm-core/state/actions/lm-pricing.action'
import { selectAssets } from '@lm-core/state/selectors/lm-pricing.selector'
import { ENTITY_ID } from '@lm-core/state/types'

import { LmPricingModel } from '@lm-core/models/lm-pricing.model'
import { LmAuthService } from '@lm-core/services/lm-auth/lm-auth.service'

@Injectable({
  providedIn: 'root'
})
export class LmPricingService {

  pricingModel: LmPricingModel

  constructor(
    private _store$: Store<State>,
    private authService: LmAuthService
  ) {
    this.pricingModel = {
      id: '',
      assets: {
        plans: [
          {
            title: 'Bronze',
            subscription: {
              charge: 0,
              currency: '$',
              frequency: 'monthly'
            },
            nTesters: 5,
            nConcurrentTests: 5,
            versioning: {
              nCount: 5,
              bIsShareable: false
            },
            nTestTime: 1000,
            nStorageSpace: 25,
            nDevices: Infinity,
            nTestTimeLimit: 20,
            nStorageRetention: 90
          },
          {
            title: 'Silver',
            subscription: {
              charge: 0,
              currency: '$',
              frequency: 'monthly'
            },
            nTesters: 10,
            nConcurrentTests: 10,
            versioning: {
              nCount: 10,
              bIsShareable: true
            },
            nTestTime: 2200,
            nStorageSpace: 50,
            nDevices: Infinity,
            nTestTimeLimit: 30,
            nStorageRetention: Infinity
          },
          {
            title: 'Gold',
            subscription: {
              charge: 0,
              currency: '$',
              frequency: 'monthly'
            },
            nTesters: 15,
            nConcurrentTests: 15,
            versioning: {
              nCount: 15,
              bIsShareable: true
            },
            nTestTime: 5000,
            nStorageSpace: 100,
            nDevices: Infinity,
            nTestTimeLimit: 60,
            nStorageRetention: Infinity
          }
        ]
      },
      error: null
    }
  }

  getAssetsDict(): Observable<Dictionary<LmPricingModel>> {
    this._store$.dispatch(new fromActions.LmLoadPricingAssets({ id: ENTITY_ID.ASSETS }))
    return this._store$.pipe(select(selectAssets))
  }

  getAssetsEntityID(): Observable<string> {
    return of(ENTITY_ID.ASSETS)
  }

  // getUserContextDict(): Observable<Dictionary<LmAuthResponseModel>> {
  //   return this._store$.pipe(select(selectUser))
  // }

  // getUserEntityID(): Observable<string> {
  //   return this.authService.getLoginEntityID()
  // }

  fetchAssets(id: string): Observable<LmPricingModel> {
    return of({ ...this.pricingModel, id })
  }

}
