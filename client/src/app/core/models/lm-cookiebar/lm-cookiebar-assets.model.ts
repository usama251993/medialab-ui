import { AppButton2Model, INITIAL_BUTTON_MODEL_2 } from '@shared/models/app-assets.model'

export interface LmCookiebarAssetsModel {
  policies: {
    label: string
    link: string
  }[]
  message: string
  buttons: AppButton2Model[]

}

export const INITIAL_COOKIEBAR_ASSETS: LmCookiebarAssetsModel = {
  policies: [{ label: null, link: null }],
  message: null,
  buttons: [{ ...INITIAL_BUTTON_MODEL_2 }]
}
