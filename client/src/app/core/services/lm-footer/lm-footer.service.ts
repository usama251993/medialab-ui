import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { Dictionary } from '@ngrx/entity'

import { State } from '@lm-core/state'
import * as fromActions from '@lm-core/state/actions/lm-footer.action'
import { selectAssets } from '@lm-core/state/selectors/lm-footer.selector'
import { ENTITY_ID } from '@lm-core/state/types'

import { LmFooterAssetsModel } from '@lm-core/models/lm-footer.model'

@Injectable({
  providedIn: 'root'
})
export class LmFooterService {

  footerAssets: LmFooterAssetsModel

  constructor(
    private _store$: Store<State>
  ) {
    this.footerAssets = {
      id: '',
      assets: {
        socials: [
          { icon: 'facebook', label: 'Facebook', link: '' },
          { icon: 'domain', label: 'Twitter', link: '' },
          { icon: 'whatshot', label: 'LinkedIn', link: '' }
        ],
        copyright: {
          from: '2020',
          statement: 'All Rights Reserved.'
        },
        navigations: [
          { label: 'About Us', route: 'about' },
          { label: 'Features', route: 'features' },
          { label: 'Pricing', route: 'pricing' },
          { label: 'Docs', route: 'docs' }
        ],
        terms: [
          { label: 'Terms and Conditions', route: '' },
          { label: 'Privacy Policy', route: '' },
          { label: 'Third Party Integration', route: '' },
        ]
      },
      error: null
    }
  }

  getAssetsDict(): Observable<Dictionary<LmFooterAssetsModel>> {
    this._store$.dispatch(new fromActions.LmLoadFooterAssets({ id: ENTITY_ID.ASSETS }))
    return this._store$.select(selectAssets)
  }

  getEntityID(): Observable<string> {
    return of(ENTITY_ID.ASSETS)
  }

  fetchAssets(id: string): Observable<LmFooterAssetsModel> {
    return of({ ...this.footerAssets, id })
  }
}
