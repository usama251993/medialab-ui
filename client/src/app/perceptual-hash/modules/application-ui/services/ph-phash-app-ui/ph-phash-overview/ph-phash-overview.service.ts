import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'
import { AppEndpointRequestModel, AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { COMMON_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

import { INITIAL_PHASH_OVERVIEW_FLAGS, PhPhashOverviewComponentFlagModel, PhPhashOverviewModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-overview/ph-phash-overview.model'
import { PhComparisonDataPointModel } from '@ph-app/models/ph-phash-app-ui/phash.model'
import { PhPhashResultModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-result/ph-phash-result.model'
import { PhMatrixDataModel, PhMatrixComparisonModel, INITIAL_PH_MATRIX_DATA, PhMatrixVideoModel, PhMatrixDataPointModel, INITIAL_PH_MATRIX_DATAPOINT } from '@ph-app/models/ph-phash-app-ui/ph-phash-overview/ph-phash-matrix.model'

import { PhPhashAppService } from '../ph-phash-app.service'

@Injectable({
  providedIn: 'root'
})
export class PhPhashOverviewService {

  private _matrixData$: BehaviorSubject<PhMatrixDataModel> = new BehaviorSubject<PhMatrixDataModel>(INITIAL_PH_MATRIX_DATA)
  private _matrixDataPoint$: BehaviorSubject<PhMatrixDataPointModel> = new BehaviorSubject<PhMatrixDataPointModel>(INITIAL_PH_MATRIX_DATAPOINT)
  private _componentFlags$: BehaviorSubject<PhPhashOverviewComponentFlagModel> = new BehaviorSubject<PhPhashOverviewComponentFlagModel>(INITIAL_PHASH_OVERVIEW_FLAGS)

  constructor(
    private _appService: PhPhashAppService,
    private _endpointService: AppEndpointService
  ) { }

  fetchResult(_: PhComparisonDataPointModel): Observable<AppEndpointResponseModel<PhPhashResultModel>> {

    let endpoint: string = this._endpointService.getEndpoint({
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.PHASH,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.PHASH.FETCHRESULT
    })
    const reqBody: AppEndpointRequestModel = {
      auth: { username: null, password: null },
      headers: {},
      data: {},
      params: { inspectedVideoIndex: _.inspectedVideo.inspectedVideoIndex, referenceVideoIndex: _.referenceVideo.inspectedVideoIndex },
      route: null
    }

    return this._endpointService.triggerPostRequest<PhPhashResultModel>({ endpoint, reqBody })

  }

  fetchLocalResult(_: PhComparisonDataPointModel): Observable<PhPhashResultModel> {

    const endpoint: string = `assets/perceptual-hash/phash/comparison/test-${_.inspectedVideo.title.split('Test')[1][0]}/${_.inspectedVideo.title}_${_.referenceVideo.title}.json`
    return this._endpointService.triggerLocalJSONGetRequest<PhPhashResultModel>({ endpoint })
  }

  watchChartOverview$(): Observable<PhPhashOverviewModel> {
    return this._appService.watchChartOverview$()
  }

  prepareMatrixData(_: PhPhashOverviewModel): void {
    const bucket: string = _.bucket
    const videos: PhMatrixVideoModel[] = _.videos.map(__ => ({ title: __.title, extension: __.extension, url: __.url, duration: __.duration, fps: __.fps, type: __.type, index: __.index, inspectedVideoIndex: __.inspectedVideoIndex }))
    const comparisons: PhMatrixComparisonModel[] = _.comparisons.map(__ => ({ index: __.id, inspectedVideoIndex: __.inspectedVideoIndex, referenceVideoIndex: __.referenceVideoIndex, similarityPercentage: __.similarityPercentage, meanHammingDistance: __.meanHammingDistance, inference: __.inference }))
    this._matrixData$.next({ bucket, videos, comparisons })
  }

  watchMatrixData$(): Observable<PhMatrixDataModel> {
    return this._matrixData$.asObservable()
  }

  setDataPoint(_: PhMatrixDataPointModel): void {
    this._matrixDataPoint$.next(_)
  }

  watchMatrixDataPoint$(): Observable<PhMatrixDataPointModel> {
    return this._matrixDataPoint$.asObservable()
  }

  setComponentFlags(_: PhPhashOverviewComponentFlagModel) {
    this._componentFlags$.next(_)
  }

  watchComponentFlags$(): Observable<PhPhashOverviewComponentFlagModel> {
    return this._componentFlags$.asObservable()
  }

  gotoBucketSelection(): void {
    this._appService.gotoBucketSelection()
  }

  gotoResults(_: PhMatrixDataPointModel): void {
    this._appService.gotoResults(_)
  }
}
