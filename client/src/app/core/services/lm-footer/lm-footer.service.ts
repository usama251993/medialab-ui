import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { LmFooterAssetsModel } from '@lm-core/models/assets/lm-footer.model'
import { NavigationExtras } from '@angular/router'
import { LmCoreService } from '../lm-core.service'

@Injectable({
  providedIn: 'root'
})
export class LmFooterService {

  footerAssets: LmFooterAssetsModel

  constructor(
    private _coreService: LmCoreService
  ) {
    this.footerAssets = {
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
    }
  }

  fetchAssets(): Observable<LmFooterAssetsModel> {
    return of({ ...this.footerAssets })
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._coreService.navigate({ path: [..._.path], extras: {} })
  }
}
