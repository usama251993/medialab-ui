import { AppButton2Model, INITIAL_BUTTON_MODEL_2 } from '@shared/models/app-assets.model'

export interface LmFeedbackAssetsModel {
  buttons: AppButton2Model
}

export const INITIAL_CONTACT_ASSETS: LmFeedbackAssetsModel = {
  buttons: { ...INITIAL_BUTTON_MODEL_2 }
}
