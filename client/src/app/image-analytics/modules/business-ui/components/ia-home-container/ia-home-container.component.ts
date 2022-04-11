import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { IaHomeService } from '@ia-business/services/ia-home/ia-home.service'
import { IaHomeAssetsModel } from '@ia-business/models/ia-home.model'

@Component({
  selector: 'app-ia-home-container',
  template: `<app-ia-home [assets] = "assets$ | async"></app-ia-home>`
})
export class IaHomeContainerComponent implements OnInit {

  assets$: Observable<IaHomeAssetsModel>

  constructor(
    private _homeService: IaHomeService
  ) { }

  ngOnInit(): void {
    this._homeService.fetchAssets()
    this.assets$ = this._homeService.watchAssets$()
  }

}
