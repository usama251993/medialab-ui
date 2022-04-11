import { EntityState, createEntityAdapter } from '@ngrx/entity'

import * as fromActions from '@lm-core/state/actions/lm-signup.action'
import { LmSignupAssetsModel } from '@lm-core/models/lm-signup.model'
import { SIGNUP_ACTIONS } from '@lm-core/state/types/lm-signup.type'

export interface State extends EntityState<LmSignupAssetsModel> { }

const adapter = createEntityAdapter<LmSignupAssetsModel>()
const INITIAL_STATE: State = adapter.getInitialState()

export function reducer(
  state: State = INITIAL_STATE,
  action: fromActions.LmSignupActions
): State {
  switch (action.type) {
    case SIGNUP_ACTIONS.LOAD_ASSETS_SUCCESS:
    case SIGNUP_ACTIONS.LOAD_ASSETS_FAIL:
    case SIGNUP_ACTIONS.LOAD_FORM_SUCCESS:
    case SIGNUP_ACTIONS.LOAD_FORM_FAIL:
      return adapter.addOne(action.payload as LmSignupAssetsModel, state)
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
