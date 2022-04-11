import { Injectable } from '@angular/core'

import { Observable, BehaviorSubject } from 'rxjs'

import { CdHomeAssetsModel, INITIAL_HOME_ASSETS_MODEL } from '@cd-business/models/cd-home.model'
import { NavigationExtras } from '@angular/router'
import { CdBusinessCoreService } from '@cd-business/services/cd-business-core.service'

@Injectable({
  providedIn: 'root'
})
export class CdHomeService {

  private _assets$: BehaviorSubject<CdHomeAssetsModel> = new BehaviorSubject<CdHomeAssetsModel>(INITIAL_HOME_ASSETS_MODEL)

  private _assets: CdHomeAssetsModel

  constructor(
    private _businessCoreService: CdBusinessCoreService
  ) {
    this._assets = {
      banner: {
        items: [
          {
            image: { src: 'assets/dedup/business-ui/home/banner/banner-1.jpg', alt: 'Banner Image' },
            text: {
              heading: 'Content Aware De-duplication', subheading: 'Content Storage Cost Optimization & Intelligent Content Storage Tier Routing', statements: []
            },
            actions: [
              { text: 'LEARN MORE', link: '' },
              { text: 'REQUEST A DEMO', link: '' }
            ]
          },
          {
            image: { src: 'assets/dedup/business-ui/home/banner/banner-2.jpg', alt: 'Banner Image' },
            text: {
              heading: '', subheading: '', statements: []
            },
            actions: [
              { text: 'LEARN MORE', link: '' },
              { text: 'REQUEST A DEMO', link: '' }
            ]
          },
          {
            image: { src: 'assets/dedup/business-ui/home/banner/banner-3.jpg', alt: 'Banner Image' },
            text: {
              heading: '', subheading: '', statements: []
            },
            actions: [
              { text: 'LEARN MORE', link: '' },
              { text: 'REQUEST A DEMO', link: '' }
            ]
          }
        ]
      },
      closure: {
        title: 'Content Storage Cost Optimization & Intelligent Content Storage Tier Routing',
        actions: [
          { text: 'REQUEST A DEMO', link: '' }
        ],
        description: ''
      }
    }
  }

  fetchAssets(): void {
    this._assets$.next(this._assets)
  }

  watchAssets$(): Observable<CdHomeAssetsModel> {
    return this._assets$.asObservable()
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._businessCoreService.navigate({ path: [..._.path], extras: {} })
  }
}
