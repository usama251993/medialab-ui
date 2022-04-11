import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { MatSnackBarConfig } from '@angular/material/snack-bar'

import { AppOptionModel } from '@shared/models/app-assets.model'

import { CdCoreService } from '@cd-core/services/cd-core.service'
import { CORE_ROUTES } from '@cd-core/cd-core.routes'

import { CdAnalysisModel, CdNextButtonModel, CdResultModel, CdResultOverviewListModel, CdSummaryModel } from '@cd-app/models/cd-result.model'
import { APP_ROUTES } from '@cd-app/cd-app.routes'
import { NavigationExtras } from '@angular/router'

interface CdSnackbarModel {
  message: string
  action?: string
  config?: MatSnackBarConfig
}

@Injectable({
  providedIn: 'root'
})
export class CdAppCoreService {

  private _bucketForm$: BehaviorSubject<FormData>
  private _tableColumns$: BehaviorSubject<AppOptionModel[]>
  private _overviewList$: BehaviorSubject<CdResultOverviewListModel>
  private _result$: BehaviorSubject<CdResultModel>
  private _nextButton$: BehaviorSubject<CdNextButtonModel>
  private _analysis$: BehaviorSubject<CdAnalysisModel>
  private _summary$: BehaviorSubject<CdSummaryModel>

  private _bIsDataProcessing$: BehaviorSubject<boolean>
  private _bIsResultListAvailable$: BehaviorSubject<boolean>
  private _bIsResultAvailable$: BehaviorSubject<boolean>

  private _columnDict: {
    base: AppOptionModel[]
    extendedBase: AppOptionModel[]
    [key: string]: AppOptionModel[]
  }
  public snackbar: CdSnackbarModel
  private _nextButton: CdNextButtonModel

  constructor(
    private _coreService: CdCoreService
  ) {
    this._bucketForm$ = new BehaviorSubject<FormData>(null)
    this._tableColumns$ = new BehaviorSubject<AppOptionModel[]>([])
    this._overviewList$ = new BehaviorSubject<CdResultOverviewListModel>(null)
    this._result$ = new BehaviorSubject<CdResultModel>(null)
    this._analysis$ = new BehaviorSubject<CdAnalysisModel>(null)
    this._summary$ = new BehaviorSubject<CdSummaryModel>(null)
    this._nextButton$ = new BehaviorSubject<CdNextButtonModel>(null)

    this._bIsDataProcessing$ = new BehaviorSubject<boolean>(false)
    this._bIsResultListAvailable$ = new BehaviorSubject<boolean>(false)
    this._bIsResultAvailable$ = new BehaviorSubject<boolean>(false)

    this.snackbar = {
      message: 'Service Unavailable',
      action: 'OK!',
      config: {
        horizontalPosition: 'right',
        verticalPosition: 'top'
      }
    }

    this._columnDict = {
      base: [
        { value: 'title', viewValue: 'Title' },
        { value: 'vid_id', viewValue: 'Video ID' },
        // { value: 'first_video_url', viewValue: 'Inspected Video URL' },
        // { value: 'second_video_url', viewValue: 'Reference Video URL' },
        { value: 'video_url', viewValue: 'Video URL' },
        { value: 'video_type', viewValue: 'Video Type' }
      ],
      extendedBase: [
        { value: 'format', viewValue: 'Format' },
        { value: 'bit_rate', viewValue: 'Bit Rate' },
        { value: 'sample_rate', viewValue: 'Sample Rate' }
      ],
      hashtag: [
        { value: 'hashvalue', viewValue: 'Hash Value' },
        { value: 'similarity_percent', viewValue: 'Similarity Percentage' }
      ],
      audio: [
        { value: 'track', viewValue: 'Track' },
        { value: 'encoding_format', viewValue: 'Encoding Format' },
        { value: 'diff_type', viewValue: 'Difference Type' },
        { value: 'diff_Duration', viewValue: 'Difference Duration' }
      ],
      language: [
        { value: 'track', viewValue: 'Track' },
        { value: 'duration', viewValue: 'Duration' },
        { value: 'channel', viewValue: 'Channel' },
        { value: 'language', viewValue: 'Language' },
        // { value: 'language_2', viewValue: 'Language 2' }
      ],
      textual: [
        { value: 'encoding_format', viewValue: 'Encoding Format' },
        { value: 'duration', viewValue: 'Duration' },
        { value: 'caption_type', viewValue: 'Caption Type' },
        { value: 'caption_text', viewValue: 'Caption Text' },
        // { value: 'caption_text_2', viewValue: 'Caption Text 2' }
      ],
      equipment: [
        { value: 'encoding_format', viewValue: 'Encoding Format' },
        { value: 'duration', viewValue: 'Duration' },
        { value: 'equipment_type', viewValue: 'Equipment Type' },
        { value: 'timecode_format', viewValue: 'Timecode Format' }
      ],
      framerates: [
        { value: 'encoding_format', viewValue: 'Encoding Format' },
        { value: 'duration', viewValue: 'Duration' },
        { value: 'resolution', viewValue: 'Resolution' },
        { value: 'vid_compression_rate', viewValue: 'Video Compression Rate' }
      ],
      timecode: [
        { value: 'encoding_format', viewValue: 'Encoding Format' },
        { value: 'duration', viewValue: 'Duration' },
        { value: 'timecode_format', viewValue: 'Timecode Format' },
        { value: 'frame_rate', viewValue: 'Frame Rate' }
      ],
      audioSegment: [
        { value: 'track', viewValue: 'Track' },
        { value: 'encoding_format', viewValue: 'Encoding Format' },
        { value: 'duration', viewValue: 'Duration' }
      ]
    }
    this._nextButton = {
      buttons: {
        next: {
          text: 'Next',
          appearance: 'flat',
          type: 'button',
          disabled: false,
          color: 'primary',
          link: null
        },
        launch: {
          text: 'launch',
          appearance: 'icon',
          type: 'button',
          disabled: false,
          color: 'primary',
          link: null
        },
        cloud: {
          text: 'cloud',
          appearance: 'icon',
          type: 'button',
          link: null,
          color: 'primary',
          disabled: false
        },
        playCircle: {
          text: 'play_circle_outline',
          appearance: 'icon',
          type: 'button',
          color: 'primary',
          disabled: false,
          link: null
        },
        here: {
          text: 'here',
          appearance: 'link',
          type: 'button',
          color: 'primary',
          disabled: false,
          link: null
        },
        pauseCircle: {
          text: 'pause_circle_outline',
          appearance: 'icon',
          type: 'button',
          link: null,
          disabled: false,
          color: 'primary'
        },
        close: {
          text: 'close',
          appearance: 'icon',
          disabled: false,
          link: null,
          color: 'accent',
          type: 'button'
        },
        chevronLeft: {
          text: 'chevron_left',
          appearance: 'icon',
          disabled: false,
          link: null,
          color: "accent",
          type: 'button'
        }
      }
    }
  }

