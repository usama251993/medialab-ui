import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'

import { LmNavbarAssetsModel } from '@lm-core/models/lm-navbar.model'

import * as fromActions from '@lm-core/state/actions/lm-navbar.action'
import { NAVBAR_ACTIONS } from '@lm-core/state/types/lm-navbar.type'

export interface State extends EntityState<LmNavbarAssetsModel> { }

const adapter: EntityAdapter<LmNavbarAssetsModel> = createEntityAdapter<LmNavbarAssetsModel>({ selectId: (navbar: LmNavbarAssetsModel) => navbar.id })
const INITIAL_STATE: State = adapter.getInitialState({})

export function reducer(
  state: State = INITIAL_STATE,
  action: fromActions.LmNavbarActions
): State {
  switch (action.type) {
    case NAVBAR_ACTIONS.LOAD_SUCCESS:
    case NAVBAR_ACTIONS.LOAD_FAIL:
      return adapter.addOne(action.payload as LmNavbarAssetsModel, state)
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
