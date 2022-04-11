import { Action } from '@ngrx/store'
import { KB_ACTIONS } from '../types/lm-killbill.type'

export class LmKbCreateAccount implements Action {
  readonly type = KB_ACTIONS.CREATE_ACCOUNT;
  constructor(public payload: any) { }
}

export class LmKbCreateAccountSuccess implements Action {
  readonly type = KB_ACTIONS.CREATE_ACCOUNT_SUCCESS;
  constructor(public payload: any) { }
}

export class LmKbCreateAccountFail implements Action {
  readonly type = KB_ACTIONS.CREATE_ACCOUNT_FAIL;
  constructor(public payload: any) { }
}

export type LmKbActions =
  | LmKbCreateAccount
  | LmKbCreateAccountSuccess
  | LmKbCreateAccountFail
