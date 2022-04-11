import { AppButtonModel, INITIAL_BUTTON_MODEL } from '@shared/models/app-assets.model'

export interface PhClosureAssetsModel {
  title: string | null
  description: string | null
  actions: AppButtonModel[]
}

export const INITIAL_CLOSURE_ASSETS_MODEL: PhClosureAssetsModel = {
  title: null, description: null, actions: [{ ...INITIAL_BUTTON_MODEL }]
}
