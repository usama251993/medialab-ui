import { AppFormFieldModel } from '@shared/models/app-form.model'

export interface LmFeedbackModel {
  firstName: AppFormFieldModel,
  lastName: AppFormFieldModel,
  country: AppFormFieldModel,
  industry: AppFormFieldModel,
  emailAddress: AppFormFieldModel,
  contactNumber: AppFormFieldModel,
  services: AppFormFieldModel,
  description: AppFormFieldModel,
  companyName: AppFormFieldModel
}
