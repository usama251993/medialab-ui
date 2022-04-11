// import { Injectable } from '@angular/core'
// import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router'

// import { EMPTY, Observable, of, throwError } from 'rxjs'
// import { tap, catchError } from 'rxjs/operators'

// import { AppSnackbarService } from '@shared/services/app-snackbar/app-snackbar.service'

// import { APP_ROUTES } from '@ph-app/ph-app.routes'
// import { INITIAL_PHASH_OVERVIEW, PhPhashOverviewModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-overview/ph-phash-overview.model'
// import { INITIAL_PHASH_BUCKET_FLAGS } from '@ph-app/models/ph-phash-app-ui/ph-phash-bucket/ph-phash-bucket.model'

// import { INITIAL_PHASH_RESULT, PhPhashResultModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-result/ph-phash-result.model'

// import { PhPhashBucketService } from '../ph-phash-bucket/ph-phash-bucket.service'
// import { PhPhashOverviewService } from '../ph-phash-overview/ph-phash-overview.service'
// import { PhPhashResultService } from '../ph-phash-result/ph-phash-result.service'
// import { PhAppCoreService } from '../../ph-app-core.service'

// @Injectable({
//   providedIn: 'root'
// })
// export class PhPhashOverviewResolve implements Resolve<PhPhashOverviewModel> {

  // constructor(
  //   private _bucketService: PhPhashBucketService,
  //   private _overviewService: PhPhashOverviewService,
  //   private _coreService: PhAppCoreService,
  //   private _snackbarService: AppSnackbarService,
  //   private _router: Router
  // ) { }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhPhashOverviewModel> {

  //   console.groupCollapsed(`[G-Ph-Phash] PhPhashOverviewResolve`)
  //   console.log(this._router.getCurrentNavigation().extras.state)
  //   console.log(route)
  //   console.log(state)
  //   console.groupEnd()

  //   const _state: PhPhashBucketParamModel = <PhPhashBucketParamModel>this._router.getCurrentNavigation().extras.state

  //   if (!!_state)
  //     return this.fetchOverview(_state)
  //   else
  //     return this.resetOverview()
  // }

  // fetchOverview(_: PhPhashBucketParamModel): Observable<PhPhashOverviewModel> {
  //   return this._bucketService.fetchLocalChartOverview({ ..._ }).pipe(
  //     tap(_ => {

  //       console.groupCollapsed(`[G-Ph-Phash] PhPhashOverviewResolve fetchOverview()`)
  //       console.log(this._router.getCurrentNavigation().extras.state)
  //       console.log(_)
  //       console.groupEnd()

  //       this._bucketService.setComponentFlags({
  //         ...INITIAL_PHASH_BUCKET_FLAGS,
  //         process: {
  //           ...INITIAL_PHASH_BUCKET_FLAGS.process,
  //           progress: false,
  //           success: true,
  //           fail: false
  //         }
  //       })
  //       this._overviewService.setChartOverviewData(_)
  //     }),
  //     catchError(__ => {
  //       this._bucketService.setComponentFlags({
  //         ...INITIAL_PHASH_BUCKET_FLAGS,
  //         process: {
  //           ...INITIAL_PHASH_BUCKET_FLAGS.process,
  //           progress: false,
  //           success: false,
  //           fail: true
  //         }
  //       })
  //       this._snackbarService.showSnackbar({ message: 'Unable to process data', button: { link: null, text: 'OK!' } })
  //       this._coreService.navigate({ path: [APP_ROUTES.PHASH.OVERVIEW], extras: {} })
  //       return throwError(__)
  //     })
  //   )
  // }

  // resetOverview(): Observable<PhPhashOverviewModel> {
  //   return of({ ...INITIAL_PHASH_OVERVIEW }).pipe(
  //     tap(_ => {
  //       console.groupCollapsed(`[G-Ph-Phash] PhPhashOverviewResolve else`)
  //       console.log(_)
  //       console.groupEnd()
  //       this._overviewService.setChartOverviewData({ ...INITIAL_PHASH_OVERVIEW })
  //     })
  //   )
  // }

// }

// export class PhPhashResultResolve implements Resolve<PhPhashResultModel> {

  // constructor(
  //   private _overviewService: PhPhashOverviewService,
  //   private _resultService: PhPhashResultService,
  //   private _coreService: PhAppCoreService,
  //   private _snackbarService: AppSnackbarService,
  //   private _router: Router
  // ) { }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhPhashResultModel> {

  //   console.groupCollapsed(`[G-Ph-Phash] PhPhashOverviewResolve`)
  //   console.log(this._router.getCurrentNavigation().extras.state)
  //   console.log(route)
  //   console.log(state)
  //   console.groupEnd()

  //   const _state: PhPhashBucketParamModel = <PhPhashBucketParamModel>this._router.getCurrentNavigation().extras.state

  //   if (!!_state)
  //     return this.fetchResult(_state)
  //   else
  //     return this.resetResult()

  // }

  // fetchResult(_: PhPhashBucketParamModel): Observable<PhPhashResultModel> {
  //   return of({ ...INITIAL_PHASH_RESULT }).pipe(
  //     tap(_ => {

  //       console.groupCollapsed(`[G-Ph-Phash] PhPhashOverviewResolve fetchOverview()`)
  //       console.log(this._router.getCurrentNavigation().extras.state)
  //       console.log(_)
  //       console.groupEnd()

  //       // this._bucketService.setComponentFlags({
  //       //   ...INITIAL_PHASH_BUCKET_FLAGS,
  //       //   process: {
  //       //     ...INITIAL_PHASH_BUCKET_FLAGS.process,
  //       //     progress: false,
  //       //     success: true,
  //       //     fail: false
  //       //   }
  //       // })
  //       // this._overviewService.setChartOverviewData(_)
  //     }),
  //     catchError(__ => {
  //       // this._bucketService.setComponentFlags({
  //       //   ...INITIAL_PHASH_BUCKET_FLAGS,
  //       //   process: {
  //       //     ...INITIAL_PHASH_BUCKET_FLAGS.process,
  //       //     progress: false,
  //       //     success: false,
  //       //     fail: true
  //       //   }
  //       // })
  //       this._snackbarService.showSnackbar({ message: 'Unable to fetch details', button: { link: null, text: 'OK!' } })
  //       this._coreService.navigate({ path: [APP_ROUTES.PHASH.RESULT], extras: {} })
  //       return throwError(__)
  //     })
  //   )
  // }

  // resetResult(): Observable<PhPhashResultModel> {
  //   return of({ ...INITIAL_PHASH_RESULT }).pipe(
  //     tap(_ => {
  //       console.groupCollapsed(`[G-Ph-Phash] PhPhashOverviewResolve else`)
  //       console.log(_)
  //       console.groupEnd()
  //       // this._overviewService.setChartOverviewData({ ...INITIAL_PHASH_OVERVIEW })
  //     })
  //   )
  // }
// }
