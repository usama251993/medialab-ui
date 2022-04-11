import { AppButtonModel, INITIAL_BUTTON_MODEL } from '@shared/models/app-assets.model'

export interface IaClosureAssetsModel {
  title: string | null
  description: string | null
  actions: AppButtonModel[]
}

export const INITIAL_CLOSURE_ASSETS_MODEL: IaClosureAssetsModel = {
  title: null, description: null, actions: [{ ...INITIAL_BUTTON_MODEL }]
}
