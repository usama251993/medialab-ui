import { EntityState, createEntityAdapter, EntityAdapter, Update } from '@ngrx/entity'

import { LmHomeAssetsModel } from '@lm-core/models/lm-home.model'
import * as fromActions from '@lm-core/state/actions/lm-home.action'
import { HOME_ACTIONS } from '@lm-core/state/types/lm-home.type'

export interface State extends EntityState<LmHomeAssetsModel> { }

const adapter: EntityAdapter<LmHomeAssetsModel> = createEntityAdapter()

const INITIAL_STATE: State = adapter.getInitialState({})

export function reducer(
  state: State = INITIAL_STATE,
  action: fromActions.LmHomeActions
): State {
  switch (action.type) {
    case HOME_ACTIONS.LOAD_ASSETS_SUCCESS:
    case HOME_ACTIONS.LOAD_ASSETS_FAIL:
    case HOME_ACTIONS.LOAD_COOKIEBAR_ASSETS_SUCCESS:
    case HOME_ACTIONS.LOAD_COOKIEBAR_ASSETS_FAIL:
      return adapter.addOne<State>(action.payload as LmHomeAssetsModel, state)
    case HOME_ACTIONS.DISMISS_COOKIEBAR_SUCCESS:
      return adapter.updateOne<State>(action.payload as Update<LmHomeAssetsModel>, state)
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
