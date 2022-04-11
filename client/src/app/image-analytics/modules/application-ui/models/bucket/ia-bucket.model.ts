import { AppButton2Model, AppOptionModel, INITIAL_BUTTON_MODEL_2, INITIAL_OPTION_MODEL } from '@shared/models/app-assets.model'
import { AppFormFieldModel, INITIAL_FORM_FIELD } from '@shared/models/app-form.model'

export interface IaBucketFormModel {
  bucket: AppFormFieldModel
  config: {
    name: string | null
    usecase: {
      name: string | null
      object: AppFormFieldModel
      logo: AppFormFieldModel
      duplicate: AppFormFieldModel
      classify: AppFormFieldModel
    }
  }
}

export interface IaBucketAssetsModel {
  bucket: {
    label: string
    title: string
    next: AppButton2Model
    list: AppOptionModel[]
  },
  config: {
    label: string | null
    next: AppButton2Model
    preprocess: {
      title: string | null
    }
    usecase: {
      title: string | null
    }
  }
}

export const INITIAL_BUCKET_FORM: IaBucketFormModel = {
  bucket: { ...INITIAL_FORM_FIELD },
  config: {
    name: null,
    usecase: {
      name: null,
      object: { ...INITIAL_FORM_FIELD },
      logo: { ...INITIAL_FORM_FIELD },
      duplicate: { ...INITIAL_FORM_FIELD },
      classify: { ...INITIAL_FORM_FIELD }
    }
  }
}

export const INITIAL_BUCKET_ASSETS: IaBucketAssetsModel = {
  bucket: { label: null, title: null, next: { ...INITIAL_BUTTON_MODEL_2 }, list: [{ ...INITIAL_OPTION_MODEL }] },
  config: {
    label: null, next: { ...INITIAL_BUTTON_MODEL_2 }, preprocess: { title: null }, usecase: { title: null }
  }
}
