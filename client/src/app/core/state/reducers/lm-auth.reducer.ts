import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity'

import { LmAuthResponseModel } from '@shared/models/lm-auth.model'

import * as fromActions from '@lm-core/state/actions/lm-auth.action'
import { AUTH_ACTIONS } from '@lm-core/state/types/lm-auth.type'

export interface State extends EntityState<LmAuthResponseModel> { }
const adapter: EntityAdapter<LmAuthResponseModel> = createEntityAdapter<LmAuthResponseModel>()

const INITIAL_STATE: State = adapter.getInitialState()

export function reducer(
  state: State = INITIAL_STATE,
  action: fromActions.LmAuthActions
): State {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return adapter.addOne(<LmAuthResponseModel>action.payload, state)
    case AUTH_ACTIONS.USER_CONTEXT_SUCCESS:
      return adapter.upsertOne(<LmAuthResponseModel>action.payload, state)
    case AUTH_ACTIONS.LOGOUT_SUCCESS:
      return adapter.removeOne(action.payload.id, state)
    case AUTH_ACTIONS.SIGNUP_SUCCESS:
    case AUTH_ACTIONS.LOGIN_FAIL:
    case AUTH_ACTIONS.SIGNUP_FAIL:
    case AUTH_ACTIONS.USER_CONTEXT_FAIL:
    default:
      return state
  }
}

const {
  selectEntities,
  selectAll,
  selectIds
} = adapter.getSelectors()

export const LM_SELECT_ENTITY = selectEntities
export const LM_SELECT_ALL = selectAll
export const LM_SELECT_ID = selectIds
