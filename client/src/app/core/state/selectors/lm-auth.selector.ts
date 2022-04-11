import { createFeatureSelector, createSelector } from '@ngrx/store'

import * as fromStore from '@lm-core/state'
import * as fromReducer from '@lm-core/state/reducers/lm-auth.reducer'

const selectFeature = createFeatureSelector(fromStore.FEATURE_NAME)

export const selectUserDict = createSelector(
  selectFeature,
  (state: fromStore.State) => fromReducer.LM_SELECT_ENTITY(state.auth))

export const selectUserID = createSelector(
  selectFeature,
  (state: fromStore.State) => fromReducer.LM_SELECT_ID(state.auth))
