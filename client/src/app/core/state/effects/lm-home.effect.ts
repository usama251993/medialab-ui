import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { map, catchError, switchMap } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'

import * as fromActions from '@lm-core/state/actions/lm-home.action'
import { HOME_ACTIONS } from '@lm-core/state/types/lm-home.type'
import { LmHomeService } from '@lm-core/services/lm-home/lm-home.service'

@Injectable()
export class LmHomeEffects {
  constructor(
    private _actions$: Actions,
    private homeService: LmHomeService
  ) { }

  @Effect()
  eLoadHomeAssets$ = this._actions$.pipe(
    ofType<fromActions.LmHomeAssetsActions>(HOME_ACTIONS.LOAD_ASSETS),
    switchMap(_ => this.homeService.fetchAssets(_.payload.id).pipe(
      map(_ => new fromActions.LmLoadHomeAssetsSuccess(_)),
      catchError(__ => of(new fromActions.LmLoadHomeAssetsFail({
        id: _.payload.id,
        assets: null,
        cookiebar: null,
        error: __
      })))
    )));

  @Effect()
  eLoadCookiebarAssets$ = this._actions$.pipe(
    ofType<fromActions.LmHomeAssetsActions>(HOME_ACTIONS.LOAD_COOKIEBAR_ASSETS),
    switchMap(_ => this.homeService.fetchCookiebarAssets(_.payload.id).pipe(
      map(_ => new fromActions.LmLoadCookiebarAssetsSuccess(_)),
      catchError(__ => of(new fromActions.LmLoadCookiebarAssetsFail({
        id: _.payload.id,
        assets: null,
        cookiebar: null,
        error: __
      })))
    )));

  @Effect()
  eDismissCookiebar$ = this._actions$.pipe(
    ofType<fromActions.LmHomeCookieActions>(HOME_ACTIONS.DISMISS_COOKIEBAR),
    switchMap(_ => this.homeService.dismissCookiebar(_ as fromActions.LmDismissCookiebar).pipe(
      map(_ => new fromActions.LmDismissCookiebarSuccess(_))
    )));
}
