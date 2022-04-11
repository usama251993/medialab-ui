import { MatSidenav } from '@angular/material/sidenav'
import { Action } from '@ngrx/store'
import { NAVBAR_ACTIONS } from '@lm-core/state/types/lm-navbar.type'
import { LmNavbarAssetsModel } from '@lm-core/models/lm-navbar.model'

export class LmLoadNavbarAssets implements Action {
  readonly type = NAVBAR_ACTIONS.LOAD;
  constructor(public payload: { id: string }) { }
}

export class LmLoadNavbarAssetsSuccess implements Action {
  readonly type = NAVBAR_ACTIONS.LOAD_SUCCESS;
  constructor(public payload: LmNavbarAssetsModel) { }
}

export class LmLoadNavbarAssetsFail implements Action {
  readonly type = NAVBAR_ACTIONS.LOAD_FAIL;
  constructor(public payload: LmNavbarAssetsModel) { }
}

export class LmToggleSidenav implements Action {
  readonly type = NAVBAR_ACTIONS.TOGGLE_SIDENAV;
  constructor(public payload: MatSidenav) { }
}

export class LmToggleSidenavSuccess implements Action {
  readonly type = NAVBAR_ACTIONS.TOGGLE_SIDENAV_SUCCESS;
  constructor(public payload: MatSidenav) { }
}

export type LmNavbarActions =
  | LmLoadNavbarAssets
  | LmLoadNavbarAssetsSuccess
  | LmLoadNavbarAssetsFail

export type LmSidenavActions =
  | LmToggleSidenav
  | LmToggleSidenavSuccess
