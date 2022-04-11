interface AppFormFieldValidationModel {
  bIsMandatory: boolean
  pattern?: RegExp
}

interface AppFormFieldInitializationModel {
  value: string | number | boolean
  disabled: boolean
}

export interface AppFormFieldModel {
  name: string
  type: string
  label: string
  placeholder: string
  validation: AppFormFieldValidationModel
  initialization: AppFormFieldInitializationModel
}
