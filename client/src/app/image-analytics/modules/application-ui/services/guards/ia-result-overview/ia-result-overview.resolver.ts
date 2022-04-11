import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'

import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { IaResultOverviewListModel } from '@ia-app/models/ia-result.model'
import { IaAppCoreService } from '../../ia-app-core.service'
import { IaBucketService } from '../../ia-bucket/ia-bucket.service'


@Injectable({
  providedIn: 'root'
})
export class IaResultOverviewResolver implements Resolve<IaResultOverviewListModel> {
  constructor(
    private _coreService: IaAppCoreService,
    private _bucketService: IaBucketService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IaResultOverviewListModel> {
    return this._bucketService.fakeResult$().pipe(
      tap(_ => {
        this._bucketService.setDataProcessing(false)
        this._coreService.setOverviewAvailability(true)
        this._coreService.setOverviewList(_)
        this._coreService.setSampleCount(_.summary.sample_count)
      })
    )
  }
}
