import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { CdHomeService } from '@cd-business/services/cd-home/cd-home.service'
import { CdHomeAssetsModel } from '@cd-business/models/cd-home.model'

@Component({
  selector: 'app-cd-home-container',
  template: `<app-cd-home [assets] = "assets$ | async"></app-cd-home>`
})
export class CdHomeContainerComponent implements OnInit {

  assets$: Observable<CdHomeAssetsModel>

  constructor(
    private _homeService: CdHomeService
  ) { }

  ngOnInit(): void {
    this._homeService.fetchAssets()
    this.assets$ = this._homeService.watchAssets$()
  }

}
