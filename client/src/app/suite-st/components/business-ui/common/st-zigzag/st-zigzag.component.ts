import { Component, Input, OnInit } from '@angular/core'
import { AppZigzagAssetsModel, AppZigzagConfigModel, INITIAL_ZIGZAG_ASSETS_MODEL } from '@shared/models/components/zigzag/app-zigzag.model'
import { StHomeService } from '@st-core/services/business-ui/st-home/st-home.service'
import { CORE_ROUTES } from '@st-core/st-core.routes'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-st-zigzag',
  template: `
  <div class="container">
    <app-zigzag-container [assets] = "assets" 
                          [config] = "config"
                          (triggerNavigate$)="triggerNavigate($event)"></app-zigzag-container>
  </div>
  `
})
export class StZigzagComponent implements OnInit {

  private _assets$: BehaviorSubject<AppZigzagAssetsModel> = new BehaviorSubject<AppZigzagAssetsModel>(INITIAL_ZIGZAG_ASSETS_MODEL)

  @Input()
  set assets(value: AppZigzagAssetsModel) { this._assets$.next(value) }
  get assets(): AppZigzagAssetsModel { return this._assets$.getValue() }

  config: AppZigzagConfigModel

  constructor(
    private _homeService: StHomeService
  ) { }

  ngOnInit() { }


  triggerNavigate($event) {
    this._homeService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }
}
