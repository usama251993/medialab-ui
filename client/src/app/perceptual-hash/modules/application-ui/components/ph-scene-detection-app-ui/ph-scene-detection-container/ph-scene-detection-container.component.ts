import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { PhAppCoreService } from '@ph-app/services/ph-app-core.service'
@Component({
  selector: 'app-ph-scene-detection-container',
  template: `<app-ph-scene-detection [chartData]        = "chartData$ | async"
                                     (triggerNavigate$) = "triggerNavigate()"> </app-ph-scene-detection>`
})
export class PhSceneDetectionContainerComponent implements OnInit {

  chartData$: Observable<any>

  constructor(
    private _coreService: PhAppCoreService
  ) { }

  ngOnInit(): void {
    this._coreService.fetchSceneDetectionData()
    this.chartData$ = this._coreService.watchSceneDetectionData$()
  }

  triggerNavigate(): void {
    this._coreService.navigate({ path: [], extras: {} })
  }

}
