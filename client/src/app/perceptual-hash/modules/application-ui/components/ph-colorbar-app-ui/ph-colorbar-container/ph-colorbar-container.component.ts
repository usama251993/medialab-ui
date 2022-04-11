import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { PhAppCoreService } from '@ph-app/services/ph-app-core.service'
@Component({
  selector: 'app-ph-colorbar-container',
  template: `<app-ph-colorbar [chartData]        = "chartData$ | async"
                              (triggerNavigate$) = "triggerNavigate()"></app-ph-colorbar>`
})
export class PhColorbarContainerComponent implements OnInit {

  chartData$: Observable<any>

  constructor(
    private _coreService: PhAppCoreService
  ) { }

  ngOnInit(): void {
    this._coreService.fetchColorBarData()
    this.chartData$ = this._coreService.watchColorBarData$()
  }

  triggerNavigate(): void {
    this._coreService.navigate({ path: [], extras: {} })
  }

}
