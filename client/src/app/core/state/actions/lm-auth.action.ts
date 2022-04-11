import { Action } from '@ngrx/store'

import { AUTH_ACTIONS } from '@lm-core/state/types/lm-auth.type'
import * as fromAuthModels from '@shared/models/lm-auth.model'

export class LmAuthLogin implements Action {
  readonly type = AUTH_ACTIONS.LOGIN
  constructor(public payload: fromAuthModels.LmLoginRequestModel) { }
}

export class LmAuthLoginSuccess implements Action {
  readonly type = AUTH_ACTIONS.LOGIN_SUCCESS
  constructor(public payload: fromAuthModels.LmLoginResponseModel) { }
}

export class LmAuthLoginFail implements Action {
  readonly type = AUTH_ACTIONS.LOGIN_FAIL
  constructor(public payload: fromAuthModels.LmLoginResponseModel) { }
}

export class LmAuthSignup implements Action {
  readonly type = AUTH_ACTIONS.SIGNUP
  constructor(public payload: fromAuthModels.LmSignupRequestModel) { }
}

export class LmAuthSignupSuccess implements Action {
  readonly type = AUTH_ACTIONS.SIGNUP_SUCCESS
  constructor(public payload: fromAuthModels.LmSignupResponseModel) { }
}

export class LmAuthSignupFail implements Action {
  readonly type = AUTH_ACTIONS.SIGNUP_FAIL
  constructor(public payload: fromAuthModels.LmSignupResponseModel) { }
}

export class LmAuthNavigateToLogin implements Action {
  readonly type = AUTH_ACTIONS.NAVIGATE_LOGIN
  constructor(public payload: { path: string }) { }
}

export class LmAuthNavigateToRegister implements Action {
  readonly type = AUTH_ACTIONS.NAVIGATE_SIGNUP
  constructor(public payload: { path: string }) { }
}

export class LmAuthUserContext implements Action {
  readonly type = AUTH_ACTIONS.USER_CONTEXT
  constructor(public payload: fromAuthModels.LmUserRequestModel) { }
}

export class LmAuthUserContextSuccess implements Action {
  readonly type = AUTH_ACTIONS.USER_CONTEXT_SUCCESS
  constructor(public payload: fromAuthModels.LmUserResponseModel) { }
}

export class LmAuthUserContextFail implements Action {
  readonly type = AUTH_ACTIONS.USER_CONTEXT_FAIL
  constructor(public payload: fromAuthModels.LmUserResponseModel) { }
}

export class LmAuthLogout implements Action {
  readonly type = AUTH_ACTIONS.LOGOUT
  constructor(public payload: fromAuthModels.LmUserModel) { }
}

export class LmAuthLogoutSuccess implements Action {
  readonly type = AUTH_ACTIONS.LOGOUT_SUCCESS
  constructor(public payload: fromAuthModels.LmUserModel) { }
}

export type LmAuthLoginActions =
  | LmAuthLogin
  | LmAuthLoginSuccess
  | LmAuthLoginFail

export type LmAuthSignupActions =
  | LmAuthSignup
  | LmAuthSignupSuccess
  | LmAuthSignupFail

export type LmAuthNavigationActions =
  | LmAuthNavigateToLogin
  | LmAuthNavigateToRegister

export type LmAuthUserContextActions =
  | LmAuthUserContext
  | LmAuthUserContextSuccess
  | LmAuthUserContextFail

export type LmAuthLogoutActions =
  | LmAuthLogout
  | LmAuthLogoutSuccess

export type LmAuthActions =
  | LmAuthLoginActions
  | LmAuthSignupActions
  | LmAuthNavigationActions
  | LmAuthUserContextActions
  | LmAuthLogoutActions
