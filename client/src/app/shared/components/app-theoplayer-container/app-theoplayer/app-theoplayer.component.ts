import { Component, OnInit, ViewChild, ElementRef, Input, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import * as fromTHEOplayer from '@assets/scripts/lib/THEOplayer.js'
import { AppTHEOplayerModel, AppTHEOplayerConfigModel, AppTHEOplayerSourceModel } from '@shared/models/app-theoplayer.model'

@Component({
  selector: 'app-theoplayer',
  template: `<div class="theoplayer-container video-js theoplayer-skin"
                  #player>
                  <span class="m-2 currentFrameHolder text-monospace" [hidden]="!currentFrame">Current Frame: {{currentFrame}}</span></div>`,
  styles: ["div.theoplayer-container { position: relative }", " span.currentFrameHolder { position: absolute; top: 0; left: 0;}"]
})
export class AppTheoplayerComponent implements OnInit {

  private _videoElement: HTMLDivElement
  private _time$: BehaviorSubject<{ currentTime: number, autoplay: boolean }> = new BehaviorSubject<{ currentTime: number, autoplay: boolean }>(null)
  private _video$: BehaviorSubject<AppTHEOplayerModel> = new BehaviorSubject<AppTHEOplayerModel>(null)
  private _bIsPaused$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  private _playerConfig: AppTHEOplayerConfigModel
  currentFrame: string

  @ViewChild('player', { static: true })
  private set _videoElRef(_: ElementRef) { this._videoElement = <HTMLDivElement>_.nativeElement }

  _THEOplayer: any
  _player: any
  _duration: number
  _fps: number

  @Input()
  set time(value: { currentTime: number, autoplay: boolean }) { this._time$.next(value) }
  get time(): { currentTime: number, autoplay: boolean } { return this._time$.getValue() }

  @Input()
  set video(value: AppTHEOplayerModel) { this._video$.next(value) }
  get video(): AppTHEOplayerModel { return this._video$.getValue() }

  @Input()
  set bIsPaused(value: boolean) { this._bIsPaused$.next(value) }
  get bIsPaused(): boolean { return this._bIsPaused$.getValue() }

  @Output() currentFrame$: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {

    this._video$.subscribe(_ => {
      if (!!this._player) { this.changeVideo(_) }
      else if (!!_) { this.createPlayer(_) }
    })

    this._bIsPaused$.subscribe(_ => {
      if (!!this._player) {
        if (_) this._player.pause()
        else this._player.play()
      }
    })

    this._time$.subscribe(_ => {
      if (!!this._player && !!_) { this.updatePlayer(_) }
    })

  }

  createPlayer(_: AppTHEOplayerModel) {
    if (!!this._player) this._player.stop()

    this._playerConfig = {
      ui: {
        width: '480px',
        height: '360px'
      }
    }

    const sourceObject: AppTHEOplayerSourceModel = {
      src: _.video.src.split('cloud.google').join('googleapis') || '',
      type: _.video.type || '',
    }

    let currentTime: number = (!!_.video.timecodeLocation) ? (_.video.timecodeLocation[0]?.start || 0) : 0

    this._player = fromTHEOplayer.Player(<HTMLDivElement>this._videoElement, this._playerConfig)

    this._player.source = {
      sources: [{ ...sourceObject }],
    }
    this._player.currentTime = currentTime

    this._player.autoplay = true

    this._player.addEventListener('timeupdate', this.timeupdate.bind(this, _))

    this._player.addEventListener('error', (__) => {
      console.error(__)
      let errorNode = this._player.element.parentNode.querySelector('.vjs-error-display .vjs-modal-dialog-content')
      console.log(errorNode)
    })

    // {
    //   src: 'https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8',
    //   type: 'application/x-mpegurl',
    //   currentTime: 150,
    //   title: 'Star Wars Reel',
    //   description: 'Star Wars Reel',
    //   duration: 211,
    //   poster: 'https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg'
    // }

  }

  timeupdate(_: AppTHEOplayerModel, $: any) {
    if (!!_.video.fps) {
      this.currentFrame = ($.currentTime * _.video.fps).toFixed(0)
      this.currentFrame$.emit(+this.currentFrame)
    }
  }

  updatePlayer(_: { currentTime: number, autoplay: boolean }) {
    this._player.pause()
    this._player.currentTime = _.currentTime
    this._player.autoplay = _.autoplay
  }

  changeVideo(_: AppTHEOplayerModel) {
    this._player.stop()

    if (!!(_.video.src)) {
      const sourceObject: AppTHEOplayerSourceModel = {
        src: _.video.src.split('cloud.google').join('googleapis') || '',
        type: 'video/mp4',
      }
      this._player.source = {
        sources: [{ ...sourceObject }],
      }
    }
    this._player.currentTime = 0
    this._player.autoplay = _.video.autoplay
  }
}
