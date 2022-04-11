import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { map, catchError, switchMap } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'

import * as fromActions from '@lm-core/state/actions/lm-pricing.action'
import { PRICING_ACTIONS } from '@lm-core/state/types/lm-pricing.type'
import { LmPricingService } from '@lm-core/services/lm-pricing/lm-pricing.service'

@Injectable()
export class LmPricingEffects {

  constructor(
    private _actions$: Actions,
    private pricingService: LmPricingService
  ) { }

  @Effect()
  eLoadPricing$ = this._actions$.pipe(
    ofType<fromActions.LmPricingActions>(PRICING_ACTIONS.LOAD),
    switchMap(_ => this.pricingService.fetchAssets(_.payload.id).pipe(
      map(_ => new fromActions.LmLoadPricingAssetsSuccess(_)),
      catchError(__ => of(new fromActions.LmLoadPricingAssetsFail({
        id: _.payload.id,
        assets: null,
        error: __
      })))
    )));
}
