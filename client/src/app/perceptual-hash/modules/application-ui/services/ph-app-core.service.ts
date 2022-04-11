import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, Observable } from 'rxjs'

import { BlackFrameData, SceneDetectionData, CountDownData, BarChartData, PhAssetsModel } from '@ph-app/models/ph-phash-app-ui/phash.model'

import { PhCoreService } from '@ph-core/services/ph-core.service'
import { CORE_ROUTES } from '@ph-core/ph-core.routes'

@Injectable({
  providedIn: 'root'
})
export class PhAppCoreService {

  private _barChartData$: BehaviorSubject<BarChartData> = new BehaviorSubject<BarChartData>(null)
  private _sceneDetectionData$: BehaviorSubject<SceneDetectionData> = new BehaviorSubject<SceneDetectionData>(null)
  private _countDownData$: BehaviorSubject<CountDownData> = new BehaviorSubject<CountDownData>(null)
  private _blackFrameData$: BehaviorSubject<BlackFrameData> = new BehaviorSubject<BlackFrameData>(null)
  private _audioDiffData$: BehaviorSubject<BlackFrameData> = new BehaviorSubject<any>(null)
  private _buttonAsset$: BehaviorSubject<PhAssetsModel> = new BehaviorSubject<PhAssetsModel>(null)

  private _buttonAsset: PhAssetsModel

  constructor(
    private _http: HttpClient,
    private _coreService: PhCoreService
  ) {

    this._buttonAsset = {
      buttons: {
        back: {
          text: "chevron_left",
          link: null,
          appearance: 'raised',
          color: 'primary',
          type: 'button',
          disabled: false
        }
      }
    }
  }

  fetchColorBarData() {
    this._http.get<BarChartData>('assets/phash/colorBar.json').subscribe(_ => {
      this._barChartData$.next({ ..._ })
    })
  }

  watchColorBarData$(): Observable<BarChartData> {
    return this._barChartData$.asObservable()
  }

  fetchCountDownData() {
    this._http.get<CountDownData>('assets/phash/countDown.json').subscribe(_ => {
      this._countDownData$.next({ ..._ })
    })
  }

  watchCountDownData$(): Observable<CountDownData> {
    return this._countDownData$.asObservable()
  }

  fetchSceneDetectionData() {
    this._http.get<SceneDetectionData>('assets/phash/scene_detection.json').subscribe(_ => {
      this._sceneDetectionData$.next({ ..._ })
    })
  }

  watchSceneDetectionData$(): Observable<SceneDetectionData> {
    return this._sceneDetectionData$.asObservable()
  }

  fetchBlackFrameData() {
    this._http.get<BlackFrameData>('assets/phash/blackFrame.json').subscribe(_ => {
      this._blackFrameData$.next({ ..._ })
    })
  }

  watchAudioDiffData$(): Observable<any> {
    return this._audioDiffData$.asObservable()
  }

  fetchAudioDiffData() {
    this._http.get<any>('assets/phash/test1_audiodiff.json').subscribe(_ => {
      this._audioDiffData$.next({ ..._ })
    })
  }

  watchBlackFrameData$(): Observable<BlackFrameData> {
    return this._blackFrameData$.asObservable()
  }

  navigate(_: { path: string[], extras: NavigationExtras }) {
    this._coreService.navigate({ path: [CORE_ROUTES.APPLICATION, ..._.path], extras: { ..._.extras } })
  }

  setAssetModel(): void {
    this._buttonAsset$.next(this._buttonAsset)
  }

  watchAssetModel(): Observable<PhAssetsModel> {
    return this._buttonAsset$.asObservable()
  }

  gotoHome(): void {
    this.navigate({ path: [], extras: {} })
  }
}
