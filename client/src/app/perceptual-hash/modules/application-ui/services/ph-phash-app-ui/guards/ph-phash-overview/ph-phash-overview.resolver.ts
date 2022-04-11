import { Injectable } from '@angular/core'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'

import { Observable, throwError } from 'rxjs'
import { tap, catchError, first, map } from 'rxjs/operators'

import { AppSnackbarService } from '@shared/services/app-snackbar/app-snackbar.service'

import { PhPhashOverviewModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-overview/ph-phash-overview.model'
import { INITIAL_PHASH_BUCKET_FLAGS, PhPhashBucketParamModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-bucket/ph-phash-bucket.model'

import { PhPhashBucketService } from '../../ph-phash-bucket/ph-phash-bucket.service'
import { PhPhashAppService } from '../../ph-phash-app.service'

@Injectable({
  providedIn: 'root'
})
export class PhPhashOverviewResolver implements Resolve<PhPhashOverviewModel> {
  constructor(
    private _bucketService: PhPhashBucketService,
    private _appService: PhPhashAppService,
    private _snackbarService: AppSnackbarService,
    private _router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhPhashOverviewModel> {

    const _state: PhPhashBucketParamModel = <PhPhashBucketParamModel>this._router.getCurrentNavigation().extras.state

    if (!!_state) return this.fetchOverview(_state)
    else return this.resetOverview()

  }

  fetchOverview(_: PhPhashBucketParamModel): Observable<PhPhashOverviewModel> {
    this._appService.setOverviewParams(_)

    return this._bucketService.fetchChartOverview({ ..._ })
      // return this._bucketService.fetchLocalChartOverview({ ..._ })
      .pipe(

        map(__ => __.data),

        tap(__ => {
          this._bucketService.setComponentFlags({
            ...INITIAL_PHASH_BUCKET_FLAGS,
            process: {
              ...INITIAL_PHASH_BUCKET_FLAGS.process,
              progress: false,
              success: true,
              fail: false
            }
          })
          this._appService.setChartOverview(__)
        }),

        catchError(__ => {
          this._bucketService.setComponentFlags({
            ...INITIAL_PHASH_BUCKET_FLAGS,
            process: {
              ...INITIAL_PHASH_BUCKET_FLAGS.process,
              progress: false,
              success: false,
              fail: true
            }
          })
          this._snackbarService.showSnackbar({ message: 'Unable to process data', button: { link: null, text: 'OK!' } })
          this._appService.resetChartOverview()
          return throwError(__)
        })
      )
  }

  resetOverview(): Observable<PhPhashOverviewModel> {
    this._appService.resetChartOverview()
    return this._appService.watchChartOverview$().pipe(first())
  }
}