  setBucketForm(_: FormData): void {
    this._bucketForm$.next({ ..._ })
  }

  watchBucketForm$(): Observable<FormData> {
    return this._bucketForm$.asObservable()
  }

  setButtonAsset(): void {
    this._nextButton$.next(this._nextButton)
  }

  watchButtonAsset$(): Observable<CdNextButtonModel> {
    return this._nextButton$.asObservable()
  }

  setOverviewAvailability(_: boolean): void {
    this._bIsResultListAvailable$.next(_)
  }

  watchOverviewAvailability$(): Observable<boolean> {
    return this._bIsResultListAvailable$.asObservable()
  }

  setResultAvailability(_: boolean): void {
    this._bIsResultAvailable$.next(_)
  }

  watchResultAvailability$(): Observable<boolean> {
    return this._bIsResultAvailable$.asObservable()
  }

  setOverviewList(_: CdResultOverviewListModel): void {
    this._overviewList$.next({ ..._ })
    this._summary$.next({ ..._.summary })
    this._bIsResultListAvailable$.next(true)
  }

  watchOverviewList$(): Observable<CdResultOverviewListModel> {
    return this._overviewList$.asObservable()
  }

  setAnalysis(_: CdAnalysisModel): void {
    this._analysis$.next(_)
  }

  watchAnalysis$(): Observable<CdAnalysisModel> {
    return this._analysis$.asObservable()
  }

  setResult(_: CdResultModel): void {
    this._result$.next(_)
  }

  watchResult$(): Observable<CdResultModel> {
    return this._result$.asObservable()
  }

  setTableColumns(_: CdAnalysisModel): void {
    this._tableColumns$.next([...this._columnDict.base, ...this._columnDict[_.value]])
  }

  watchTableColumns$(): Observable<AppOptionModel[]> {
    return this._tableColumns$.asObservable()
  }

  setDataProcessing(_: boolean): void {
    this._bIsDataProcessing$.next(_)
  }

  watchDataProcessing$(): Observable<boolean> {
    return this._bIsDataProcessing$.asObservable()
  }

  watchSummary$(): Observable<CdSummaryModel> {
    return this._summary$.asObservable()
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._coreService.navigate({ path: [CORE_ROUTES.APPLICATION, ..._.path], extras: { ..._.extras } })
  }

  gotoBucketSelection(): void {
    this.navigate({ path: [], extras: {} })
  }

  gotoDetails(_: CdAnalysisModel): void {
    this._bIsDataProcessing$.next(true)
    this.navigate({ path: [APP_ROUTES.RESULT_LIST, <string>_.value], extras: { state: { ..._ } } })
  }

  gotoResults(): void {
    this.navigate({ path: [APP_ROUTES.RESULT_LIST], extras: {} })
  }

  gotoSummary(): void {
    this.navigate({ path: [APP_ROUTES.SUMMARY], extras: {} })
  }

}
