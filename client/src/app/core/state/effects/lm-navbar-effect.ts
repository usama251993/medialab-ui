import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { map, catchError, switchMap, tap } from 'rxjs/operators'
import { Effect, Actions, ofType } from '@ngrx/effects'

import * as fromActions from '@lm-core/state/actions/lm-navbar.action'
import { NAVBAR_ACTIONS } from '@lm-core/state/types/lm-navbar.type'
import { LmNavbarService } from '@lm-core/services/lm-navbar/lm-navbar.service'

@Injectable()
export class LmNavbarEffects {

  constructor(
    private _actions$: Actions,
    private navbarService: LmNavbarService
  ) { }

  @Effect()
  eLoadNavbar$ = this._actions$.pipe(
    ofType<fromActions.LmNavbarActions>(NAVBAR_ACTIONS.LOAD),
    switchMap(_ => this.navbarService.fetchAssets(_.payload.id).pipe(
      map(_ => new fromActions.LmLoadNavbarAssetsSuccess(_)),
      catchError(__ => of(new fromActions.LmLoadNavbarAssetsFail({
        id: _.payload.id as string,
        assets: null,
        error: __
      })))
    )));

  @Effect({ dispatch: false })
  eToggleSidenav$ = this._actions$.pipe(
    ofType<fromActions.LmSidenavActions>(NAVBAR_ACTIONS.TOGGLE_SIDENAV),
    map(_ => _));
}
