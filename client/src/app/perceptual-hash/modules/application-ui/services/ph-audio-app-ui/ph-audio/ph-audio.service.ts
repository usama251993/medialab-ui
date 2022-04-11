import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'

import { INITIAL_AUDIO_COMPONENT_FLAGS, PhAudioComparisonDataModel, PhAudioComparisonOverviewModel, PhAudioComparisonResultModel, PhAudioComponentFlagsModel } from '@ph-core/modules/application-ui/models/ph-audio-app-ui/ph-audio/ph-audio.model'
import { PhAppCoreService } from '../../ph-app-core.service'

@Injectable({
  providedIn: 'root'
})
export class PhAudioService {

  private _componentFlags$: BehaviorSubject<PhAudioComponentFlagsModel> = new BehaviorSubject<PhAudioComponentFlagsModel>(INITIAL_AUDIO_COMPONENT_FLAGS)

  constructor(
    private _coreService: PhAppCoreService,
    private _endpointService: AppEndpointService
  ) { }

  fetchAudioDataOverview(): Observable<PhAudioComparisonOverviewModel> {
    return this._endpointService.triggerLocalJSONGetRequest<PhAudioComparisonOverviewModel>({ endpoint: 'assets/perceptual-hash/audio/overview/audio-overview.json' })
      .pipe(catchError(__ => throwError(__)))
  }

  fetchAudioDataResult(_: PhAudioComparisonResultModel): Observable<PhAudioComparisonDataModel> {
    return this._endpointService.triggerLocalJSONGetRequest<PhAudioComparisonDataModel>({ endpoint: `assets/perceptual-hash/audio/comparison/${_.tag}.json` })
      .pipe(catchError(__ => throwError(__)))
  }

  setComponentFlags(_: PhAudioComponentFlagsModel): void {
    this._componentFlags$.next(_)
  }

  watchComponentFlags$(): Observable<PhAudioComponentFlagsModel> {
    return this._componentFlags$.asObservable()
  }

  gotoHome(): void {
    this._coreService.gotoHome()
  }

}
