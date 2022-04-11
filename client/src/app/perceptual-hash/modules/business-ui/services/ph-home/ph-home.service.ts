import { Injectable } from '@angular/core'

import { Observable, BehaviorSubject } from 'rxjs'

import { PhHomeAssetsModel, INITIAL_HOME_ASSETS_MODEL } from '@ph-core/modules/business-ui/models/ph-home.model'
import { NavigationExtras } from '@angular/router'
import { PhBusinessCoreService } from '@ph-core/modules/business-ui/services/ph-business-core.service'

@Injectable({
  providedIn: 'root'
})
export class PhHomeService {

  private _assets$: BehaviorSubject<PhHomeAssetsModel> = new BehaviorSubject<PhHomeAssetsModel>(INITIAL_HOME_ASSETS_MODEL)

  private _assets: PhHomeAssetsModel

  constructor(
    private _businessCoreService: PhBusinessCoreService
  ) {
    this._assets = {
      banner: {
        items: [
          {
            image: { src: 'assets/dedup/business-ui/home/banner/banner-1.jpg', alt: 'Banner Image' },
            text: {
              heading: 'Perceptual Hashing', subheading: 'Video Content Authentication via Media Fingerprinting', statements: []
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
        title: 'Video Content Authentication via Media Fingerprinting',
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

  watchAssets$(): Observable<PhHomeAssetsModel> {
    return this._assets$.asObservable()
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._businessCoreService.navigate({ path: [..._.path], extras: {} })
  }
}
