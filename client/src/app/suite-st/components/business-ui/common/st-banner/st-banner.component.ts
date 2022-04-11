import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { AppCarouselAssetsModel, INITIAL_CAROUSEL_ASSETS_MODEL, AppCarouselConfig } from '@shared/models/components/carousel/app-carousel.model'
import { StHomeService } from '@st-core/services/business-ui/st-home/st-home.service'
import { CORE_ROUTES } from '@st-core/st-core.routes'

@Component({
  selector: 'app-st-banner',
  template: `<app-carousel-container [assets]="assets"
                                     [config]="config"
                                     (triggerNavigate$)="triggerNavigate($event)"></app-carousel-container>
`
})
export class StBannerComponent implements OnInit {

  private _assets$: BehaviorSubject<AppCarouselAssetsModel> = new BehaviorSubject<AppCarouselAssetsModel>(INITIAL_CAROUSEL_ASSETS_MODEL)

  @Input()
  set assets(value: AppCarouselAssetsModel) { this._assets$.next(value) }
  get assets(): AppCarouselAssetsModel { return this._assets$.getValue() }

  config: AppCarouselConfig

  constructor(
    private _homeService: StHomeService
  ) { }

  ngOnInit(): void {
    this.config = {
      caption: {
        alignment: 'center',
        heading: { color: '#000078', fontSize: '64px' },
        subheading: { color: '#000000', fontSize: '48px' },
        statements: { color: '#000000', fontSize: '24px' },
        backdrop: { color: null }
      }
    }
  }

  triggerNavigate($event) {
    this._homeService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }

}
