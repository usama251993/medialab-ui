import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { AppTHEOplayerModel } from '@shared/models/app-theoplayer.model'

@Component({
  selector: 'app-theoplayer-container',
  template: `<app-theoplayer [bIsPaused] = "bIsPaused"
                             [time]    = "time"
                             [video]    = "video"
                             (currentFrame$) = "currentFrame($event)"></app-theoplayer>`
})
export class AppTheoplayerContainerComponent implements OnInit {

  private _time$: BehaviorSubject<{ currentTime: number, autoplay: boolean }> = new BehaviorSubject<{ currentTime: number, autoplay: boolean }>(null)
  private _video$: BehaviorSubject<AppTHEOplayerModel> = new BehaviorSubject<AppTHEOplayerModel>(null)
  private _bIsPaused$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  @Input()
  set video(value: AppTHEOplayerModel) { this._video$.next(value) }
  get video(): AppTHEOplayerModel { return this._video$.getValue() }

  @Input()
  set time(value: { currentTime: number, autoplay: boolean }) { this._time$.next(value) }
  get time(): { currentTime: number, autoplay: boolean } { return this._time$.getValue() }

  @Input()
  set bIsPaused(value: boolean) { this._bIsPaused$.next(value) }
  get bIsPaused(): boolean { return this._bIsPaused$.getValue() }

  @Output() currentFrame$: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void { }

  currentFrame($event: number) {
    this.currentFrame$.emit($event)
  }

}
