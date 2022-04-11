import { Action } from '@ngrx/store'

import { PRICING_ACTIONS } from '@lm-core/state/types/lm-pricing.type'
import { LmPricingModel } from '@lm-core/models/lm-pricing.model'

export class LmLoadPricingAssets implements Action {
  readonly type = PRICING_ACTIONS.LOAD;
  constructor(public payload: { id: string }) { }
}
export class LmLoadPricingAssetsSuccess implements Action {
  readonly type = PRICING_ACTIONS.LOAD_SUCCESS;
  constructor(public payload: LmPricingModel) { }
}
export class LmLoadPricingAssetsFail implements Action {
  readonly type = PRICING_ACTIONS.LOAD_FAIL;
  constructor(public payload: LmPricingModel) { }
}
export type LmPricingActions =
  | LmLoadPricingAssets
  | LmLoadPricingAssetsSuccess
  | LmLoadPricingAssetsFail
