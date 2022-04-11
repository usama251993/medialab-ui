import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup } from '@angular/forms'

import { BehaviorSubject, Observable } from 'rxjs'

import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'
import { AppEndpointRequestModel, AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { INITIAL_FORM_GROUP } from '@shared/models/app-form.model'
import { COMMON_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

import { APP_ROUTES } from '@cd-app/cd-app.routes'
import { CdResultOverviewListModel } from '@cd-app/models/cd-result.model'
import { CdAppCoreService } from '@cd-app/services/cd-app-core.service'
import { CdBucketAssetsModel, CdBucketFormModel, INITIAL_BUCKET_ASSETS, INITIAL_BUCKET_FORM } from '@cd-app/models/bucket/cd-bucket.model'

@Injectable({
  providedIn: 'root'
})
export class CdBucketService {

  private _pageAssets$: BehaviorSubject<CdBucketAssetsModel> = new BehaviorSubject<CdBucketAssetsModel>(INITIAL_BUCKET_ASSETS)
  private _formAssets$: BehaviorSubject<CdBucketFormModel> = new BehaviorSubject<CdBucketFormModel>(INITIAL_BUCKET_FORM)
  private _formGroup$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(INITIAL_FORM_GROUP)

  private _pageAssets: CdBucketAssetsModel
  private _formAssets: CdBucketFormModel
  private _formGroup: FormGroup

  private _bIsProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private _coreService: CdAppCoreService,
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
        list: [{ value: 'medialabs_contentdedup_devbucket', viewValue: 'Content-Aware Deduplication bucket' }]
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
        initialization: { value: 'medialabs_contentdedup_devbucket', disabled: true },
        validation: { bIsMandatory: true }
      },
      config: {
        name: 'config',
        classification: {
          name: 'classification',
          label: 'Apply Classification',
          placeholder: '',
          type: 'checkbox',
          initialization: { value: true, disabled: true },
          validation: { bIsMandatory: false }
        },
        usecase: {
          name: 'usecase',
          audio: {
            name: 'audio',
            label: 'Additional Audio Data',
            placeholder: 'Additional Audio Data',
            type: 'checkbox',
            initialization: { value: true, disabled: true },
            validation: { bIsMandatory: false }
          },
          language: {
            name: 'language',
            label: 'Same Videos with Different Language Tracks',
            placeholder: 'Same Videos with Different Language Tracks',
            type: 'checkbox',
            initialization: { value: true, disabled: true },
            validation: { bIsMandatory: false }
          },
          textual: {
            name: 'textual',
            label: 'Same Videos with Different Textual Captions',
            placeholder: 'Same Videos with Different Textual Captions',
            type: 'checkbox',
            initialization: { value: true, disabled: true },
            validation: { bIsMandatory: false }
          },
          equipment: {
            name: 'equipment',
            label: 'Same Videos Recorded or Encoded with Different Equipment',
            placeholder: 'Same Videos Recorded or Encoded with Different Equipment',
            type: 'checkbox',
            initialization: { value: true, disabled: true },
            validation: { bIsMandatory: false }
          },
          framerates: {
            name: 'framerates',
            label: 'Same Videos with Different Frame Rates and Resolutions',
            placeholder: 'Same Videos with Different Frame Rates and Resolutions',
            type: 'checkbox',
            initialization: { value: true, disabled: true },
            validation: { bIsMandatory: false }
          },
          timecode: {
            name: 'timcode',
            label: 'Same Videos with Different Time Code Start and End Points',
            placeholder: 'Same Videos with Different Time Code Start and End Points',
            type: 'checkbox',
            initialization: { value: true, disabled: true },
            validation: { bIsMandatory: false }
          },
          audioSegment: {
            name: 'audioSegment',
            label: 'Same Videos with Audio Segments in between Video Segments',
            placeholder: 'Same Videos with Audio Segments in between Video Segments',
            type: 'checkbox',
            initialization: { value: true, disabled: true },
            validation: { bIsMandatory: false }
          }
        }
      }
    }

    this._formGroup = this._fb.group({
      bucket: [{ ...this._formAssets.bucket.initialization }],
      config: this._fb.group({
        classification: [{
          value: this._formAssets.config.classification.initialization.value,
          disabled: this._formAssets.config.classification.initialization.disabled
        }],
        usecase: this._fb.group({
          audio: [{ ...this._formAssets.config.usecase.audio.initialization }],
          audioSegment: [{ ...this._formAssets.config.usecase.audioSegment.initialization }],
          equipment: [{ ...this._formAssets.config.usecase.equipment.initialization }],
          framerates: [{ ...this._formAssets.config.usecase.framerates.initialization }],
          language: [{ ...this._formAssets.config.usecase.language.initialization }],
          textual: [{ ...this._formAssets.config.usecase.textual.initialization }],
          timecode: [{ ...this._formAssets.config.usecase.timecode.initialization }]
        })
      })
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

  watchPageAssets$(): Observable<CdBucketAssetsModel> {
    return this._pageAssets$.asObservable()
  }

  watchFormAssets$(): Observable<CdBucketFormModel> {
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

  fetchResults$(_: FormData): Observable<AppEndpointResponseModel<any>> {
    let endpoint: string = this._endpointService.getEndpoint({
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.DEDUP,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.DEDUP.PROCESSBUCKET
    })
    let reqBody: AppEndpointRequestModel = {
      headers: null, auth: null, params: null,
      data: { ...<{ [key: string]: any }>_ },
      route: null
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody })
  }

  fakeResult$(): Observable<CdResultOverviewListModel> {
    return this._http.get<CdResultOverviewListModel>('assets/dedup/application-ui/overview.json')
  }
}
