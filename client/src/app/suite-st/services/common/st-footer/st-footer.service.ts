import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { StCoreService } from '@st-core/services/st-core.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StFooterService {

  footerAssets: any

  constructor(
    private _coreService: StCoreService
  ) {
    this.footerAssets = {
      socials: [
        { icon: 'facebook', label: 'Facebook', link: '' }
      ],
      copyright: {
        from: '2020 Media Lab',
        statement: 'All Rights Reserved.'
      },
      navigations: [
        { label: 'Medialab', route: 'medialab' },
        { label: 'Features', route: 'feature' },
        { label: 'AnalyFX Box', route: 'box' },
        { label: 'AnalyFX Mono', route: 'mono' },
        { label: 'Pricing', route: 'pricing' },
        { label: 'Resources', route: '' }
      ],
      terms: [
        { label: 'Terms of Usage', route: '' },
        { label: 'Privacy Policy', route: '' },
        { label: 'Cookie Policy', route: '' },
      ]
    }
  }

  fetchAssets(): Observable<any> {
    return of({ ...this.footerAssets })
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._coreService.navigate({ path: [..._.path], extras: {} })
  }
}
