import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup } from '@angular/forms'

import { BehaviorSubject, Observable } from 'rxjs'

import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'
import { AppEndpointRequestModel, AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { INITIAL_FORM_GROUP } from '@shared/models/app-form.model'
import { COMMON_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

import { APP_ROUTES } from '@ia-app/ia-app.routes'
import { IaResultOverviewListModel } from '@ia-app/models/ia-result.model'
import { IaAppCoreService } from '@ia-app/services/ia-app-core.service'
import { IaBucketAssetsModel, IaBucketFormModel, INITIAL_BUCKET_ASSETS, INITIAL_BUCKET_FORM } from '@ia-app/models/bucket/ia-bucket.model'

@Injectable({
  providedIn: 'root'
})
export class IaBucketService {

  private _pageAssets$: BehaviorSubject<IaBucketAssetsModel> = new BehaviorSubject<IaBucketAssetsModel>(INITIAL_BUCKET_ASSETS)
  private _formAssets$: BehaviorSubject<IaBucketFormModel> = new BehaviorSubject<IaBucketFormModel>(INITIAL_BUCKET_FORM)
  private _formGroup$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(INITIAL_FORM_GROUP)

  private _pageAssets: IaBucketAssetsModel
  private _formAssets: IaBucketFormModel
  private _formGroup: FormGroup

  private _bIsProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private _coreService: IaAppCoreService,
    private _endpointService: AppEndpointService,
    private _http: HttpClient,
    private _fb: FormBuilder
  ) {
    this._pageAssets = {
      bucket: {
        title: 'Select Bucket',
        label: 'Bucket Selection',
        next: {
          text: 'Configure',
          link: '',
          appearance: 'stepper',
          color: 'primary',
          type: 'button',
          disabled: false
        },
        list: [{ value: 'medialabs_imageanalytics_devbucket', viewValue: 'Image Analytics bucket' }]
      },
      config: {
        label: 'Configuration',
        next: {
          text: 'Start Processing',
          link: '',
          appearance: 'raised',
          color: 'primary',
          type: 'submit',
          disabled: false
        },
        preprocess: {
          title: 'Pre/Parallel Processing'
        },
        usecase: {
          title: 'Select Use Cases'
        }
      }
    }

    this._formAssets = {
      bucket: {
        name: 'bucket',
        label: 'Bucket Location URL',
        placeholder: 'Bucket Location URL',
        type: 'text',
        initialization: { value: 'https://console.cloud.google.com/storage/browser/medialabs_contentdedup_devbucket/conde_nast', disabled: true },
        validation: { bIsMandatory: true }
      },
      config: {
        name: 'config',
        usecase: {
          name: 'usecase',
          object: {
            name: 'object',
            label: 'Detect an Object within a Sample',
            placeholder: 'Detect an Object within a Sample',
            type: 'checkbox',
            initialization: { value: true, disabled: true },
            validation: { bIsMandatory: false }
          },
          logo: {
            name: 'logo',
            label: 'Detect an Object with a Logo',
            placeholder: 'Detect an Object with a Logo',
            type: 'checkbox',
            initialization: { value: true, disabled: true },
            validation: { bIsMandatory: false }
          },
          duplicate: {
            name: 'duplicate',
            label: 'Detect duplicate Image content',
            placeholder: 'Detect duplicate Image content',
            type: 'checkbox',
            initialization: { value: false, disabled: true },
            validation: { bIsMandatory: false }
          },
          classify: {
            name: 'classify',
            label: 'Classify Image - Gender/Description',
            placeholder: 'Classify Image - Gender/Description',
            type: 'checkbox',
            initialization: { value: false, disabled: true },
            validation: { bIsMandatory: false }
          }
        }
      }
    }

    this._formGroup = this._fb.group({
      bucket: [{
        value: this._formAssets.bucket.initialization.value,
        disabled: this._formAssets.bucket.initialization.disabled
      }],
      config: this._fb.group({
        usecase: this._fb.group({
          object: [{
            value: this._formAssets.config.usecase.object.initialization.value,
            disabled: this._formAssets.config.usecase.object.initialization.disabled
          }],
          logo: [{
            value: this._formAssets.config.usecase.logo.initialization.value,
            disabled: this._formAssets.config.usecase.logo.initialization.disabled
          }],
          duplicate: [{
            value: this._formAssets.config.usecase.duplicate.initialization.value,
            disabled: this._formAssets.config.usecase.duplicate.initialization.disabled
          }],
          classify: [{
            value: this._formAssets.config.usecase.classify.initialization.value,
            disabled: this._formAssets.config.usecase.classify.initialization.disabled
          }]
        })
      })
    })
  }

  fetchPageAssets(): void {
    this._pageAssets$.next(this._pageAssets)
  }

  fetchFromAssets(): void {
    this._formAssets$.next(this._formAssets)
  }

  fetchFormGroup(): void {
    this._formGroup$.next(this._formGroup)
  }

  watchPageAssets$(): Observable<IaBucketAssetsModel> {
    return this._pageAssets$.asObservable()
  }

  watchFromAssets$(): Observable<IaBucketFormModel> {
    return this._formAssets$.asObservable()
  }

  watchFormGroup$(): Observable<FormGroup> {
    return this._formGroup$.asObservable()
  }

  setDataProcessing(_: boolean): void {
    this._bIsProcessing$.next(_)
  }

  watchDataProcessing$(): Observable<boolean> {
    return this._bIsProcessing$.asObservable()
  }

  processBucket(_: FormData) {
    this.setDataProcessing(true)
    this._coreService.setBucketForm(_)
    this._coreService.navigate({ path: [APP_ROUTES.RESULT_LIST], extras: {} })
  }

  fetchResults$(_: FormData): Observable<AppEndpointResponseModel<IaResultOverviewListModel>> {
    let endpoint: string = this._endpointService.getEndpoint({
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.IMAGE_ANALYTICS,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.IMAGE_ANALYTICS.PROCESSBUCKET
    })
    let reqBody: AppEndpointRequestModel = {
      headers: null, auth: null, params: null,
      data: { ...<{ [key: string]: any }>_ },
      route: null
    }
    return this._endpointService.triggerPostRequest({ endpoint, reqBody })
  }

  fakeResult$(): Observable<IaResultOverviewListModel> {
    return this._http.get<IaResultOverviewListModel>('assets/image-analytics/application-ui/overview/overview.json')
  }
}
