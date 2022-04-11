import { Injectable } from '@angular/core'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'

import { Observable, throwError } from 'rxjs'
import { tap, catchError, first, map } from 'rxjs/operators'

import { AppSnackbarService } from '@shared/services/app-snackbar/app-snackbar.service'

import { PhPhashResultModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-result/ph-phash-result.model'
import { PhComparisonDataPointModel } from '@ph-app/models/ph-phash-app-ui/phash.model'
import { INITIAL_PHASH_OVERVIEW_FLAGS } from '@ph-app/models/ph-phash-app-ui/ph-phash-overview/ph-phash-overview.model'

import { PhPhashOverviewService } from '../../ph-phash-overview/ph-phash-overview.service'
import { PhPhashAppService } from '../../ph-phash-app.service'

@Injectable({
  providedIn: 'root'
})
export class PhPhashResultResolver implements Resolve<PhPhashResultModel> {
  constructor(
    private _overviewService: PhPhashOverviewService,
    private _appService: PhPhashAppService,
    private _snackbarService: AppSnackbarService,
    private _router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhPhashResultModel> {

    const _state: PhComparisonDataPointModel = <PhComparisonDataPointModel>this._router.getCurrentNavigation().extras.state

    if (!!_state) return this.fetchResult(_state)
    else return this.resetResult()

  }

  fetchResult(_: PhComparisonDataPointModel): Observable<PhPhashResultModel> {

    // return this._overviewService.fetchLocalResult({ ..._ }).pipe(
    return this._overviewService.fetchResult({ ..._ }).pipe(

      map(__ => __.data),

      tap(__ => {
        this._overviewService.setComponentFlags({
          ...INITIAL_PHASH_OVERVIEW_FLAGS,
          process: {
            ...INITIAL_PHASH_OVERVIEW_FLAGS.process,
            progress: false,
            success: true,
            fail: false
          }
        })
        this._appService.setResult(__)
      }),

      catchError(__ => {
        this._overviewService.setComponentFlags({
          ...INITIAL_PHASH_OVERVIEW_FLAGS,
          process: {
            ...INITIAL_PHASH_OVERVIEW_FLAGS.process,
            progress: false,
            success: false,
            fail: true
          }
        })
        this._snackbarService.showSnackbar({ message: 'Unable to view results', button: { link: null, text: 'OK!' } })
        this._appService.resetChartOverview()
        return throwError(__)
      })
    )
  }

  resetResult(): Observable<PhPhashResultModel> {
    this._appService.resetResult()
    return this._appService.watchResult$().pipe(first())
  }
}
