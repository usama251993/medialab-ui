import { Action } from '@ngrx/store'
import { ROUTER_ACTIONS } from '@lm-core/state/types/lm-router.type'

export class LmGo implements Action {
  readonly type = ROUTER_ACTIONS.GO;
  constructor(public payload: { path: string }) { }
}

export type LmRouterActions =
  | LmGo
