import { AppOptionModel, INITIAL_OPTION_MODEL } from '@shared/models/app-assets.model'
import { AppFormFieldModel, INITIAL_FORM_FIELD } from '@shared/models/app-form.model'
import { PhComponentFlagModel, INITIAL_PH_COMPONENT_FLAG } from '../../common/ph-util.model'

export interface PhPhashBucketFormModel {
  bucket: AppFormFieldModel
  submit: AppFormFieldModel
}

export interface PhPhashBucketAssetsModel {
  bucket: {
    title: string | null
    label: string | null
    list: AppOptionModel[]
  }
}

export interface PhPhashBucketParamModel {
  bucketLocation: string | null
  folderName: string | null
}

export interface PhPhashBucketFormValueModel {
  bucket: string | null
}

export interface PhPhashBucketComponentFlagModel {
  process: PhComponentFlagModel
}

export const INITIAL_PHASH_BUCKET_FORM: PhPhashBucketFormModel = {
  bucket: { ...INITIAL_FORM_FIELD }, submit: { ...INITIAL_FORM_FIELD }
}

export const INITIAL_PHASH_BUCKET_PARAMS: PhPhashBucketParamModel = {
  bucketLocation: null, folderName: null
}

export const INITIAL_PHASH_BUCKET_ASSETS: PhPhashBucketAssetsModel = {
  bucket: { title: null, label: null, list: [{ ...INITIAL_OPTION_MODEL }] }
}

export const INITIAL_PHASH_BUCKET_FLAGS: PhPhashBucketComponentFlagModel = {
  process: { ...INITIAL_PH_COMPONENT_FLAG }
}

export const INITIAL_PHASH_BUCKET_FORM_VALUE: PhPhashBucketFormValueModel = {
  bucket: null
}
