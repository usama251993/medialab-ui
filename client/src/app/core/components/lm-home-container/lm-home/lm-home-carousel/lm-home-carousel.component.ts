import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { AppCarouselConfig, AppCarouselAssetsModel, INITIAL_CAROUSEL_CONFIG } from '@shared/models/components/carousel/app-carousel.model'
import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-lm-home-carousel',
  template: `<app-carousel-container [assets]="assets"
                                     [config]="carouselConfig"
                                     (triggerNavigate$) = "triggerNavigate()"></app-carousel-container>
`
})
export class LmHomeCarouselComponent implements OnInit {

  private _assets$: BehaviorSubject<AppCarouselAssetsModel>

  carouselConfig: AppCarouselConfig

  @Input()
  set assets(value: AppCarouselAssetsModel) { this._assets$.next(value) }
  get assets(): AppCarouselAssetsModel { return this._assets$.getValue() }

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() {
    this._assets$ = new BehaviorSubject<AppCarouselAssetsModel>(null)
  }

  ngOnInit(): void {
    this.carouselConfig = {
      ...INITIAL_CAROUSEL_CONFIG,
      caption: {
        ...INITIAL_CAROUSEL_CONFIG.caption,
        alignment: 'full',
        heading: { color: '#000078', fontSize: '48px' },
        backdrop: { color: 'linear-gradient(135deg, rgba(175,159,172,0.5) 0%, rgba(203,163,157,0.5) 35%, rgba(225,206,204,0.5) 100%)' },
        statements: {
          color: '#000', fontSize: '24px'
        }
      }
    }
  }

  triggerNavigate() {
    this.triggerNavigate$.emit({ path: [], extras: {} })
  }

}
