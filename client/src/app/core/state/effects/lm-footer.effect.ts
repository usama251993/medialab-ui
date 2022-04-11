import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { map, catchError, switchMap } from 'rxjs/operators'
import { Effect, Actions, ofType } from '@ngrx/effects'

import * as fromActions from '@lm-core/state/actions/lm-footer.action'
import { FOOTER_ACTIONS } from '@lm-core/state/types/lm-footer.type'
import { LmFooterService } from '@lm-core/services/lm-footer/lm-footer.service'

@Injectable()
export class LmFooterEffects {

  constructor(
    private _actions$: Actions,
    private footerService: LmFooterService
  ) { }

  @Effect()
  eLoadFooter$ = this._actions$.pipe(
    ofType<fromActions.LmFooterActions>(FOOTER_ACTIONS.LOAD),
    switchMap(_ => this.footerService.fetchAssets(_.payload.id).pipe(
      map(_ => new fromActions.LmLoadFooterAssetsSuccess(_)),
      catchError(__ => of(new fromActions.LmLoadFooterAssetsFailed({
        id: _.payload.id,
        assets: null,
        error: __
      })))
    )));
}
