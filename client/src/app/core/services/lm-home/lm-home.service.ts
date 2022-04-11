import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { Dictionary, Update } from '@ngrx/entity'

import { State } from '@lm-core/state'
import * as fromActions from '@lm-core/state/actions/lm-home.action'
import { selectAssets } from '@lm-core/state/selectors/lm-home.selector'
import { ENTITY_ID } from '@lm-core/state/types'

import { LmHomeAssetsModel } from '@lm-core/models/lm-home.model'

@Injectable({
  providedIn: 'root'
})
export class LmHomeService {

  assetsModel: LmHomeAssetsModel
  cookieModel: LmHomeAssetsModel

  constructor(
    private _store$: Store<State>
  ) {
    this.assetsModel = {
      id: '',
      assets: {
        carousel: {
          title: '',
          _: [
            {
              buttons: [

              ],
              image: { src: '../../../../../../assets/images/home/carousel/carousel-1.jpg', alt: 'Carousel Image' },
              text: {
                heading: 'OTT test automation on living room devices',
                subheading: '',
                description: ''
              }
            },
            {
              buttons: [

              ],
              image: { src: '../../../../../../assets/images/home/carousel/carousel-2.jpg', alt: 'Carousel Image' },
              text: {
                heading: 'Test automation the easy way',
                subheading: '',
                description: ''
              }
            },
            {
              buttons: [

              ],
              image: { src: '../../../../../../assets/images/home/carousel/carousel-3.jpg', alt: 'Carousel Image' },
              text: {
                heading: 'Imagineering from Home',
                subheading: '',
                description: ''
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
              buttons: [{ link: '', text: 'Know More' }],
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
              buttons: [{ link: '', text: 'Know More' }],
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
                  link: '',
                  icon: {
                    position: 'after',
                    _: 'play_arrow'
                  }
                },
                {
                  text: 'Explore more',
                  link: '',
                  icon: {
                    position: 'after',
                    _: 'play_arrow'
                  }
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
        },
      },
      cookiebar: null,
      error: null
    }
    this.cookieModel = {
      id: '',
      assets: null,
      cookiebar: {
        state: { bIsDismissed: false },
        assets: {
          policies: [
            { link: '', label: 'Cookie Policy' },
            { link: '', label: 'Privacy Policy' },
            { link: '', label: 'Terms of Service' }
          ],
          message: 'We use cookies to enhance user experience, analyze site usage, and assist in our marketing efforts. By continuing to browse, you acknowledge that you agree to our policies',
          buttons: [
            { link: '', text: 'clear' }
          ]
        }
      },
      error: null
    }
  }

  getAssetsDict(): Observable<Dictionary<LmHomeAssetsModel>> {
    this._store$.dispatch(new fromActions.LmLoadHomeAssets({ id: ENTITY_ID.ASSETS }))
    return this._store$.pipe(select(selectAssets))
  }

  getCookieAssetsDict(): Observable<Dictionary<LmHomeAssetsModel>> {
    this._store$.dispatch(new fromActions.LmLoadCookiebarAssets({ id: ENTITY_ID.COOKIEBAR }))
    return this._store$.pipe(select(selectAssets))
  }

  getEntityID(): Observable<string> {
    return of(ENTITY_ID.ASSETS)
  }

  getCookieEntityID(): Observable<string> {
    return of(ENTITY_ID.COOKIEBAR)
  }

  fetchAssets(id: string): Observable<LmHomeAssetsModel> {
    return of({ ...this.assetsModel, id })
  }

  fetchCookiebarAssets(id: string): Observable<LmHomeAssetsModel> {
    return of({ ...this.cookieModel, id })
  }

  triggerDismissCookiebar(homeModel: LmHomeAssetsModel): Observable<Dictionary<LmHomeAssetsModel>> {
    this._store$.dispatch(new fromActions.LmDismissCookiebar(homeModel))
    return this._store$.pipe(select(selectAssets))
  }

  dismissCookiebar(action: fromActions.LmDismissCookiebar) {
    let update: Update<LmHomeAssetsModel> = {
      id: action.payload.id,
      changes: {
        cookiebar: {
          ...action.payload.cookiebar,
          state: { bIsDismissed: true }
        }
      }
    }
    return of(update)
  }
}
