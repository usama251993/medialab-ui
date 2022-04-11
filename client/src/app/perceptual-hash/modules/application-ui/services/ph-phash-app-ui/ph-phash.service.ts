import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup } from '@angular/forms'

import { BehaviorSubject, Observable } from 'rxjs'

import { AppFormFieldModel } from '@shared/models/app-form.model'

import { PhCircularPackDataModel, PhSankeyDataModel } from '@ph-app/models/ph-phash-app-ui/phash.model'

@Injectable({
  providedIn: 'root'
})
export class PhPhashService {

  private _chartOverviewData$: BehaviorSubject<PhCircularPackDataModel>
  private _chartDataPoint$: BehaviorSubject<PhSankeyDataModel>
  // private _playerControlForm$: BehaviorSubject<FormGroup>
  // private _playerControlFormAssets$: BehaviorSubject<{ frameIndex: AppFormFieldModel }>

  private _playerControlFormAssets: { frameIndex: AppFormFieldModel }

  constructor(
    private _http: HttpClient,
    private _fb: FormBuilder
  ) {
    this._chartOverviewData$ = new BehaviorSubject<PhCircularPackDataModel>(null)
    this._chartDataPoint$ = new BehaviorSubject<PhSankeyDataModel>(null)
    // this._playerControlForm$ = new BehaviorSubject<FormGroup>(null)
    // this._playerControlFormAssets$ = new BehaviorSubject<{ frameIndex: AppFormFieldModel }>(null)

    // this._playerControlFormAssets = {
    //   frameIndex: {
    //     name: 'frameIndex',
    //     label: 'Frame Index',
    //     placeholder: 'Frame Index',
    //     type: 'number',
    //     validation: {
    //       bIsMandatory: true,
    //       min: 0
    //     },
    //     initialization: {
    //       value: 0,
    //       disabled: false
    //     }
    //   }
    // }
  }

  watchChartDataPoint$(): Observable<PhSankeyDataModel> {
    return this._chartDataPoint$.asObservable()
  }
}
