import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'
import { StCoreService } from '@st-core/services/st-core.service'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StMonoService {

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
              heading: 'Introducing Analyfx Mono',
              subheading: '',
              statements: [
                'The Automation Hardware that went mono'
              ]
            },
            actions: [
              { link: '', text: 'LEARN MORE' }
            ],
          }
        ]
      },
      feature: {
        _: [
          {
            title: 'Universal',
            statements: [
              'Control any of your infrared-based',
              'devices with a web-based universal',
              'remote.'
            ]
          },
          {
            title: 'Programmable',
            statements: [
              'Record and replay key sequences to',
              'handle maintenance tasks of any',
              'complexity.'
            ]
          },
          {
            title: 'Comfortable',
            statements: [
              'Take the pocket-sized AccuBox',
              'Mono anywhere you need and',
              'connect to a device without any',
              'additional hardware.'
            ]
          }
        ]
      },
      description: {
        _: [
          {
            title: 'Any device from anywhere',
            statements: [
              'Have some devices dusting up at the remote office?',
              'Install the WinBox there and put them to good use.',
              'With Media Analyfx you can automate remote devices just as',
              'well as the local ones.',
              'All configured devices will show up in your Media Analyfx',
              'account and you can connect and use them any time.'
            ]
          },
          {
            title: 'Big screen automation easy and affordable',
            statements: [
              'The Analyfx Box complemented by the other Media Analyfx tools',
              'makes it easy to do device automation and TV app testing on big',
              'screen devices.',
              'Whether you have one device or a thousand Media Analyfx will',
              'make automation a breeze.',
              'Starting from just 259 EUR per month.',
            ]
          }
        ]
      },
      wrapup: {
        items: [
          {
            title: 'The Analyfx Mono feature wrap-up',
            statements: [
              'Supports any infrared based device',
              'Automate unlimited devices from one account',
              'Automate remote devices',
              'Precise, collision-free infrared signal targeting',
              'Built -in recorder for infrared codes',
              'Extremely easy and user - friendly setup',
              '8 or 40 independent control ports',
              'Browser based virtual remote control',
              'Record and replay key sequences',
              'Emulate power cuts',
              "JavaScript and REST API's"
            ],
            image: { src: 'assets/suite-st/common/random/Analyfx Mono .jpg', alt: 'more' },
            actions: []
          }
        ]
      },
      closure: {
        title: 'Sign up and get your Analyfx Mono now!',
        actions: [
          { text: 'REQUEST A DEMO', link: '' }
        ],
        description: 'Starting from $383 per month'
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
