import { AppButton2Model, INITIAL_BUTTON_MODEL_2 } from '@shared/models/app-assets.model'

export interface LmPaymentMethodAssetsModel {
  buttons: AppButton2Model
}

export const INITIAL_PAYMENT_METHOD_ASSETS: LmPaymentMethodAssetsModel = {
  buttons: { ...INITIAL_BUTTON_MODEL_2 }
}
