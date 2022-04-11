import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs'

import { PhMatrixDataPointModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-overview/ph-phash-matrix.model'
import { APP_ROUTES } from '@ph-app/ph-app.routes'

import { PhAppCoreService } from '../ph-app-core.service'

import { PhPhashOverviewModel, INITIAL_PHASH_OVERVIEW } from '../../models/ph-phash-app-ui/ph-phash-overview/ph-phash-overview.model'
import { INITIAL_PHASH_RESULT, PhPhashResultModel } from '../../models/ph-phash-app-ui/ph-phash-result/ph-phash-result.model'
import { INITIAL_PHASH_BUCKET_PARAMS, PhPhashBucketParamModel } from '../../models/ph-phash-app-ui/ph-phash-bucket/ph-phash-bucket.model'

@Injectable({
  providedIn: 'root'
})
export class PhPhashAppService {

  private _chartOverview$: BehaviorSubject<PhPhashOverviewModel> = new BehaviorSubject<PhPhashOverviewModel>(INITIAL_PHASH_OVERVIEW)
  private _result$: BehaviorSubject<PhPhashResultModel> = new BehaviorSubject<PhPhashResultModel>(INITIAL_PHASH_RESULT)
  private _overviewParams$: BehaviorSubject<PhPhashBucketParamModel> = new BehaviorSubject<PhPhashBucketParamModel>(INITIAL_PHASH_BUCKET_PARAMS)

  constructor(
    private _coreService: PhAppCoreService
  ) { }

  setChartOverview(_: PhPhashOverviewModel): void {
    this._chartOverview$.next(_)
  }

  resetChartOverview(): void {
    this._chartOverview$.next({ ...INITIAL_PHASH_OVERVIEW })
  }

  watchChartOverview$(): Observable<PhPhashOverviewModel> {
    return this._chartOverview$.asObservable()
  }

  setResult(_: PhPhashResultModel): void {
    this._result$.next(_)
  }

  resetResult(): void {
    this._result$.next({ ...INITIAL_PHASH_RESULT })
  }

  watchResult$(): Observable<PhPhashResultModel> {
    return this._result$.asObservable()
  }

  setOverviewParams(_: PhPhashBucketParamModel): void {
    this._overviewParams$.next(_)
  }

  watchOverviewParams$(): Observable<PhPhashBucketParamModel> {
    return this._overviewParams$.asObservable()
  }

  navigate(_: { path: string[], extras: NavigationExtras }) {
    this._coreService.navigate({ path: [APP_ROUTES.PHASH._, ..._.path], extras: { ..._.extras } })
  }

  gotoOverview(_: PhPhashBucketParamModel): void {
    this.navigate({ path: [APP_ROUTES.PHASH.OVERVIEW], extras: { state: { ..._ } } })
  }

  gotoBucketSelection(): void {
    this.navigate({ path: [], extras: {} })
  }

  gotoResults(_: PhMatrixDataPointModel): void {
    this.navigate({ path: [APP_ROUTES.PHASH.OVERVIEW, APP_ROUTES.PHASH.RESULT], extras: { state: { ..._ } } })
  }

  gotoHome(): void {
    this._coreService.gotoHome()
  }
}
