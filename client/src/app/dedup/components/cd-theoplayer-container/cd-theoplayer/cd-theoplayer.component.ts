import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import * as fromTHEOplayer from '@assets/scripts/lib/THEOplayer.js'
import { CdResultModel, CdResultAudioSegmentModel } from '@cd-core/models/cd-result.model'
import { CdTHEOplayerSourceModel, CdTHEOplayerConfigModel } from '@cd-core/models/cd-theoplayer.model'

@Component({
  selector: 'app-cd-theoplayer',
  template: `<div class="theoplayer-container video-js theoplayer-skin"
                  #player></div>`
})
export class CdTheoplayerComponent implements OnInit {

  private _videoElement: HTMLDivElement
  private _result$: BehaviorSubject<CdResultModel>

  private _playerConfig: CdTHEOplayerConfigModel

  @ViewChild('player', { static: true })
  private set _elRef(_: ElementRef) { this._videoElement = <HTMLDivElement>_.nativeElement }

  _THEOplayer: any
  _player: any

  @Input()
  set result(value: CdResultModel) { this._result$.next(value) };
  get result(): CdResultModel { return this._result$.getValue() };

  constructor() {
    this._result$ = new BehaviorSubject<CdResultModel>(null)
    this._playerConfig = {
      ui: { height: '480px', width: '640px' }
    }
  }

  ngOnInit(): void {
    this.createPlayer()
  }

  createPlayer() {
    const sourceObject: CdTHEOplayerSourceModel = {
      src: this.result.video_url.split('cloud.google').join('googleapis'),
      type: this.result.video_type,
    }
    let currentTime: number = (!!(<CdResultAudioSegmentModel>this.result).timecode_location)
      ? +(<string>(<CdResultAudioSegmentModel>this.result).timecode_location).split(',')[0]
      : 0

    this._player = fromTHEOplayer.Player(<HTMLDivElement>this._videoElement, this._playerConfig)
    this._player.source = {
      sources: [{ ...sourceObject }],
    }
    this._player.currentTime = currentTime

    this._player.addEventListener('error', (__) => {
      console.log(__)
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
}
