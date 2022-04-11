import { Component, OnInit } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { PhAudioService } from '@ph-app/services/ph-audio-app-ui/ph-audio/ph-audio.service'
import { INITIAL_AUDIO_COMPARISON_DATA, INITIAL_AUDIO_COMPARISON_OVERVIEW, INITIAL_AUDIO_COMPONENT_FLAGS, PhAudioComparisonDataModel, PhAudioComparisonOverviewModel, PhAudioComparisonResultModel, PhAudioComponentFlagsModel } from '@ph-app/models/ph-audio-app-ui/ph-audio/ph-audio.model'

@Component({
  selector: 'app-ph-audio-container',
  template: `<app-ph-audio [audioOverview]  = "audioOverview$  | async"
                           [audioData]      = "audioData$      | async"
                           [componentFlags] = "componentFlags$ | async"
                           (fetchResult$)   = "fetchResult($event)"
                           (gotoHome$)      = "gotoHome()"></app-ph-audio>`
})
export class PhAudioContainerComponent implements OnInit {

  audioOverview$: BehaviorSubject<PhAudioComparisonOverviewModel> = new BehaviorSubject<PhAudioComparisonOverviewModel>(INITIAL_AUDIO_COMPARISON_OVERVIEW)
  audioData$: BehaviorSubject<PhAudioComparisonDataModel> = new BehaviorSubject<PhAudioComparisonDataModel>(INITIAL_AUDIO_COMPARISON_DATA)
  componentFlags$: Observable<PhAudioComponentFlagsModel>

  private _componentFlags: PhAudioComponentFlagsModel

  constructor(
    private _audioService: PhAudioService
  ) { }

  ngOnInit(): void {
    this.componentFlags$ = this._audioService.watchComponentFlags$()

    this._componentFlags = { ...INITIAL_AUDIO_COMPONENT_FLAGS }
    this._audioService.setComponentFlags(this._componentFlags)

    this._componentFlags = {
      ...this._componentFlags,
      overview: {
        ...this._componentFlags.overview,
        progress: true
      }
    }
    this._audioService.setComponentFlags(this._componentFlags)

    this._audioService.fetchAudioDataOverview()
      .subscribe({
        next: __ => {
          this._componentFlags = {
            ...this._componentFlags,
            result: {
              ...this._componentFlags.result
            },
            overview: {
              ...this._componentFlags.overview,
              progress: false,
              success: true,
              fail: false
            }
          }
          this._audioService.setComponentFlags(this._componentFlags)
          this.audioOverview$.next(__)
        },
        error: __ => {
          this._componentFlags = {
            ...this._componentFlags,
            result: {
              ...this._componentFlags.result
            },
            overview: {
              ...this._componentFlags.overview,
              progress: false,
              success: false,
              fail: true
            }
          }
          this._audioService.setComponentFlags(this._componentFlags)
          console.groupCollapsed('Data Fetch Failed')
          console.error(__)
          console.log(`Unable to fetch overview data`)
          console.log(`Using default values`)
          console.groupEnd()
          this.audioOverview$.next(INITIAL_AUDIO_COMPARISON_OVERVIEW)
        }
      })
  }

  fetchResult(_: PhAudioComparisonResultModel): void {
    this._componentFlags = {
      ...this._componentFlags,
      result: {
        ...this._componentFlags.result,
        progress: true
      }
    }
    this._audioService.setComponentFlags(this._componentFlags)

    this._audioService.fetchAudioDataResult(_)
      .subscribe({
        next: __ => {
          this._componentFlags = {
            ...this._componentFlags,
            result: {
              ...this._componentFlags.result,
              progress: false,
              success: true,
              fail: false
            }
          }
          this._audioService.setComponentFlags(this._componentFlags)
          this.audioData$.next(__)
        },
        error: __ => {
          this._componentFlags = {
            ...this._componentFlags,
            result: {
              ...this._componentFlags.result,
              progress: false,
              success: false,
              fail: true
            }
          }
          this._audioService.setComponentFlags(this._componentFlags)
          console.groupCollapsed('Data Fetch Failed')
          console.error(__)
          console.log(`Unable to fetch overview data`)
          console.log(`Using default values`)
          console.groupEnd()
          this.audioData$.next(INITIAL_AUDIO_COMPARISON_DATA)
        }
      })
  }

  gotoHome(): void {
    this._audioService.gotoHome()
  }
}
