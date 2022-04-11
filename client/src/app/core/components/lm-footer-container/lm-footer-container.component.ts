import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { LmFooterAssetsModel } from '@lm-core/models/assets/lm-footer.model'
import { LmFooterService } from '@lm-core/services/lm-footer/lm-footer.service'
import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-lm-footer-container',
  template: `<app-lm-footer [assets] = "assets$ | async"
                            (triggerNavigate$)= "triggerNavigate($event)"></app-lm-footer>`
})
export class LmFooterContainerComponent implements OnInit {

  assets$: Observable<LmFooterAssetsModel>

  constructor(
    private _footerService: LmFooterService
  ) { }

  ngOnInit(): void {
    this.assets$ = this._footerService.fetchAssets()
  }

  triggerNavigate(_: { path: string[], extras: NavigationExtras }) {
    if (!!_) this._footerService.navigate({ path: [..._.path], extras: {} })
  }
}
