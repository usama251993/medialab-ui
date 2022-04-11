import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { AppFormFieldModel, INITIAL_FORM_FIELD, INITIAL_FORM_GROUP } from '@shared/models/app-form.model'

import { PhComparisonDataPointModel } from '@ph-app/models/ph-phash-app-ui/phash.model'

import { BehaviorSubject, Observable } from 'rxjs'

@Component({
  selector: 'app-ph-player-control',
  templateUrl: './ph-player-control.component.html',
  styleUrls: ['./ph-player-control.component.scss']
})
export class PhPlayerControlComponent implements OnInit {

  private _chartData$: BehaviorSubject<PhComparisonDataPointModel>
  private _form$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(INITIAL_FORM_GROUP)
  private _formAssets$: BehaviorSubject<{ frameIndex: AppFormFieldModel }> = new BehaviorSubject<{ frameIndex: AppFormFieldModel }>({ frameIndex: INITIAL_FORM_FIELD })

  currentFrameIndex: number = 0;
  inspectedVideoTimeCode: number = 0
  referenceVideoTimeCode: number = 0

  @Input()
  set chartData(value: PhComparisonDataPointModel) { this._chartData$.next(value) };
  get chartData(): PhComparisonDataPointModel { return this._chartData$.getValue() };

  @Input()
  set form(value: FormGroup) { this._form$.next(value) };
  get form(): FormGroup { return this._form$.getValue() };

  @Input()
  set formAssets(value: { frameIndex: AppFormFieldModel }) { this._formAssets$.next(value) }
  get formAssets(): { frameIndex: AppFormFieldModel } { return this._formAssets$.getValue() }

  @Output() playVideo$: EventEmitter<{ inspectedVideoTimeCode: number; referenceVideoTimeCode: number }>

  constructor() {
    this._chartData$ = new BehaviorSubject<PhComparisonDataPointModel>(null)
    this._form$ = new BehaviorSubject<FormGroup>(null)
    this._formAssets$ = new BehaviorSubject<{ frameIndex: AppFormFieldModel }>(null)

    this.playVideo$ = new EventEmitter<{ inspectedVideoTimeCode: number; referenceVideoTimeCode: number }>()
  }

  ngOnInit(): void {
    (<Observable<number>>this.form.get(this.formAssets.frameIndex.name).valueChanges).subscribe(_ => { this.currentFrameIndex = _ })
  }

  examineFrame() {
    this.inspectedVideoTimeCode = this.currentFrameIndex / this.chartData.inspectedVideo.fps
    this.referenceVideoTimeCode = this.currentFrameIndex / this.chartData.referenceVideo.fps
    this.playVideo()
  }

  previousFrame() {
    if (this.currentFrameIndex <= 0) this.form.get(this.formAssets.frameIndex.name).setValue(0)
    else this.form.get(this.formAssets.frameIndex.name).setValue(+this.currentFrameIndex - 1)

    this.playVideo()
  }

  nextFrame() {
    if (this.currentFrameIndex >= this.chartData.hammingDistances.length) this.form.get(this.formAssets.frameIndex.name).setValue(this.chartData.hammingDistances.length)
    else this.form.get(this.formAssets.frameIndex.name).setValue(+this.currentFrameIndex + 1)

    this.playVideo()
  }

  playVideo() {
    this.inspectedVideoTimeCode = this.currentFrameIndex / this.chartData.inspectedVideo.fps
    this.referenceVideoTimeCode = this.currentFrameIndex / this.chartData.referenceVideo.fps

    this.playVideo$.emit({
      inspectedVideoTimeCode: this.inspectedVideoTimeCode,
      referenceVideoTimeCode: this.referenceVideoTimeCode
    })
  }

}
