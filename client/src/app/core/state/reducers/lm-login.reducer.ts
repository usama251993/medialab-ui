import { EntityState, createEntityAdapter } from '@ngrx/entity'

import { LmLoginAssetsModel } from '@lm-core/models/lm-login.model'
import * as fromActions from '@lm-core/state/actions/lm-login.action'
import { LOGIN_ACTIONS } from '@lm-core/state/types/lm-login.type'

export interface State extends EntityState<LmLoginAssetsModel> { }

const adapter = createEntityAdapter<LmLoginAssetsModel>()
const INITIAL_STATE: State = adapter.getInitialState()

export function reducer(
  state: State = INITIAL_STATE,
  action: fromActions.LmLoginActions
): State {
  switch (action.type) {
    case LOGIN_ACTIONS.LOAD_ASSETS_SUCCESS:
    case LOGIN_ACTIONS.LOAD_ASSETS_FAIL:
    case LOGIN_ACTIONS.LOAD_FORM_SUCCESS:
    case LOGIN_ACTIONS.LOAD_FORM_FAIL:
      return adapter.addOne(action.payload as LmLoginAssetsModel, state)
    default:
      return state
  }
}

const { selectEntities, selectAll } = adapter.getSelectors()

export const LM_SELECT_ENTITY = selectEntities
export const LM_SELECT_ALL = selectAll
