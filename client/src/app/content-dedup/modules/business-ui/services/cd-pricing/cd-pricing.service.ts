import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { CdPricingPageAssetsModel, INITIAL_PRICING_PAGE_ASSETS_MODEL } from '../../models/cd-pricing.model'

@Injectable({
  providedIn: 'root'
})
export class CdPricingService {

  private _assets$: BehaviorSubject<CdPricingPageAssetsModel> = new BehaviorSubject<CdPricingPageAssetsModel>(INITIAL_PRICING_PAGE_ASSETS_MODEL)

  private _assets: CdPricingPageAssetsModel

  constructor() {
    this._assets = {
      banner: {
        items: [
          {
            image: { src: 'assets/dedup/business-ui/home/banner/banner-1.jpg', alt: 'Banner Image' },
            text: {
              heading: '', subheading: '', statements: []
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
      module: {
        _: [
          {
            title: 'Content-Aware Deduplication Plans',
            plans: [
              {
                name: 'Bronze',
                offerings: [],
                price: "383",
                overview: '',
                actions: [{ text: 'Buy Now', link: '' }]
              },
              {
                name: 'Silver',
                offerings: [],
                price: "738",
                overview: '',
                actions: [{ text: 'Buy Now', link: '' }]
              },
              {
                name: 'Gold',
                offerings: [
                ],
                price: "1,124",
                overview: '',
                actions: [{ text: 'Buy Now', link: '' }]
              }
            ]
          }
        ]
      },
      closure: {
        title: 'Stable test automation scenarios that scale!',
        actions: [
          { text: 'REQUEST A DEMO', link: '' }
        ],
        description: 'Start doing test automation the easy way'
      }
    }
  }

  fetchAssets(): void {
    this._assets$.next(this._assets)
  }

  watchAssets$(): Observable<CdPricingPageAssetsModel> {
    return this._assets$.asObservable()
  }
}
