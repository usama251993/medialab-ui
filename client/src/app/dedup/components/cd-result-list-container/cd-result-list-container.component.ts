import { Component, OnInit } from '@angular/core'
import { Observable, of } from 'rxjs'

import { CdResultListService } from '@cd-core/services/cd-result-list/cd-result-list.service'
import { CdResultOverviewModel } from '@cd-core/models/cd-result-overview.model'
import { CdCoreService } from '@cd-core/services/cd-core.service'
import { CdMetaInfoService } from '@cd-core/services/cd-meta-info/cd-meta-info.service'
import { CanComponentDeactivate } from '@cd-core/services/cd-result-list/cd-result-list.guard'

@Component({
  selector: 'app-cd-results-list-container',
  template: `<app-cd-result-list [bucketForm]           = "bucketForm$  | async"
                                 [useCaseList]          = "useCaseList$ | async"
                                 (showMetaInfo$)        = "showMetaInfo()"
                                 (gotoBucketSelection$) = "gotoBucketSelection()"></app-cd-result-list>`
})
export class CdResultListContainerComponent implements OnInit, CanComponentDeactivate {

  useCaseList$: Observable<CdResultOverviewModel[]>
  bucketForm$: Observable<FormData>

  constructor(
    private _coreService: CdCoreService,
    private _resultService: CdResultListService,
    private _metaInfoService: CdMetaInfoService
  ) { }

  ngOnInit(): void {
    this.useCaseList$ = this._resultService.fetchResultList$()
    this.bucketForm$ = this._resultService.fetchBucketForm$()
    this._coreService.bIsDataAvailable = true
  }

  canDeactivate(): Observable<boolean> {
    console.log('CanDeactivate in component')
    return of(false)
  }

  gotoBucketSelection(): void {
    this._resultService.gotoBucketSelection()
  }

  showMetaInfo(): void {
    this._metaInfoService.gotoSummary()
  }

}
