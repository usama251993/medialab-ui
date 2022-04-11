import { FormGroup } from '@angular/forms'

interface AppFormFieldValidationModel {
  bIsMandatory: boolean
  pattern?: RegExp | null
  min?: number | null
  max?: number | null
}

const INITIAL_FIELD_VALIDATION: AppFormFieldValidationModel = {
  bIsMandatory: false,
  pattern: /^.*$/,
  max: Infinity,
  min: -Infinity
}

interface AppFormFieldInitializationModel {
  value: string | number | boolean | null
  disabled: boolean
}

const INITIAL_FIELD_INITIALIZATION: AppFormFieldInitializationModel = {
  value: null, disabled: false
}

export interface AppFormFieldModel {
  name: string
  type: string
  label: string
  placeholder: string
  validation: AppFormFieldValidationModel
  initialization: AppFormFieldInitializationModel
}

export const INITIAL_FORM_FIELD: AppFormFieldModel = {
  name: null,
  type: null,
  label: null,
  placeholder: null,
  validation: INITIAL_FIELD_VALIDATION,
  initialization: INITIAL_FIELD_INITIALIZATION
}

export const INITIAL_FORM_GROUP: FormGroup = new FormGroup({})
