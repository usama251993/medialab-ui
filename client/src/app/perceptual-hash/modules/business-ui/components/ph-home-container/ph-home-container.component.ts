import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { PhHomeService } from '@ph-core/modules/business-ui/services/ph-home/ph-home.service'
import { PhHomeAssetsModel } from '@ph-core/modules/business-ui/models/ph-home.model'
import { CORE_ROUTES } from '@ph-core/ph-core.routes'

@Component({
  selector: 'app-ph-home-container',
  template: `<app-ph-home [assets] = "assets$ | async"
                          (triggerNavigate$)="navigate()"></app-ph-home>`
})
export class PhHomeContainerComponent implements OnInit {

  assets$: Observable<PhHomeAssetsModel>

  constructor(
    private _homeService: PhHomeService
  ) { }

  ngOnInit(): void {
    this._homeService.fetchAssets()
    this.assets$ = this._homeService.watchAssets$()
  }

  navigate() {
    this._homeService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }

}
