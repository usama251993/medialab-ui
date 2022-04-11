import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'
import { StCoreService } from '@st-core/services/st-core.service'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StFeatureService {

  private _assets$: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  private _assets: any

  constructor(
    private _coreService: StCoreService
  ) {
    this._assets = {
      banner: {
        items: [
          {
            image: { src: 'assets/suite-st/common/banner/banner.png', alt: 'Banner' },
            text: {
              heading: 'Test Automation',
              subheading: '',
              statements: [
                'For Smart TV, Android TV, Apple TV (tvOS), Roku, Xbox One,',
                'PlayStation 4, regular websites and web apps'
              ]
            },
            acions: [
              { link: '', text: 'REQUEST A DEMO' },
              { link: '', text: 'LEARN MORE' }
            ]
          }
        ]
      },
      features: {
        items: [
          {
            title: 'Remote control app for device management',
            statements: [
              'Our mobile app allows you to control and manage devices right from',
              'the palm of your hand.',
              'Walk around your device lab and have your devices under control.',
              'Easily connect to devices and control them without searching for the',
              'right controller or batteries.',
              'Have all the controllers you need in one place...right on your smartphone!'
            ],
            image: { src: 'assets/suite-st/common/random/Media Analyfx-app-screen.jpg', alt: 'Remote' },
            actions: []
          },
          {
            title: 'The Analyfx Box for your TVs and set‑top boxes',
            statements: [
              'Our device control unit - the Media Analyfx knows how to operate',
              'TVs, set - top boxes and other infrared - based devices.In essence it is',
              'the ultimate web - based programmable controller that works with regular retail devices.',
              'After a short installation process you will be able to control your',
              'devices interactively and run automation sequences and execute',
              'end - to - end test scenarios - all from your Media Analyfx account.',
              'Analyfx Box 8 & 40 for multi - device testing!'
            ],
            image: { src: 'assets/suite-st/common/random/AnalyfxBox8&40.jpg', alt: 'Box' },
            actions: [{ link: '', text: 'LEARN MORE' }]
          },
          {
            title: 'The Analyfx Lite for your browsers, Android TV, Apple TV, Roku, Xbox One and PlayStation 4',
            statements: [
              'Analyfx Lite is the younger brother of the Analyfx Box. It is a desktop',
              'application that can operate your locally installed browsers, emulators',
              'as well as Android TV, Apple TV, Roku devices, the Xbox One and',
              'PlayStation 4 consoles.',
              'Since Media Analyfx is completely cross - platform, writing test',
              'scenarios in the browser and letting it run on a physical device later is',
              'an ordinary business.',
              'Available for Windows, Mac OS and Linux.',
              'Download for free from your Media Analyfx account.'
            ],
            image: { src: 'assets/suite-st/common/random/Analyfx Lite.png', alt: 'Browser' },
            actions: [{ link: '', text: 'LEARN MORE' }]
          },
          {
            title: 'The Test Editor for your productivity',
            statements: [
              'Media Analyfx features a one of a kind test editor which puts the ease',
              'of use above everything else. Record a basic test by simply using the',
              'app.Add various assertions using the rich visual tools to test every',
              'aspect of your app.All in plain English, absolutely no programming',
              'required!',
              '(unless you are up for it, because you can also use JavaScript if you',
              'prefer!)',
              'And if you ever decide to port your app to a new platform, your tests',
              'will run there without any modification.'
            ],
            image: { src: 'assets/suite-st/common/random/test-editor-screen-sm.png', alt: 'Editor' },
            actions: [{ link: '', text: 'LEARN MORE' }]
          },
          {
            title: 'The Element Repository for robust test scenarios',
            statements: [
              'You know how it is, you write some automation scenarios, get all',
              'excited and then suddenly a very slight change made to the app',
              'makes all your tests invalid in no time.',
              'Not so in Media Analyfx.Our Element Repository will make sure',
              'that the scenarios you write will survive app changes with only',
              'little effort.',
              'Element repository abstracts you from how your application looks',
              'like and from the platform it runs on.It does the heavy lifting in the',
              'background and lets you focus on your automation scenarios',
              'instead.'
            ],
            image: { src: 'assets/suite-st/common/random/element-repository-screen-sm.png', alt: 'Repository' },
            actions: [{ link: '', text: 'LEARN MORE' }]
          },
          {
            title: 'Dependable results in minutes',
            statements: [
              'Media Analyfx can run your tests in parallel on 100+ devices.',
              'All of the results are neatly organized in test runs and sorted in a',
              'timeline for future reference.',
              'With test results like ours, it is easy to discover where the bug came',
              'from, which devices are affected, which user journeys are ',
              'endangered and what was the cause of the problem.',
              'Along with the result, other data is collected.Currently console',
              'output and network activity are available for inspection.And, we are',
              'working to bring in more data such as performance overviews and',
              'screenshots.'
            ],
            image: { src: 'assets/suite-st/common/random/results-screen.png', alt: '' },
            actions: [{ link: '', text: 'LEARN MORE' }]
          }
        ]
      },
      wrapup: {
        title: 'Wrapping it up - there is a lot!',
        text: 'Our awesome features will streamline your testing and speed up your release cycles.',
        statements1: [
          'Manual and automated testing Test',
          'Smart TV and set - top box apps',
          'Test Android TV, Roku, tvOS, Xbox One and',
          'PlayStation 4 apps',
          'Test websites and browser web apps',
          'Physical devices, emulators and browsers',
          'Parallel independent test execution',
          'Precise device control through infrared',
          'Zero programming required'
        ],
        statements2: [
          'Crossplatform testing',
          'Local and remote devices support',
          'Super - easy and fast setup',
          'Team collaboration tools',
          'Effortlessly test live apps',
          'Network and console activity assertions',
          'Visual test authoring',
          'CI support, JavaScript and REST API\'s'
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

  watchAssets$(): Observable<any> {
    return this._assets$.asObservable()
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._coreService.navigate({ path: [..._.path], extras: {} })
  }
}
