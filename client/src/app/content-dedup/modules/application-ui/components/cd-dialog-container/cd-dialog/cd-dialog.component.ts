import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { CdNextButtonModel, CdResultModel } from '@cd-app/models/cd-result.model'
import { AppTHEOplayerModel } from '@shared/models/app-theoplayer.model'

@Component({
  selector: 'app-cd-dialog',
  templateUrl: './cd-dialog.component.html',
  styleUrls: ['./cd-dialog.component.scss']
})
export class CdDialogComponent implements OnInit {

  private _result$: BehaviorSubject<CdResultModel>
  private _assets$: BehaviorSubject<CdNextButtonModel>

  @Input()
  set result(value: CdResultModel) { this._result$.next(value) }
  get result(): CdResultModel { return this._result$.getValue() }

  @Input()
  set assets(value: CdNextButtonModel) { this._assets$.next(value) }
  get assets(): CdNextButtonModel { return this._assets$.getValue() }

  firstVideo: AppTHEOplayerModel
  secondVideo: AppTHEOplayerModel

  bIsPaused: boolean

  @Output() closeDialog$: EventEmitter<void>


  constructor() {
    this._result$ = new BehaviorSubject<CdResultModel>(null)
    this._assets$ = new BehaviorSubject<CdNextButtonModel>(null)
    this.closeDialog$ = new EventEmitter<void>()

  }

  ngOnInit(): void {
    this._result$.subscribe(_ => {
      this.bIsPaused = false
      this.initializeTHEOplayer(_)
    })
  }

  initializeTHEOplayer(_: CdResultModel) {
    const _defaultConfig: AppTHEOplayerModel['config'] = {
      ui: {
        width: '400px',
        height: '300px'
      }
    }

    this.firstVideo = {
      config: { ..._defaultConfig },
      video: {
        // src: _.first_video_url,
        src: _.video_url,
        type: _.video_type,
        timecodeLocation: [],
        autoplay: false
      }
    }
    this.secondVideo = {
      config: { ..._defaultConfig },
      video: {
        // src: _.second_video_url,
        src: _.video_url,
        type: _.video_type,
        timecodeLocation: [],
        autoplay: false
      }
    }
  }

  playVideos() {
    this.bIsPaused = !(this.bIsPaused)
  }

  closeDialog(): void {
    this.closeDialog$.emit()
  }

}
