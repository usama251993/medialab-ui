import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { BehaviorSubject, Observable } from 'rxjs'

import { StPricingPageAssetsModel, INITIAL_PRICING_ASSETS_MODEL } from '@st-core/models/st-pricing/st-pricing-assets.model'

import { StCoreService } from '@st-core/services/st-core.service'

@Injectable({
  providedIn: 'root'
})
export class StPricingService {

  private _pageAssets$: BehaviorSubject<StPricingPageAssetsModel> = new BehaviorSubject<StPricingPageAssetsModel>(INITIAL_PRICING_ASSETS_MODEL)

  private _pageAssets: StPricingPageAssetsModel

  constructor(
    private _coreService: StCoreService
  ) {
    this._pageAssets = {
      banner: {
        image: {
          src: 'assets/suite-st/common/banner/banner.png',
          alt: 'Pricing Banner'
        },
        title: 'Pricing Guide',
        statements: [
          'Start using Media Analyfx for free and fall in love',
          'Upgrade to one of the paid plans to get more'
        ],
        actions: [
          { text: 'REQUEST A DEMO', link: '' },
          { text: 'GET STARTED', link: '' }
        ]
      },
      module: {
        _: [
          {
            title: 'Without Testers',
            plans: [
              {
                name: 'Media AnalyFx - Bronze',
                offerings: [
                  'A three-user team with unlimited apps and three concurrent executions',
                  '5 versions per app',
                  '1000 testing minutes',
                  '25 GB of screenshot storage',
                  'Unlimited devices',
                  '20 minutes limit for single test execution',
                  'Test results stored for 90 days'
                ],
                price: "383",
                overview: 'Check out Media Analyfx for free. Use it as long as you like. No strings attached.',
                action: { text: 'Buy Now', link: '' }
              },
              {
                name: 'Media AnalyFx - Silver',
                offerings: [
                  'A four-user team with unlimited apps and five concurrent executions',
                  '10 versions per app',
                  '2200 testing minutes',
                  '50 GB of screenshot storage',
                  'Unlimited devices',
                  '30 minutes limit for single test execution',
                  'Versions sharing',
                  'Results stored forever'
                ],
                price: "738",
                overview: 'Check out Media Analyfx for free. Use it as long as you like. No strings attached.',
                action: { text: 'Buy Now', link: '' }
              },
              {
                name: 'Media AnalyFx - Gold',
                offerings: [
                  'A five-user team with unlimited apps and ten concurrent executions',
                  '16 versions per app',
                  '5000 testing minutes',
                  '100 GB of screenshot storage',
                  'Unlimited devices',
                  '60 minutes limit for single test execution',
                  'Versions sharing',
                  'Results stored forever'
                ],
                price: "1,124",
                overview: 'Check out Media Analyfx for free. Use it as long as you like. No strings attached.',
                action: { text: 'Buy Now', link: '' }
              }
            ],
            actions: [
              { text: 'GET STARTED', link: '' }
            ]
          },
          {
            title: 'Use Our Testers',
            plans: [
              {
                name: 'Media AnalyFx - Bronze',
                offerings: [
                  '5 Testers',
                  '5 concurrent tests',
                  '5 versions per app',
                  '1000 testing minutes',
                  '25 GB of screenshot storage',
                  'Unlimited devices',
                  '20 minutes limit for single test execution',
                  'Results stored for 90 days'
                ],
                price: "160,383",
                overview: 'Check out Media Analyfx for free. Use it as long as you like. No strings attached.',
                action: { text: 'Buy Now', link: '' }
              },
              {
                name: 'Media AnalyFx - Silver',
                offerings: [
                  '10 Testers',
                  '10 concurrent tests',
                  '10 versions per app',
                  '2200 testing minutes',
                  '50 GB of screenshot storage',
                  'Unlimited devices',
                  '30 minutes limit for single test execution',
                  'Versions sharing',
                  'Results stored forever',
                ],
                price: "640,738",
                overview: 'Check out Media Analyfx for free. Use it as long as you like. No strings attached.',
                action: { text: 'Buy Now', link: '' }
              },
              {
                name: 'Media AnalyFx - Gold',
                offerings: [
                  '15 Testers',
                  '15 concurrent tests',
                  '15 versions per app',
                  '4500 testing minutes',
                  '100 GB of screenshot storage',
                  'Unlimited devices',
                  '60 minutes limit for single test execution',
                  'Versions sharing',
                  'Results stored forever'
                ],
                price: "1,441,124",
                overview: 'Check out Media Analyfx for free. Use it as long as you like. No strings attached.',
                action: { text: 'Buy Now', link: '' }
              }
            ],
            actions: [
              { text: 'GET STARTED', link: '' }
            ]
          }
        ]
      },
      feature: {
        overview: {
          title: 'All plans include additional features',
          offerings: [
            'Test apps on all Smart TV platforms, like HbbTV, Freview Play, Tizen, webOS, My Home Screen 2.0, Fire TV, tvOS and many others',
            'Test apps on Android TV, Apple TV, Roku devices, Xbox One and PlayStation 4 consoles',
            'Parallel execution on TVs, set-top boxes and consoles',
            'Support for physical devices and emulators',
            'First class support for remote devices',
            'Test live apps',
            'Manual and automated testing',
            'Visual test authoring',
            'Team collaboration tools',
            'Network activity and console output analysis on supported platforms'
          ]
        },
        _: [
          {
            title: 'Testing Minutes',
            statements: [
              'Testing minutes are counted when you are executing tests via automated or interactive mode',
              'Testing minutes are also counted when you are connected to a shared device.'
            ],
            image: {
              src: '',
              alt: ''
            }
          },
          {
            title: 'Concurrent Executions',
            statements: [
              'Testing minutes are counted when you are executing tests via automated or interactive mode',
              'Testing minutes are also counted when you are connected to a shared device.'
            ],
            image: {
              src: '',
              alt: ''
            }
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

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._coreService.navigate({ path: [..._.path], extras: {} })
  }

  fetchPricingAssets(): void {
    this._pageAssets$.next(this._pageAssets)
  }

  watchPricingAssets$(): Observable<StPricingPageAssetsModel> {
    return this._pageAssets$.asObservable()
  }
}
