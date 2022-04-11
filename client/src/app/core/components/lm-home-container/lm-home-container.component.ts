import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { LmHomeAssetsModel } from '@lm-core/models/assets/lm-home.model'
import { LmHomeService } from '@lm-core/services/lm-home/lm-home.service'
import { CORE_ROUTES } from '@lm-core/lm-core.routes'

@Component({
  selector: 'app-lm-home-container',
  template: `<app-lm-home [assets] = "assets$ | async"
                          (triggerNavigate$)="navigate()"></app-lm-home>`
})
export class LmHomeContainerComponent implements OnInit {

  assets$: Observable<LmHomeAssetsModel>

  constructor(
    private _homeService: LmHomeService
  ) { }

  ngOnInit(): void {
    this.assets$ = this._homeService.fetchAssets()
  }

  navigate() {
    this._homeService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }
}
