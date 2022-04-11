import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { IaSummaryAssetsModel } from '@ia-app/models/ia-result.model'

@Injectable({
  providedIn: 'root'
})
export class IaSummaryService {

  private _pageAssets$: BehaviorSubject<IaSummaryAssetsModel> = new BehaviorSubject<IaSummaryAssetsModel>(null)

  private _pageAssets: IaSummaryAssetsModel

  constructor() {
    this._pageAssets = {
      title: 'Image Analytics Summary',
      summary: [
        { value: null, viewValue: 'Client Details' },
        { value: null, viewValue: 'Bucket Location' },
        { value: null, viewValue: 'Sample Size' },
        { value: 160, viewValue: 'Number of Samples Analysed' },
        { value: '26 MB', viewValue: 'Size of Samples Analysed' },
        { value: 77, viewValue: 'Bags Detected' },
        { value: 83, viewValue: 'Other Objects Detected' },
        { value: 148, viewValue: 'Logos Detected' }
      ]
    }
  }

  setPageAssets(): void {
    this._pageAssets$.next(null)
    this._pageAssets$.next({ ...this._pageAssets })
  }

  watchPageAssets(): Observable<IaSummaryAssetsModel> {
    return this._pageAssets$.asObservable()
  }
}
