import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

import { AppCarouselAssetsModel } from '@shared/models/components/carousel/app-carousel.model'
import { AppZigzagAssetsModel } from '@shared/models/components/zigzag/app-zigzag.model'
import { StCoreService } from '@st-core/services/st-core.service'
import { NavigationExtras } from '@angular/router'

type _StTempHomeAssets = { banner: AppCarouselAssetsModel, more: AppZigzagAssetsModel, insights: AppZigzagAssetsModel, [key: string]: any }

@Injectable({
  providedIn: 'root'
})
export class StHomeService {

  private _assets$: BehaviorSubject<_StTempHomeAssets> = new BehaviorSubject<_StTempHomeAssets>(null)

  private _assets: _StTempHomeAssets

  constructor(
    private _coreService: StCoreService
  ) {
    this._assets = {
      banner: {
        items: [
          {
            image: { src: 'assets/suite-st/common/banner/banner.png', alt: 'Banner' },
            text: {
              heading: 'Comprehensive Test Automation Suite',
              subheading: '',
              statements: [
                'Home Streaming Devices and Smart TV oS,',
                'Android TV, Apple TV (tvOS), Roku, Xbox One,',
                'Amazon FireTV, PlayStation 4 and web applications'
              ]
            },
            actions: [
              { link: '', text: 'REQUEST A DEMO' },
              { link: '', text: 'LEARN MORE' }
            ],
          }
        ]
      },
      more: {
        items: [{
          title: 'More Content, More Devices, More Profit',
          statements: [
            'Give your users a seamless experience by testing content using emulators or physical devices',
            'Use our analytics to tweak your test scripts to perfection! Improve customer satisfaction!'
          ],
          image: { src: 'assets/suite-st/home/more/more.png', alt: 'More Content, More Devices, More Profit' },
          actions: [{ link: '', text: 'LEARN MORE' }]
        }]
      },
      multi: {
        _: [
          {
            title: 'Multi-Platform',
            statements: [
              'Test applications and content',
              'Across multiple platforms, VOD, OTT, Linear',
              'and Web',
            ]
          },
          {
            title: 'Multi-Device',
            statements: [
              'Test across many devices – Home Streaming,',
              'Smart TV oS’s.Cable Settop boxes and',
              'handhelds'
            ]
          },
          {
            title: 'Multi-Monetization',
            statements: [
              'Test content and applications for compatibility',
              'with all platforms to increase your audience',
              'reach - Optimize & Monetize!'
            ]
          }
        ]
      },
      overview: {
        title: 'Media Analyfx Overview',
        text: [
          'Capable of automating nearly 60-70% of test cases; with up to 35% test cycle reduction and up to 40% cost savings in the testing process.',
          'Codeless testing – system has test scripts for all of the major Home Streaming Devices and Smart TVoS’s'
        ],
        buttons: [
          { link: '', text: 'REQUEST A DEMO' },
          { link: '', text: 'LEARN MORE' }
        ],
        _: [
          {
            title: 'TCO',
            image: { src: 'assets/suite-st/home/overview/cloud.svg', alt: 'TCO' },
            summary: [
              'Easy to deploy on clients cloud environment'
            ]
          },
          {
            title: 'Customizable',
            image: { src: 'assets/suite-st/home/overview/customize.svg', alt: 'Customizable' },
            summary: [
              'Easy to customize based on client specific needs'
            ]
          },
          {
            title: 'Content Privacy Issue',
            image: { src: 'assets/suite-st/home/overview/privacy.svg', alt: 'Content Privacy Issue' },
            summary: [
              'Proposed solution to work on content in client\'s environment'
            ]
          },
          {
            title: 'Monetization',
            image: { src: 'assets/suite-st/home/overview/monetize.svg', alt: 'Monetization' },
            summary: [
              'Monetize services as necessary'
            ]
          },
          {
            title: 'Optimized Cost',
            image: { src: 'assets/suite-st/home/overview/optimize.svg', alt: 'Optimized Cost' },
            summary: [
              'Help and save Computer and Storage cost by',
              'providing hybrid solution'
            ]
          },
          {
            title: 'Single Code Base',
            image: { src: 'assets/suite-st/home/overview/code.svg', alt: 'Single Code Base' },
            summary: [
              'Ownership of entire code base and use of Open Source',
              'framework for integration and deployment'
            ]
          }
        ]
      },
      advantages: {
        title: 'Media Analyfx Advantages',
        statements: [
          'Comprehensive Test Automation Suite to test content on home streaming devices, Smart TVs, OS / Apps(Device Ballistics)',
          'Provide ML based testing feedback to the testing suite to increase consumer experience and to avoid costs',
          'due to consumer content and application complaints'
        ],
      },
      shortInfo: {
        _: [
          {
            title: 'Automate On Real Devices',
            statements: [
              'Run automated end-to-end test scenarios',
              'on a Smart TV, Android TV, Apple TV, Roku,',
              'set - top box, Xbox One or PlayStation 4.',
              'Works with any infrared based device',
              'and in your browser.',
            ],
            button: { link: '', text: 'LEARN MORE' },
          },
          {
            title: 'Local and Remote',
            statements: [
              'Media Analyfx can utilize devices located',
              'anywhere in the world for interactive sessions',
              'or automated parallel test execution.'
            ],
            button: { link: '', text: 'LEARN MORE' },
          },
          {
            title: 'For Begineers and Pros',
            statements: [
              'Enjoy test automation with our state-of-the-art',
              'codeless visual test editor.Utilize JavaScript',
              'snippets for complex automation scenarios.'
            ],
            button: { link: '', text: 'LEARN MORE' },
          }
        ]
      },
      insights: {
        items: [
          {
            title: 'Do test automation the easy way',
            actions: [{ link: '', text: 'LEARN MORE' }],
            statements: [
              'Forget about selenium scripts, scattered Word files, email reports',
              'and the never ending re - testing.',
              '  ',
              'You will love our visual test editor with easy to use tooling, version',
              'history, result history and ever ready for instant test execution.'
            ],
            image: { src: 'assets/suite-st/common/random/test-editor-screen-sm.png', alt: '' }
          },
          {
            title: 'Device fragmentation is no longer an issue',
            actions: [{ link: '', text: 'LEARN MORE' }],
            statements: [
              'Device fragmentation adds a great deal to the complexity of the testing',
              'process demanding more and more QA resources.',
              'Manual testing does not scale and large QA teams cost a lot of money.',
              'Test automation is the answer.And Media Analyfx makes test automation easy.',
            ],
            image: { src: 'assets/suite-st/common/random/test-editor-screen-sm.png', alt: '' }
          }]
      },
      features: {
        _: [
          {
            title: 'Robust Test Cases',
            statements: [
              'Media Analyfx architecture makes your',
              'automation scenarios resilient against',
              'application changes which means massive',
              'reduction of future maintenance efforts.'
            ],
            button: { link: '', text: 'LEARN MORE' },
          },
          {
            title: 'Parallel Test Execution',
            statements: [
              'Media Analyfx can run test automation scenarios',
              'on 100 + devices, emulators or browsers in parallel.',
              'Get test results in a fraction of time from both',
              'local and remote devices'
            ],
            button: { link: '', text: 'LEARN MORE' },
          },
          {
            title: 'Rich Testing Tool-Kit',
            statements: [
              'Effortlessly make assertions on view elements,',
              'video playback, cookies, network activity',
              'without writing a single line of code, or use',
              'JavaScript if you feel like it.'
            ],
            button: { link: '', text: 'LEARN MORE' },
          },
          {
            title: 'Super Easy Setup',
            statements: [
              'Punch in your app‘s URL or upload your app to',
              'WinNow.',
              'And then...oh, hold on! That‘s all there is to it!',
              'You are ready to start testing!'
            ],
            button: { link: '', text: 'LEARN MORE' },
          },
          {
            title: 'Crossplatform Testing',
            statements: [
              'Write your test once, run on any platform. We',
              'have got you covered on HbbTV, Freeview Play,',
              'Samsung Tizen, LG webOS, Xbox One, Android',
              'TV, Apple TV(tvOS), Roku, PlayStation 4 and',
              'many other platforms.'
            ],
            button: { link: '', text: 'LEARN MORE' },
          },
          {
            title: 'Meaningful Results',
            statements: [
              'Compare by device or by test time, view',
              'comprehensive reports and execution history.',
              'Get reports on network activity, console logs',
              'and more.'
            ],
            button: { link: '', text: 'LEARN MORE' },
          }
        ]
      },
      trustedBy: {
        title: 'Trusted By',
        images: [
          { src: 'assets/suite-st/home/trustedBy/01.png', alt: 'Trustee' },
          { src: 'assets/suite-st/home/trustedBy/02.png', alt: 'Trustee' },
          { src: 'assets/suite-st/home/trustedBy/03.png', alt: 'Trustee' },
          { src: 'assets/suite-st/home/trustedBy/04.png', alt: 'Trustee' },
          { src: 'assets/suite-st/home/trustedBy/05.png', alt: 'Trustee' },
          { src: 'assets/suite-st/home/trustedBy/06.png', alt: 'Trustee' },
          { src: 'assets/suite-st/home/trustedBy/07.png', alt: 'Trustee' },
          { src: 'assets/suite-st/home/trustedBy/08.png', alt: 'Trustee' },
          { src: 'assets/suite-st/home/trustedBy/09.png', alt: 'Trustee' },
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

  watchAssets$(): Observable<_StTempHomeAssets> {
    return this._assets$.asObservable()
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._coreService.navigate({ path: [..._.path], extras: {} })
  }
}
