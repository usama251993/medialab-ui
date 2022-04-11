import { Component, OnInit } from '@angular/core'
import { StFeatureService } from '@st-core/services/business-ui/st-feature/st-feature.service'
import { CORE_ROUTES } from '@st-core/st-core.routes'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-st-feature-container',
  template: `<app-st-feature  [assets]= "assets$ | async"
                              (triggerNavigate$) = "navigate()"> </app-st-feature>`
})
export class StFeatureContainerComponent implements OnInit {

  assets$: Observable<any>

  constructor(
    private _featureService: StFeatureService
  ) { }

  ngOnInit(): void {
    this._featureService.fetchAssets()
    this.assets$ = this._featureService.watchAssets$()
  }

  navigate() {
    this._featureService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }
}
