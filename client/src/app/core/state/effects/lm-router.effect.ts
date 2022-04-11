import { Injectable } from '@angular/core'
import { map, tap } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'

import * as fromActions from '@lm-core/state/actions/lm-router.action'
import { ROUTER_ACTIONS } from '@lm-core/state/types/lm-router.type'
import { LmRouterService } from '@lm-core/services/lm-router/lm-router.service'


@Injectable()
export class LmRouterEffects {

  constructor(
    private _actions$: Actions,
    private _routerService: LmRouterService
  ) { }

  @Effect({ dispatch: false })
  eRouterNavigate$ = this._actions$.pipe(
    ofType<fromActions.LmRouterActions>(ROUTER_ACTIONS.GO),
    map(_ => _.payload),
    tap(_ => { this._routerService.navigate(_) }))

}
