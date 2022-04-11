import { Injectable } from '@angular/core'

import { Observable, BehaviorSubject } from 'rxjs'

import { IaHomeAssetsModel, INITIAL_HOME_ASSETS_MODEL } from '@ia-business/models/ia-home.model'
import { NavigationExtras } from '@angular/router'
import { IaBusinessCoreService } from '@ia-business/services/ia-business-core.service'

@Injectable({
  providedIn: 'root'
})
export class IaHomeService {

  private _assets$: BehaviorSubject<IaHomeAssetsModel> = new BehaviorSubject<IaHomeAssetsModel>(INITIAL_HOME_ASSETS_MODEL)

  private _assets: IaHomeAssetsModel

  constructor(
    private _businessCoreService: IaBusinessCoreService
  ) {
    this._assets = {
      banner: {
        items: [
          {
            image: { src: 'assets/image-analytics/business-ui/home/banner/banner-3.jpg', alt: 'Banner Image' },
            text: {
              heading: 'Image Analytics', subheading: '', statements: []
            },
            actions: [
              { text: 'LEARN MORE', link: '' },
              { text: 'REQUEST A DEMO', link: '' }
            ]
          },
          {
            image: { src: 'assets/image-analytics/business-ui/home/banner/banner-2.jpg', alt: 'Banner Image' },
            text: {
              heading: 'Logo Detection', subheading: '', statements: []
            },
            actions: [
              { text: 'LEARN MORE', link: '' },
              { text: 'REQUEST A DEMO', link: '' }
            ]
          },
          {
            image: { src: 'assets/image-analytics/business-ui/home/banner/banner-1.jpg', alt: 'Banner Image' },
            text: {
              heading: 'Brand Identification', subheading: '', statements: []
            },
            actions: [
              { text: 'LEARN MORE', link: '' },
              { text: 'REQUEST A DEMO', link: '' }
            ]
          }
        ]
      },
      closure: {
        title: 'Image Analytics to identify brands and products from photographs',
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

  watchAssets$(): Observable<IaHomeAssetsModel> {
    return this._assets$.asObservable()
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._businessCoreService.navigate({ path: [..._.path], extras: {} })
  }
}
