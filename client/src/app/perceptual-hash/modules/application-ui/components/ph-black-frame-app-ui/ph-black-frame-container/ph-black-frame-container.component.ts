import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { PhAppCoreService } from '@ph-app/services/ph-app-core.service'

@Component({
  selector: 'app-ph-black-frame-container',
  template: `<app-ph-black-frame [chartData]        = "chartData$ | async"
                                 (triggerNavigate$) = "triggerNavigate()"></app-ph-black-frame>`
})
export class PhBlackFrameContainerComponent implements OnInit {

  chartData$: Observable<any>

  constructor(
    private _coreService: PhAppCoreService
  ) { }

  ngOnInit(): void {
    this._coreService.fetchBlackFrameData()
    this.chartData$ = this._coreService.watchBlackFrameData$()
  }

  triggerNavigate(): void {
    this._coreService.navigate({ path: [], extras: {} })
  }

}
