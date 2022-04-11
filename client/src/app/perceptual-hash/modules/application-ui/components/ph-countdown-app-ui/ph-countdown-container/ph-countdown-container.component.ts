import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { PhAppCoreService } from '@ph-app/services/ph-app-core.service'
@Component({
  selector: 'app-ph-countdown-container',
  template: `<app-ph-countdown [chartData]        = "chartData$ | async"
                               (triggerNavigate$) = "triggerNavigate()"> </app-ph-countdown>`
})
export class PhCountDownContainerComponent implements OnInit {

  chartData$: Observable<any>

  constructor(
    private _coreService: PhAppCoreService
  ) { }

  ngOnInit(): void {
    this._coreService.fetchCountDownData()
    this.chartData$ = this._coreService.watchCountDownData$()
  }

  triggerNavigate(): void {
    this._coreService.navigate({ path: [], extras: {} })
  }

}
