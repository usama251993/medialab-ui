import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'

import { LmFooterAssetsModel } from '@lm-core/models/lm-footer.model'

import * as fromActions from '@lm-core/state/actions/lm-footer.action'
import { FOOTER_ACTIONS } from '@lm-core/state/types/lm-footer.type'

export interface State extends EntityState<LmFooterAssetsModel> { }
const adapter: EntityAdapter<LmFooterAssetsModel> = createEntityAdapter<LmFooterAssetsModel>()

const INITIAL_STATE: State = adapter.getInitialState({})
export function reducer(
  state: State = INITIAL_STATE,
  action: fromActions.LmFooterActions
): State {
  switch (action.type) {
    case FOOTER_ACTIONS.LOAD_SUCCESS:
    case FOOTER_ACTIONS.LOAD_FAIL:
      return adapter.addOne(action.payload as LmFooterAssetsModel, state)
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
