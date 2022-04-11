import { Action } from '@ngrx/store'
import { FOOTER_ACTIONS } from '@lm-core/state/types/lm-footer.type'
import { LmFooterAssetsModel } from '../../models/lm-footer.model'

export class LmLoadFooterAssets implements Action {
  readonly type = FOOTER_ACTIONS.LOAD;
  constructor(public payload: { id: string }) { }
}

export class LmLoadFooterAssetsSuccess implements Action {
  readonly type = FOOTER_ACTIONS.LOAD_SUCCESS;
  constructor(public payload: LmFooterAssetsModel) { }
}

export class LmLoadFooterAssetsFailed implements Action {
  readonly type = FOOTER_ACTIONS.LOAD_FAIL;
  constructor(public payload: LmFooterAssetsModel) { }
}
export type LmFooterActions =
  | LmLoadFooterAssets
  | LmLoadFooterAssetsSuccess
  | LmLoadFooterAssetsFailed
