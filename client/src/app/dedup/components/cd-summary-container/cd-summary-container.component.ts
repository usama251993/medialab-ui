import { Component, OnInit } from '@angular/core'
import { CdMetaInfoService } from '@cd-core/services/cd-meta-info/cd-meta-info.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-cd-summary-container',
  template: `<app-cd-summary [metaInfo] = "metaInfo$ | async"></app-cd-summary>`
})
export class CdSummaryContainerComponent implements OnInit {

  metaInfo$: Observable<{ parameter: string; count: number }[]>

  constructor(
    private _metaInfoService: CdMetaInfoService
  ) { }

  ngOnInit(): void {
    this.metaInfo$ = this._metaInfoService.fetchMetaInfo$()
  }

  // gotoSummary(): void {
  //   this._metaInfotService.gotoSummary()
  // }

}
