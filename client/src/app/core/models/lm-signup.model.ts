import { AppFormFieldModel } from '@shared/models/app-form.model'

export interface LmSignupAssetsModel {
  id: string
  assets: {
    title: string
    login: string
    signup: string
    passwordPolicy: {
      conditions: {
        policy: string
        statement: string
        bIsValid: boolean
      }[]
    }
  }
  form: {
    givenname: AppFormFieldModel
    lastname: AppFormFieldModel
    email: AppFormFieldModel
    password: AppFormFieldModel
    confirm: AppFormFieldModel
    organization: AppFormFieldModel
    country: AppFormFieldModel
    designation: AppFormFieldModel
  },
  error: any
}
