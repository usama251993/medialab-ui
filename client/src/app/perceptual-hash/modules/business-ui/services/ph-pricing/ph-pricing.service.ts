import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { PhPricingPageAssetsModel, INITIAL_PRICING_PAGE_ASSETS_MODEL } from '../../models/ph-pricing.model'

@Injectable({
  providedIn: 'root'
})
export class PhPricingService {

  private _assets$: BehaviorSubject<PhPricingPageAssetsModel> = new BehaviorSubject<PhPricingPageAssetsModel>(INITIAL_PRICING_PAGE_ASSETS_MODEL)

  private _assets: PhPricingPageAssetsModel

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
            title: 'Perceptual Hashing Plans',
            plans: [
              {
                name: 'Bronze',
                offerings: [],
                price: "383",
                overview: '',
                actions: [{
                  text: 'Buy Now',
                  link: null,
                  appearance: 'raised',
                  color: 'primary',
                  type: 'button',
                  disabled: false
                }]
              },
              {
                name: 'Silver',
                offerings: [],
                price: "738",
                overview: '',
                actions: [{
                  text: 'Buy Now',
                  link: null,
                  appearance: 'raised',
                  color: 'primary',
                  type: 'button',
                  disabled: false
                }]
              },
              {
                name: 'Gold',
                offerings: [
                ],
                price: "1,124",
                overview: '',
                actions: [{
                  text: 'Buy Now',
                  link: null,
                  appearance: 'raised',
                  color: 'primary',
                  type: 'button',
                  disabled: false
                }]
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

  watchAssets$(): Observable<PhPricingPageAssetsModel> {
    return this._assets$.asObservable()
  }
}
