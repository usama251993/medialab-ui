import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { switchMap, map, catchError } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'

import * as fromActions from '@lm-core/state/actions/lm-login.action'
import { LOGIN_ACTIONS } from '@lm-core/state/types/lm-login.type'
import { LmLoginService } from '@lm-core/services/lm-login/lm-login.service'

@Injectable()
export class LmLoginEffects {
  constructor(
    private _actions$: Actions,
    private loginService: LmLoginService
  ) { }

  @Effect()
  eLoadAssets$ = this._actions$.pipe(
    ofType<fromActions.LmLoginActions>(LOGIN_ACTIONS.LOAD_ASSETS),
    switchMap(_ => this.loginService.fetchAssets(_.payload.id).pipe(
      map(_ => new fromActions.LmLoadLoginAssetsSuccess(_)),
      catchError(__ => of(new fromActions.LmLoadLoginAssetsFail({
        id: _.payload.id,
        assets: null,
        form: null,
        error: __,
      })))
    )));

  @Effect()
  eLoadForm$ = this._actions$.pipe(
    ofType<fromActions.LmLoginActions>(LOGIN_ACTIONS.LOAD_FORM),
    switchMap(_ => this.loginService.fetchForm(_.payload.id).pipe(
      map(_ => new fromActions.LmLoadLoginFormSuccess(_)),
      catchError(__ => of(new fromActions.LmLoadLoginFormFail({
        id: _.payload.id,
        assets: null,
        form: null,
        error: __,
      })))
    )));
}
