import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'

import { LmCookiebarAssetsModel, INITIAL_COOKIEBAR_ASSETS } from '@lm-core/models/lm-cookiebar/lm-cookiebar-assets.model'
import { LmCookiebarModel, INITIAL_COOKIEBAR } from '@lm-core/models/lm-cookiebar/lm-cookiebar.model'

@Injectable({
  providedIn: 'root'
})
export class LmCookiebarService {

  private _assets$: BehaviorSubject<LmCookiebarAssetsModel> = new BehaviorSubject<LmCookiebarAssetsModel>(INITIAL_COOKIEBAR_ASSETS)
  private _state$: BehaviorSubject<LmCookiebarModel> = new BehaviorSubject<LmCookiebarModel>(INITIAL_COOKIEBAR)

  assets: LmCookiebarAssetsModel
  state: LmCookiebarModel

  constructor() {
    this.assets = {
      policies: [
        { link: '', label: 'Cookie Policy' },
        { link: '', label: 'Privacy Policy' },
        { link: '', label: 'Terms of Service' }
      ],
      message: 'We use cookies to enhance user experience, analyze site usage, and assist in our marketing efforts. By continuing to browse, you acknowledge that you agree to our policies',
      buttons: [{
        text: 'clear',
        link: null,
        appearance: 'icon',
        color: null,
        type: 'button',
        disabled: false
      }
      ]
    }

    this.state = {
      state: { bIsDismissed: false }
    }
  }

  fetchCookiebarAssets(): Observable<LmCookiebarAssetsModel> {
    return of({ ...this.assets })
  }

  fetchCookiebarState(): Observable<LmCookiebarModel> {
    return of({ ...this.state })
  }

  dismissCookiebar(_: LmCookiebarModel): Observable<LmCookiebarModel> {
    return of({
      ..._,
      state: {
        ..._.state,
        bIsDismissed: true
      }
    })
  }

}
