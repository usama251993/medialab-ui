import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { StHomeService } from '@st-core/services/business-ui/st-home/st-home.service'
import { NavigationExtras } from '@angular/router'
import { CORE_ROUTES } from '@st-core/st-core.routes'

@Component({
  selector: 'app-st-home-container',
  template: `<app-st-home [assets] = "assets$ | async"
                          (triggerNavigate$) = "navigate($event)"></app-st-home>`
})
export class StHomeContainerComponent implements OnInit {

  assets$: Observable<any>

  constructor(
    private _homeService: StHomeService
  ) { }

  ngOnInit(): void {
    this._homeService.fetchAssets()
    this.assets$ = this._homeService.watchAssets$()
  }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    if (!!_) this._homeService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }

}
