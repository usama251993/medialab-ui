import { Action } from '@ngrx/store'

import { LmSignupAssetsModel } from '@lm-core/models/lm-signup.model'
import { SIGNUP_ACTIONS } from '@lm-core/state/types/lm-signup.type'

export class LmLoadSignupAssets implements Action {
  readonly type = SIGNUP_ACTIONS.LOAD_ASSETS;
  constructor(public payload: { id: string }) { }
}

export class LmLoadSignupAssetsSuccess implements Action {
  readonly type = SIGNUP_ACTIONS.LOAD_ASSETS_SUCCESS;
  constructor(public payload: LmSignupAssetsModel) { }
}

export class LmLoadSignupAssetsFail implements Action {
  readonly type = SIGNUP_ACTIONS.LOAD_ASSETS_FAIL;
  constructor(public payload: LmSignupAssetsModel) { }
}

export class LmLoadSignupForm implements Action {
  readonly type = SIGNUP_ACTIONS.LOAD_FORM;
  constructor(public payload: { id: string }) { }
}

export class LmLoadSignupFormSuccess implements Action {
  readonly type = SIGNUP_ACTIONS.LOAD_FORM_SUCCESS;
  constructor(public payload: LmSignupAssetsModel) { }
}

export class LmLoadSignupFormFail implements Action {
  readonly type = SIGNUP_ACTIONS.LOAD_FORM_FAIL;
  constructor(public payload: LmSignupAssetsModel) { }
}

export type LmSignupActions =
  | LmLoadSignupAssets
  | LmLoadSignupAssetsSuccess
  | LmLoadSignupAssetsFail
  | LmLoadSignupForm
  | LmLoadSignupFormSuccess
  | LmLoadSignupFormFail
