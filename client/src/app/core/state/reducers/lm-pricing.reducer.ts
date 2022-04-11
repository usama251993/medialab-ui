import { EntityState, createEntityAdapter } from '@ngrx/entity'

import { LmPricingModel } from '@lm-core/models/lm-pricing.model'
import * as fromActions from '@lm-core/state/actions/lm-pricing.action'
import { PRICING_ACTIONS } from '@lm-core/state/types/lm-pricing.type'

export interface State extends EntityState<LmPricingModel> { }

const adapter = createEntityAdapter<LmPricingModel>()
const INITIAL_STATE: State = adapter.getInitialState()

export function reducer(
  state: State = INITIAL_STATE,
  action: fromActions.LmPricingActions
): State {
  switch (action.type) {
    case PRICING_ACTIONS.LOAD_SUCCESS:
    case PRICING_ACTIONS.LOAD_FAIL:
      return adapter.addOne(action.payload as LmPricingModel, state)
    default:
      return state
  }
}

const {
  selectEntities,
  selectAll
} = adapter.getSelectors()

export const LM_SELECT_ENTITY = selectEntities
export const LM_SELECT_ALL = selectAll
