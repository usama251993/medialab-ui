import { AppFormFieldModel } from '@shared/models/app-form.model'

export interface LmLoginAssetsModel {
  id: string
  assets: {
    title: string
    login: string
    signup: string
  }
  form: {
    username: AppFormFieldModel
    password: AppFormFieldModel
  }
  error: any
}
