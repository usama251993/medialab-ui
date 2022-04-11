import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { map, catchError, switchMap } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'

import * as fromActions from '@lm-core/state/actions/lm-signup.action'
import { SIGNUP_ACTIONS } from '@lm-core/state/types/lm-signup.type'
import { LmSignupService } from '@lm-core/services/lm-signup/lm-signup.service'

@Injectable()
export class LmSignupEffects {

  constructor(
    private _actions$: Actions,
    private signupService: LmSignupService
  ) { }

  @Effect()
  eLoadSignupAssets$ = this._actions$.pipe(
    ofType<fromActions.LmSignupActions>(SIGNUP_ACTIONS.LOAD_ASSETS),
    switchMap(_ => this.signupService.fetchAssets(_.payload.id).pipe(
      map(_ => new fromActions.LmLoadSignupAssetsSuccess(_)),
      catchError(__ => of(new fromActions.LmLoadSignupAssetsFail({
        id: _.payload.id,
        assets: null,
        form: null,
        error: __
      })))
    )));

  @Effect()
  eLoadSignupForm$ = this._actions$.pipe(
    ofType<fromActions.LmSignupActions>(SIGNUP_ACTIONS.LOAD_FORM),
    switchMap(_ => this.signupService.fetchForm(_.payload.id).pipe(
      map(_ => new fromActions.LmLoadSignupFormSuccess(_)),
      catchError(__ => of(new fromActions.LmLoadSignupFormFail({
        id: _.payload.id,
        assets: null,
        form: null,
        error: __
      })))
    )));
}
