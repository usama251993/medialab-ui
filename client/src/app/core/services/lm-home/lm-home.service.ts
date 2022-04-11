import { Injectable } from '@angular/core'

import { Observable, of } from 'rxjs'

import { LmHomeAssetsModel } from '@lm-core/models/assets/lm-home.model'
import { NavigationExtras } from '@angular/router'
import { LmCoreService } from '../lm-core.service'

@Injectable({
  providedIn: 'root'
})
export class LmHomeService {

  assetsModel: LmHomeAssetsModel

  constructor(
    private _coreService: LmCoreService
  ) {
    this.assetsModel = {
      carousel: {
        items: [
          {
            actions: [
              { text: 'TAKE A TEST DRIVE', link: '' },
              { text: 'LEARN MORE', link: '' }
            ],
            image: { src: 'assets/medialab/home/carousel/carousel-1.png', alt: 'Carousel Image' },
            text: {
              heading: 'One Stop Shop for Media and Entertainment',
              subheading: '',
              statements: [
                'Give your users a seamless experience by testing content using emulations or on physical devices - 50+ handheld devices, 25+ Video CPEs, 10+ Vehicle Infotainment Systems.',
                'Optimize Cloud and on-premise storage cost using content-aware deep inspection and Intelligent content storage tier routing based upon historical access frequency of content – ML maintains the optimization based upon usage.'
              ]
            }
          },
          {
            actions: [],
            image: { src: 'assets/images/home/carousel/carousel-2.png', alt: 'Carousel Image' },
            text: {
              heading: 'Test automation the easy way',
              subheading: '',
              statements: []
            }
          },
          {
            actions: [],
            image: { src: 'assets/images/home/carousel/carousel-3.png', alt: 'Carousel Image' },
            text: {
              heading: 'Imagineering from Home',
              subheading: '',
              statements: []
            }
          }
        ],
      },
      offerings: {
        title: 'Offerings',
        _: [
          {
            title: 'Automation Testing Suite',
            summary: [
              'An in-house test automation framework for multiplatform and multidevice automation.',
              'Comprehensive end to end Automation testing suite for home streaming devices & smart TV OS & applications',
              'Eliminating Manual testing\'s using legacy testing devices',
              'Eliminating out of sync , siloed functional & unit testings',
              'Saving costs on scale via Cloud based Testing suite offering'
            ],
            image: { src: '', alt: '' },
            buttons: [{
              text: 'Know More',
              link: null,
              appearance: 'stroked',
              color: null,
              type: 'button',
              disabled: false
            }],
            video: { link: '' }
          },
          {
            title: 'Content-aware De-duplication',
            summary: [
              'Machine Learning based duplication detection for migration from on-premises to cloud',
              'Reducing media content storage costs by de-duplicating historic/unstructured content',
              'Helping efficient Migrations from one storage bucket to another ',
              'Eg. On-premise to cloud, AWS to GCP etc.',
              'No established video de-duplicating product in the market',
              'Hash-tag comparison de-dup method only yields a deduplication ratio of 42%'
            ],
            image: { src: '', alt: '' },
            buttons: [{
              text: 'Know More',
              link: null,
              appearance: 'stroked',
              color: null,
              type: 'button',
              disabled: false
            }],
            video: { link: '' }
          }
        ]
      },
      about: {
        title: 'Imagineering the change',
        _: [
          {
            title: 'Our Solutions',
            statements: [
              'Comprehensive Test Automation Suite to test content on Home Streaming devices, Smart TV\'s, OS / Apps (Device Ballistics)',
              'Provide ML based solution to classify and recommend policy driven content routing'
            ]
          },
          {
            title: 'Our Benefits',
            statements: [
              'Reduce expenses',
              'Improve content viewing experience',
              'Customer loyalty',
              'Enhance capabilities of existing solutions',
              'Improve speed'
            ]
          },
          {
            title: 'Our Strengths',
            statements: [
              'Cloud agnostic platform for rapid deployment',
              'Deep domain experiences in Media and Entertainment',
              'Client focus and operation support',
              'Ability to leverage ML for decision making'
            ]
          }
        ]
      },
      solution: {
        title: 'Solution Overview',
        _: [
          {
            title: '',
            summary: ['Capable of automating nearly 60-70% Of test cases',
              'With up to 35% test cycle reduction and up to cost savings Capable Of automating nearly 60-70% Of test cases',
              'With up to 35% test cycle reduction and up to cost savings with up to 35% test cycle reduction and up to 40% cost savings 35% test cycle reduction and up to 40% cost savings'],
            buttons: [
              {
                text: 'Request a demo ',
                link: null,
                appearance: 'flat',
                color: 'primary',
                type: 'button',
                disabled: false
              },
              {
                text: 'Explore more',
                link: null,
                appearance: 'flat',
                color: 'primary',
                type: 'button',
                disabled: false
              }
            ]
          }
        ]
      },
      customers: {
        title: 'Customers',
        _: [
          {
            image: { src: '', alt: '' },
            label: 'Customer 1',
            link: ''
          },
          {
            image: { src: '', alt: '' },
            label: 'Customer 2',
            link: ''
          },
          {
            image: { src: '', alt: '' },
            label: 'Customer 3',
            link: ''
          }
        ]
      }
    }
  }

  fetchAssets(): Observable<LmHomeAssetsModel> {
    return of({ ...this.assetsModel })
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._coreService.navigate({ path: [..._.path], extras: {} })
  }
}

