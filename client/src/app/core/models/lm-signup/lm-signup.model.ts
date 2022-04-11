import { AppFormFieldModel, INITIAL_FORM_FIELD } from '@shared/models/app-form.model'

export interface LmSignupFormAssetsModel {
  givenname: AppFormFieldModel
  lastname: AppFormFieldModel
  email: AppFormFieldModel
  password: AppFormFieldModel
  confirm: AppFormFieldModel
  organization: AppFormFieldModel
  country: AppFormFieldModel
}

export const INITIAL_SIGNUP_FORM_ASSETS: LmSignupFormAssetsModel = {
  givenname: { ...INITIAL_FORM_FIELD },
  lastname: { ...INITIAL_FORM_FIELD },
  email: { ...INITIAL_FORM_FIELD },
  password: { ...INITIAL_FORM_FIELD },
  confirm: { ...INITIAL_FORM_FIELD },
  organization: { ...INITIAL_FORM_FIELD },
  country: { ...INITIAL_FORM_FIELD }
}
