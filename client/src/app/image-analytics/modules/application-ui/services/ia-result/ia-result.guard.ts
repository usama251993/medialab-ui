import { Injectable } from '@angular/core'
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar'

import { AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { IaBucketService } from '../ia-bucket/ia-bucket.service'
import { IaAppCoreService } from '@ia-app/services/ia-app-core.service'

import { APP_ROUTES } from 'src/app/app.routes'
import { CORE_ROUTES } from '@ia-core/ia-core.routes'
import { IaAnalysisModel, IaResultModel, IaResultOverviewListModel } from '@ia-app/models/ia-result.model'
import { IaResultService } from './ia-result.service'

@Injectable({
  providedIn: 'root'
})
// export class IaResultResolveGuard implements Resolve<AppEndpointResponseModel> {
export class IaResultListResolveGuard implements Resolve<IaResultOverviewListModel> {

  constructor(
    private _router: Router,
    private _coreService: IaAppCoreService,
    private _bucketService: IaBucketService,
    private _snackbarService: MatSnackBar
  ) { }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AppEndpointResponseModel> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IaResultOverviewListModel> {

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
// export class IaResultResolveGuard implements Resolve<AppEndpointResponseModel> {
export class IaResultResolveGuard implements Resolve<IaResultModel> {

  constructor(
    private _coreService: IaAppCoreService,
    private _resultService: IaResultService,
    private _router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IaResultModel> {

    const _analysis: IaAnalysisModel = { ...<IaAnalysisModel>this._router.getCurrentNavigation().extras.state }

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
    console.log(_analysis)
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
