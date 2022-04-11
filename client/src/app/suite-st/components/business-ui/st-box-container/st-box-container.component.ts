import { Component, OnInit } from '@angular/core'
import { StBoxService } from '@st-core/services/business-ui/st-box/st-box.service'
import { CORE_ROUTES } from '@st-core/st-core.routes'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-st-box-container',
  template: `<app-st-box  [assets] = "assets$ | async"
                          (triggerNavigate$) = "navigate()"></app-st-box>`
})
export class StBoxContainerComponent implements OnInit {

  assets$: Observable<any>

  constructor(
    private _boxService: StBoxService
  ) { }

  ngOnInit(): void {
    this._boxService.fetchAssets()
    this.assets$ = this._boxService.watchAssets$()
  }

  navigate() {
    this._boxService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }
}
