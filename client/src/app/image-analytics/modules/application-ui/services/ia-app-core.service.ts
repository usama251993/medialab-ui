import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { MatSnackBarConfig } from '@angular/material/snack-bar'

import { AppOptionModel } from '@shared/models/app-assets.model'

import { IaCoreService } from '@ia-core/services/ia-core.service'
import { CORE_ROUTES } from '@ia-core/ia-core.routes'

import { IaAnalysisModel, IaNextButtonModel, IaResultModel, IaResultOverviewListModel, IaSummaryModel } from '@ia-app/models/ia-result.model'
import { APP_ROUTES } from '@ia-app/ia-app.routes'
import { NavigationExtras } from '@angular/router'

interface IaSnackbarModel {
  message: string
  action?: string
  config?: MatSnackBarConfig
}

@Injectable({
  providedIn: 'root'
})
export class IaAppCoreService {

  private _bucketForm$: BehaviorSubject<FormData> = new BehaviorSubject<FormData>(null)
  private _tableColumns$: BehaviorSubject<AppOptionModel[]> = new BehaviorSubject<AppOptionModel[]>([])
  private _overviewList$: BehaviorSubject<IaResultOverviewListModel> = new BehaviorSubject<IaResultOverviewListModel>(null)
  private _result$: BehaviorSubject<IaResultModel> = new BehaviorSubject<IaResultModel>(null)
  private _nextButton$: BehaviorSubject<IaNextButtonModel> = new BehaviorSubject<IaNextButtonModel>(null)
  private _analysis$: BehaviorSubject<IaAnalysisModel> = new BehaviorSubject<IaAnalysisModel>(null)
  private _summary$: BehaviorSubject<IaSummaryModel> = new BehaviorSubject<IaSummaryModel>(null)

  private _sampleCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  private _bIsDataProcessing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _bIsResultListAvailable$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _bIsResultAvailable$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  private _columnDict: {
    base: AppOptionModel[]
    [key: string]: AppOptionModel[]
  }
  public snackbar: IaSnackbarModel
  private _nextButton: IaNextButtonModel

  constructor(
    private _coreService: IaCoreService
  ) {

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
        { value: 'filename', viewValue: 'File Name' },
        { value: 'fileFormat', viewValue: 'File Format' }
      ],
      object: [
        { value: 'tags', viewValue: 'Tags' },
        { value: 'image_type', viewValue: 'Image Type' },
        { value: 'url', viewValue: 'Image URL' }
      ],
      logo: [
        { value: 'brand', viewValue: 'Brand' },
        { value: 'tags', viewValue: 'Objects Detected' },
        { value: 'image_type', viewValue: 'Image Type' },
        { value: 'url', viewValue: 'Image URL' }
      ],
      duplicate: [
        { value: 'image_type', viewValue: 'Image Type' },
        { value: 'url', viewValue: 'Image URL' }
      ],
      clasify: [
        { value: 'image_type', viewValue: 'Image Type' },
        { value: 'url', viewValue: 'Image URL' }
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
        viewPhoto: {
          text: 'compare',
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

  watchButtonAsset$(): Observable<IaNextButtonModel> {
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

  setOverviewList(_: IaResultOverviewListModel): void {
    this._overviewList$.next({ ..._ })
    this._summary$.next({ ..._.summary })
    this._bIsResultListAvailable$.next(true)
  }

  watchOverviewList$(): Observable<IaResultOverviewListModel> {
    return this._overviewList$.asObservable()
  }

  setAnalysis(_: IaAnalysisModel): void {
    this._analysis$.next(_)
  }

  watchAnalysis$(): Observable<IaAnalysisModel> {
    return this._analysis$.asObservable()
  }

  setResult(_: IaResultModel): void {
    this._result$.next(_)
  }

  watchResult$(): Observable<IaResultModel> {
    return this._result$.asObservable()
  }

  setTableColumns(_: IaAnalysisModel): void {
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

  watchSummary$(): Observable<IaSummaryModel> {
    return this._summary$.asObservable()
  }

  setSampleCount(_: number): void {
    this._sampleCount$.next(_)
  }

  watchSampleCount$(): Observable<number> {
    return this._sampleCount$.asObservable()
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._coreService.navigate({ path: [CORE_ROUTES.APPLICATION, ..._.path], extras: { ..._.extras } })
  }

  gotoBucketSelection(): void {
    this.navigate({ path: [], extras: {} })
  }

  gotoDetails(_: IaAnalysisModel): void {
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
