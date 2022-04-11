import { Action } from '@ngrx/store'

import { LOGIN_ACTIONS } from '@lm-core/state/types/lm-login.type'
import { LmLoginAssetsModel } from '@lm-core/models/lm-login.model'

export class LmLoadLoginAssets implements Action {
  readonly type = LOGIN_ACTIONS.LOAD_ASSETS;
  constructor(public payload: { id: string }) { }
}

export class LmLoadLoginAssetsSuccess implements Action {
  readonly type = LOGIN_ACTIONS.LOAD_ASSETS_SUCCESS;
  constructor(public payload: LmLoginAssetsModel) { }
}

export class LmLoadLoginAssetsFail implements Action {
  readonly type = LOGIN_ACTIONS.LOAD_ASSETS_FAIL;
  constructor(public payload: LmLoginAssetsModel) { }
}

export class LmLoadLoginForm implements Action {
  readonly type = LOGIN_ACTIONS.LOAD_FORM;
  constructor(public payload: { id: string }) { }
}

export class LmLoadLoginFormSuccess implements Action {
  readonly type = LOGIN_ACTIONS.LOAD_FORM_SUCCESS;
  constructor(public payload: LmLoginAssetsModel) { }
}

export class LmLoadLoginFormFail implements Action {
  readonly type = LOGIN_ACTIONS.LOAD_FORM_FAIL;
  constructor(public payload: LmLoginAssetsModel) { }
}

export type LmLoginActions =
  | LmLoadLoginAssets
  | LmLoadLoginAssetsSuccess
  | LmLoadLoginAssetsFail
  | LmLoadLoginForm
  | LmLoadLoginFormSuccess
  | LmLoadLoginFormFail
