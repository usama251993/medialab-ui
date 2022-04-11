import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { StFooterService } from '@st-core/services/common/st-footer/st-footer.service'
import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-st-footer-container',
  template: `<app-st-footer [assets] = "assets$ | async"
                            (triggerNavigate$)= "triggerNavigate($event)"></app-st-footer>`
})
export class StFooterContainerComponent implements OnInit {

  assets$: Observable<any>

  constructor(
    private _footerService: StFooterService
  ) { }

  ngOnInit(): void {
    this.assets$ = this._footerService.fetchAssets()
  }

  triggerNavigate(_: { path: string[], extras: NavigationExtras }) {
    if (!!_) this._footerService.navigate({ path: [..._.path], extras: {} })
  }

}
