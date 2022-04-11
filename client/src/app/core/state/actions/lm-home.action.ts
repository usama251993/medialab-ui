import { Action } from '@ngrx/store'
import { HOME_ACTIONS } from '@lm-core/state/types/lm-home.type'
import { LmHomeAssetsModel } from '@lm-core/models/lm-home.model'
import { Update } from '@ngrx/entity'

export class LmLoadHomeAssets implements Action {
  readonly type = HOME_ACTIONS.LOAD_ASSETS;
  constructor(public payload: { id: string }) { }
}

export class LmLoadHomeAssetsSuccess implements Action {
  readonly type = HOME_ACTIONS.LOAD_ASSETS_SUCCESS;
  constructor(public payload: LmHomeAssetsModel) { }
}

export class LmLoadHomeAssetsFail implements Action {
  readonly type = HOME_ACTIONS.LOAD_ASSETS_FAIL;
  constructor(public payload: LmHomeAssetsModel) { }
}

export class LmLoadCookiebarAssets implements Action {
  readonly type = HOME_ACTIONS.LOAD_COOKIEBAR_ASSETS;
  constructor(public payload: { id: string }) { }
}

export class LmLoadCookiebarAssetsSuccess implements Action {
  readonly type = HOME_ACTIONS.LOAD_COOKIEBAR_ASSETS_SUCCESS;
  constructor(public payload: LmHomeAssetsModel) { }
}

export class LmLoadCookiebarAssetsFail implements Action {
  readonly type = HOME_ACTIONS.LOAD_COOKIEBAR_ASSETS_FAIL;
  constructor(public payload: LmHomeAssetsModel) { }
}

export class LmDismissCookiebar implements Action {
  readonly type = HOME_ACTIONS.DISMISS_COOKIEBAR;
  constructor(public payload: LmHomeAssetsModel) { }
}

export class LmDismissCookiebarSuccess implements Action {
  readonly type = HOME_ACTIONS.DISMISS_COOKIEBAR_SUCCESS;
  constructor(public payload: Update<LmHomeAssetsModel>) { }
}

export type LmHomeAssetsActions =
  | LmLoadHomeAssets
  | LmLoadHomeAssetsSuccess
  | LmLoadHomeAssetsFail
  | LmLoadCookiebarAssets
  | LmLoadCookiebarAssetsSuccess
  | LmLoadCookiebarAssetsFail

export type LmHomeCookieActions =
  | LmDismissCookiebar
  | LmDismissCookiebarSuccess

export type LmHomeActions =
  | LmHomeAssetsActions
  | LmHomeCookieActions
