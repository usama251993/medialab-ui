import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { AppCarouselAssetsModel, INITIAL_CAROUSEL_ASSETS_MODEL, AppCarouselConfig } from '@shared/models/components/carousel/app-carousel.model'
import { PhHomeService } from '@ph-core/modules/business-ui/services/ph-home/ph-home.service'
import { CORE_ROUTES } from '@ph-core/ph-core.routes'

@Component({
  selector: 'app-ph-banner',
  template: `<app-carousel [assets] = "assets" 
                           [config] = "config"
                           (triggerNavigate$)="triggerNavigate($event)"></app-carousel>`
})
export class PhBannerComponent implements OnInit {

  private _assets$: BehaviorSubject<AppCarouselAssetsModel> = new BehaviorSubject<AppCarouselAssetsModel>(INITIAL_CAROUSEL_ASSETS_MODEL)

  @Input()
  set assets(value: AppCarouselAssetsModel) { this._assets$.next(value) }
  get assets(): AppCarouselAssetsModel { return this._assets$.getValue() }

  config: AppCarouselConfig

  constructor(
    private _homeService: PhHomeService
  ) { }

  ngOnInit(): void {
    this.config = {
      caption: {
        alignment: 'default',
        backdrop: { color: '#00000040' },
        heading: { color: '', fontSize: '' },
        subheading: { color: '', fontSize: '' },
        statements: { color: '', fontSize: '' }
      }
    }
  }

  triggerNavigate($event) {
    this._homeService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }

}
