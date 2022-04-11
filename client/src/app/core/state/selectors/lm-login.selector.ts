import { createFeatureSelector, createSelector } from '@ngrx/store'

import * as fromStore from '@lm-core/state'
import * as fromReducer from '@lm-core/state/reducers/lm-login.reducer'

const selectFeature = createFeatureSelector(fromStore.FEATURE_NAME)

export const selectAssets = createSelector(
  selectFeature,
  (state: fromStore.State) => fromReducer.LM_SELECT_ENTITY(state.login)
)
