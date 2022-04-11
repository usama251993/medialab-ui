import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { AppCarouselAssetsModel, INITIAL_CAROUSEL_ASSETS_MODEL, AppCarouselConfig, INITIAL_CAROUSEL_CONFIG } from '@shared/models/components/carousel/app-carousel.model'
import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-carousel-container',
  template: `<app-carousel [assets] = "assets"
                           [config] = "config"
                           (triggerNavigate$) = "triggerNavigate($event)"></app-carousel>`
})
export class AppCarouselContainerComponent implements OnInit {

  private _assets$: BehaviorSubject<AppCarouselAssetsModel> = new BehaviorSubject<AppCarouselAssetsModel>(INITIAL_CAROUSEL_ASSETS_MODEL)
  private _config$: BehaviorSubject<AppCarouselConfig> = new BehaviorSubject<AppCarouselConfig>(INITIAL_CAROUSEL_CONFIG)

  @Input()
  set assets(value: AppCarouselAssetsModel) { this._assets$.next(value) }
  get assets(): AppCarouselAssetsModel { return this._assets$.getValue() }

  @Input()
  set config(value: AppCarouselConfig) { this._config$.next(value) }
  get config(): AppCarouselConfig { return this._config$.getValue() }

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() { }

  ngOnInit(): void {
  }

  triggerNavigate(_: { path: string[], extras: NavigationExtras }) {
    this.triggerNavigate$.emit()
  }

}
