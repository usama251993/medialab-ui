import { Injectable } from '@angular/core'
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar'

import { AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { CdBucketService } from '../cd-bucket/cd-bucket.service'
import { CdAppCoreService } from '@cd-app/services/cd-app-core.service'

import { APP_ROUTES } from 'src/app/app.routes'
import { CORE_ROUTES } from '@cd-core/cd-core.routes'
import { CdAnalysisModel, CdResultModel, CdResultOverviewListModel } from '@cd-app/models/cd-result.model'
import { CdResultService } from './cd-result.service'

@Injectable({
  providedIn: 'root'
})
// export class CdResultResolveGuard implements Resolve<AppEndpointResponseModel> {
export class CdResultListResolveGuard implements Resolve<CdResultOverviewListModel> {

  constructor(
    private _router: Router,
    private _coreService: CdAppCoreService,
    private _bucketService: CdBucketService,
    private _snackbarService: MatSnackBar
  ) { }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AppEndpointResponseModel<any>> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CdResultOverviewListModel> {

    // return this._coreService.watchOverviewAvailability$().pipe(
    //   switchMap(_ => (!_)
    //     ? this._bucketService.fakeResult$()
    //     : this._coreService.watchOverviewList$()),
    //   first(),
    //   tap(_ => {
    //     this._bucketService.setDataProcessing(false)
    //     this._coreService.setOverviewAvailability(true)
    //     this._coreService.setOverviewList(_)
    //   })
    // )

    return this._bucketService.fakeResult$().pipe(
      tap(_ => {
        this._bucketService.setDataProcessing(false)
        this._coreService.setOverviewAvailability(true)
        this._coreService.setOverviewList(_)
      })
    )

    // if (!this._coreService.bIsDataAvailable)
    //   return this._bucketService.fakeResult$()

    // if (!this._coreService.bIsDataAvailable)
    //   return this._bucketService.fetchResults$(<FormData>this._router.getCurrentNavigation().extras.state)
    //     .pipe(
    //       catchError((_: HttpErrorResponse) => {
    //         // throwError(_)
    //         this._snackbarService.open(
    //           this._coreService.snackbar.message,
    //           this._coreService.snackbar.action,
    //           { ...this._coreService.snackbar.config }
    //         )
    //         this._router.navigate([APP_ROUTES.DEDUPLICATION, CORE_ROUTES.BUCKET])
    //         let _errorResponse: AppEndpointResponseModel = {
    //           status: _.status,
    //           data: null,
    //           error: { ..._ }
    //         }
    //         return of({ ..._errorResponse })
    //       }))
  }
}

@Injectable({
  providedIn: 'root'
})
// export class CdResultResolveGuard implements Resolve<AppEndpointResponseModel> {
export class CdResultResolveGuard implements Resolve<CdResultModel> {

  constructor(
    private _coreService: CdAppCoreService,
    private _resultService: CdResultService,
    private _router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CdResultModel> {

    const _analysis: CdAnalysisModel = { ...<CdAnalysisModel>this._router.getCurrentNavigation().extras.state }

    // return this._coreService.watchResultAvailability$().pipe(
    //   switchMap(_ => (!_)
    //     ? this._resultService.fakeResult$(_analysis)
    //     : this._coreService.watchResult$()),
    //   first(),
    //   tap(_ => {
    //     if (!!_) {
    //       this._resultService.setDataProcessing(false)
    //       this._coreService.setResultAvailability(true)
    //       this._coreService.setTableColumns(_analysis)
    //       this._coreService.setAnalysis(_analysis)
    //       this._coreService.setResult(_)
    //     }
    //   })
    // )

    return this._resultService.fakeResult$(_analysis).pipe(
      tap(_ => {
        if (!!_) {
          this._coreService.setDataProcessing(false)
          this._coreService.setResultAvailability(true)
          this._coreService.setTableColumns(_analysis)
          this._coreService.setAnalysis(_analysis)
          this._coreService.setResult(_)
        }
      })
    )
  }
}
