import { Injectable, isDevMode } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'

import { AppEndpointRequestModel, AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'
import { INITIAL_FORM_GROUP } from '@shared/models/app-form.model'
import { COMMON_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

import { PhPhashBucketFormModel, INITIAL_PHASH_BUCKET_FORM, PhPhashBucketAssetsModel, INITIAL_PHASH_BUCKET_ASSETS, INITIAL_PHASH_BUCKET_FLAGS, PhPhashBucketComponentFlagModel, PhPhashBucketFormValueModel, PhPhashBucketParamModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-bucket/ph-phash-bucket.model'
import { PhPhashOverviewModel } from '@ph-core/modules/application-ui/models/ph-phash-app-ui/ph-phash-overview/ph-phash-overview.model'

import { PhPhashAppService } from '../ph-phash-app.service'

@Injectable({
  providedIn: 'root'
})
export class PhPhashBucketService {

  private _pageAssets$: BehaviorSubject<PhPhashBucketAssetsModel> = new BehaviorSubject<PhPhashBucketAssetsModel>(INITIAL_PHASH_BUCKET_ASSETS)
  private _formAssets$: BehaviorSubject<PhPhashBucketFormModel> = new BehaviorSubject<PhPhashBucketFormModel>(INITIAL_PHASH_BUCKET_FORM)
  private _formGroup$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(INITIAL_FORM_GROUP)
  private _componentFlags$: BehaviorSubject<PhPhashBucketComponentFlagModel> = new BehaviorSubject<PhPhashBucketComponentFlagModel>(INITIAL_PHASH_BUCKET_FLAGS)

  private _pageAssets: PhPhashBucketAssetsModel
  private _formAssets: PhPhashBucketFormModel
  private _formGroup: FormGroup

  constructor(
    private _endpointService: AppEndpointService,
    private _appService: PhPhashAppService,

    private _http: HttpClient,

    private _fb: FormBuilder
  ) {

    this._pageAssets = {
      bucket: {
        title: 'Select Bucket',
        label: 'Bucket Selection',
        list: [
          { value: 'discovery_data/Test1', viewValue: 'Test Bucket 1' },
          { value: 'discovery_data/Test2', viewValue: 'Test Bucket 2' },
          { value: 'Test3', viewValue: 'Test Bucket 3' },
          { value: 'Test4', viewValue: 'Test Bucket 4' },
          { value: 'Test5', viewValue: 'Test Bucket 5' },
          { value: 'Test6', viewValue: 'Test Bucket 6' },
          { value: 'Test7', viewValue: 'Test Bucket 7' }
        ]
      }
    }

    this._formAssets = {
      bucket: {
        name: 'bucket',
        label: 'Bucket Selection',
        placeholder: 'Bucket Selection',
        type: 'text',
        initialization: { value: 'discovery_data/Test1', disabled: false },
        validation: { bIsMandatory: true }
      },
      submit: {
        name: 'submit',
        label: 'Start Process',
        placeholder: '',
        type: 'submit',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      }
    }

    this._formGroup = this._fb.group({
      bucket: [{ ...this._formAssets.bucket.initialization }]
    })

  }

  fetchPageAssets(): void {
    this._pageAssets$.next(this._pageAssets)
  }

  fetchFormAssets(): void {
    this._formAssets$.next(this._formAssets)
  }

  fetchFormGroup(): void {
    this._formGroup$.next(this._formGroup)
  }

  watchPageAssets$(): Observable<PhPhashBucketAssetsModel> {
    return this._pageAssets$.asObservable()
  }

  watchFormAssets$(): Observable<PhPhashBucketFormModel> {
    return this._formAssets$.asObservable()
  }

  watchFormGroup$(): Observable<FormGroup> {
    return this._formGroup$.asObservable()
  }

  setComponentFlags(_: PhPhashBucketComponentFlagModel) {
    this._componentFlags$.next(_)
  }

  watchComponentFlags$(): Observable<PhPhashBucketComponentFlagModel> {
    return this._componentFlags$.asObservable()
  }

  processBucket(_: PhPhashBucketFormValueModel): void {
    this._appService.gotoOverview({ bucketLocation: 'medialabs_contentdedup_devbucket', folderName: _.bucket })
  }

  fetchChartOverview(_: PhPhashBucketParamModel): Observable<AppEndpointResponseModel<PhPhashOverviewModel>> {

    const endpoint: string = this._endpointService.getEndpoint({
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.PHASH,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.PHASH.FETCHOVERVIEW
    })
    const reqBody: AppEndpointRequestModel = {
      auth: { username: null, password: null },
      headers: {},
      data: {},
      params: {},
      route: null
    }

    // const _httpEndpoint: string = isDevMode() ? 'http://localhost:8086/bucketlocation' : 'http://medialab-springboot-phash.default.svc.cluster.local:8086/bucketlocation'
    const _httpEndpoint: string = 'http://localhost:8086/bucketlocation'
    const _httpReqBody: PhPhashBucketParamModel = { bucketLocation: _.bucketLocation, folderName: _.folderName }

    return this._http.post<void>(_httpEndpoint, _httpReqBody)
      .pipe(
        switchMap(__ => this._endpointService.triggerPostRequest<PhPhashOverviewModel>({ endpoint, reqBody }))
      )
  }

  fetchLocalChartOverview(_: PhPhashBucketParamModel): Observable<PhPhashOverviewModel> {
    const aOrB: string = (_.folderName.slice(-1) === '1') ? 'A' : 'B'
    let endpoint: string = `assets/perceptual-hash/phash/overview/phash-matrix-discovery-test-bucket${aOrB}.json`
    return this._endpointService.triggerLocalJSONGetRequest<PhPhashOverviewModel>({ endpoint })
  }

  gotoHome(): void {
    this._appService.gotoHome()
  }
}
