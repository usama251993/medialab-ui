import { AppFormFieldModel } from '@shared/models/app-form.model'

export interface LmContactModel {
  firstName: AppFormFieldModel,
  lastName: AppFormFieldModel,
  country: AppFormFieldModel,
  industry: AppFormFieldModel,
  emailAddress: AppFormFieldModel,
  contactNumber: AppFormFieldModel,
  services: AppFormFieldModel,
  description: AppFormFieldModel,
  referredBy: AppFormFieldModel,
  companyName: AppFormFieldModel
}
