import { AppFormFieldModel, INITIAL_FORM_FIELD } from '@shared/models/app-form.model'

export interface LmLoginFormAssetsModel {
  username: AppFormFieldModel
  password: AppFormFieldModel
}

export const INITIAL_LOGIN_FORM_ASSETS: LmLoginFormAssetsModel = {
  username: INITIAL_FORM_FIELD,
  password: INITIAL_FORM_FIELD
}
