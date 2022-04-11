import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { AppTHEOplayerModel } from '@shared/models/app-theoplayer.model'

import { PhAudioComparisonOverviewModel, PhAudioComparisonResultModel, INITIAL_AUDIO_COMPARISON_OVERVIEW, PhAudioComparisonDataModel, INITIAL_AUDIO_COMPARISON_DATA, PhAudioComponentFlagsModel, INITIAL_AUDIO_COMPONENT_FLAGS } from '@ph-core/modules/application-ui/models/ph-audio-app-ui/ph-audio/ph-audio.model'

@Component({
  selector: 'app-ph-audio',
  templateUrl: './ph-audio.component.html',
  styleUrls: ['./ph-audio.component.scss']
})
export class PhAudioComponent implements OnInit {

  private _audioOverview$: BehaviorSubject<PhAudioComparisonOverviewModel> = new BehaviorSubject<PhAudioComparisonOverviewModel>(INITIAL_AUDIO_COMPARISON_OVERVIEW)
  private _audioData$: BehaviorSubject<PhAudioComparisonDataModel> = new BehaviorSubject<PhAudioComparisonDataModel>(INITIAL_AUDIO_COMPARISON_DATA)
  private _componentFlags$: BehaviorSubject<PhAudioComponentFlagsModel> = new BehaviorSubject<PhAudioComponentFlagsModel>(INITIAL_AUDIO_COMPONENT_FLAGS)

  inspectedVideo: AppTHEOplayerModel
  referenceVideo: AppTHEOplayerModel

  selectedResult: PhAudioComparisonResultModel

  updateTime: { currentTime: number, autoplay: boolean }

  @Input()
  set audioOverview(value: PhAudioComparisonOverviewModel) { this._audioOverview$.next(value) }
  get audioOverview(): PhAudioComparisonOverviewModel { return this._audioOverview$.getValue() }

  @Input()
  set audioData(value: PhAudioComparisonDataModel) { this._audioData$.next(value) }
  get audioData(): PhAudioComparisonDataModel { return this._audioData$.getValue() }

  @Input()
  set componentFlags(value: PhAudioComponentFlagsModel) { this._componentFlags$.next(value) }
  get componentFlags(): PhAudioComponentFlagsModel { return this._componentFlags$.getValue() }

  @Output() fetchResult$: EventEmitter<PhAudioComparisonResultModel> = new EventEmitter<PhAudioComparisonResultModel>()
  @Output() gotoHome$: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
    this._audioOverview$.subscribe(_ => { this.selectedResult = null })
    this._audioData$.subscribe(_ => { this.setTHEOplayerData(_) })
  }

  setTHEOplayerData(_: PhAudioComparisonDataModel) {
    this.inspectedVideo = {
      config: {
        ui: { width: '480px', height: '360px' }
      },
      video: {
        src: _.inspectedVideo.url,
        type: _.inspectedVideo.type
      }
    }

    this.referenceVideo = {
      config: {
        ui: { width: '480px', height: '360px' }
      },
      video: {
        src: _.referenceVideo.url,
        type: _.referenceVideo.type
      }
    }
  }

  fetchResult(_: PhAudioComparisonResultModel): void {
    this.selectedResult = { ..._ }
    this.fetchResult$.emit(_)
  }

  updatePlayerTime(_: number) {
    this.updateTime = {
      currentTime: + _.toFixed(2),
      autoplay: true
    }
  }

  gotoHome(): void {
    this.gotoHome$.emit()
  }
}
