import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { BehaviorSubject } from 'rxjs'

import * as _lodash from 'lodash'

import { AppTHEOplayerModel } from '@shared/models/app-theoplayer.model'
import { AppFormFieldModel, INITIAL_FORM_FIELD, INITIAL_FORM_GROUP } from '@shared/models/app-form.model'

import { PhPhashResultModel, INITIAL_PHASH_RESULT } from '@ph-app/models/ph-phash-app-ui/ph-phash-result/ph-phash-result.model'

@Component({
  selector: 'app-ph-phash-result',
  templateUrl: './ph-phash-result.component.html',
  styleUrls: ['./ph-phash-result.component.scss']
})
export class PhPhashResultComponent implements OnInit {

  private result$: BehaviorSubject<PhPhashResultModel> = new BehaviorSubject<PhPhashResultModel>(INITIAL_PHASH_RESULT)
  private _playerControlForm$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(INITIAL_FORM_GROUP)
  private _playerControlFormAssets$: BehaviorSubject<{ frameIndex: AppFormFieldModel }> = new BehaviorSubject<{ frameIndex: AppFormFieldModel }>({ frameIndex: INITIAL_FORM_FIELD })

  @Input()
  set result(value: PhPhashResultModel) { this.result$.next(value) }
  get result(): PhPhashResultModel { return this.result$.getValue() }

  @Input()
  set playerControlForm(value: FormGroup) { this._playerControlForm$.next(value) }
  get playerControlForm(): FormGroup { return this._playerControlForm$.getValue() }

  @Input()
  set playerControlFormAssets(value: { frameIndex: AppFormFieldModel }) { this._playerControlFormAssets$.next(value) }
  get playerControlFormAssets(): { frameIndex: AppFormFieldModel } { return this._playerControlFormAssets$.getValue() }

  localFlag: { bucket: boolean } = { bucket: false }

  updateInspectedVideoTime: { currentTime: number, autoplay: boolean }
  updateReferenceVideoTime: { currentTime: number, autoplay: boolean }
  inspectedVideo: AppTHEOplayerModel
  referenceVideo: AppTHEOplayerModel

  @Output() gotoOverview$: EventEmitter<void> = new EventEmitter<void>()
  @Output() gotoBucketSelection$: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
    this.result$.subscribe((_ => {
      if (_lodash.isEqual(_, INITIAL_PHASH_RESULT)) this.localFlag = { ...this.localFlag, bucket: true }
      else {
        this.localFlag = { ...this.localFlag, bucket: false }
        this.initializeTHEOplayerData({ chartData: _ })
      }
    }))
  }

  gotoOverview(): void {
    this.gotoOverview$.emit()
  }

  gotoBucketSelection(): void {
    this.gotoBucketSelection$.emit()
  }

  initializeTHEOplayerData(_: { chartData: PhPhashResultModel }) {
    this.inspectedVideo = {
      config: {
        ui: {
          width: '640px',
          height: '480px'
        }
      },
      video: {
        src: _.chartData.inspectedVideo.url,
        timecodeLocation: [],
        type: _.chartData.inspectedVideo.type,
        title: _.chartData.inspectedVideo.title,
        fps: _.chartData.inspectedVideo.fps
      }
    }

    this.referenceVideo = {
      config: {
        ui: {
          width: '640px',
          height: '480px'
        }
      },
      video: {
        src: _.chartData.referenceVideo.url,
        timecodeLocation: [],
        type: _.chartData.referenceVideo.type,
        title: _.chartData.referenceVideo.title,
        fps: _.chartData.referenceVideo.fps
      }
    }
  }

  playVideo(_: { inspectedVideoTimeCode: number; referenceVideoTimeCode: number }) {
    this.updateInspectedVideoTime = {
      currentTime: +_.inspectedVideoTimeCode.toFixed(2),
      autoplay: false
    }
    this.updateReferenceVideoTime = {
      currentTime: +_.referenceVideoTimeCode.toFixed(2),
      autoplay: false
    }
  }
}
