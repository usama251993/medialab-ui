import { AppButton2Model, AppButtonModel, AppOptionModel, INITIAL_BUTTON_MODEL_2, INITIAL_OPTION_MODEL } from '@shared/models/app-assets.model'
import { AppFormFieldModel, INITIAL_FORM_FIELD } from '@shared/models/app-form.model'

export interface CdBucketFormModel {
  bucket: AppFormFieldModel
  config: {
    name: string | null
    classification: AppFormFieldModel
    usecase: {
      name: string | null
      audio: AppFormFieldModel
      language: AppFormFieldModel
      textual: AppFormFieldModel
      equipment: AppFormFieldModel
      framerates: AppFormFieldModel
      timecode: AppFormFieldModel
      audioSegment: AppFormFieldModel
    }
  }
}

export interface CdBucketAssetsModel {
  bucket: {
    label: string | null
    title: string | null
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

export const INITIAL_BUCKET_FORM: CdBucketFormModel = {
  bucket: { ...INITIAL_FORM_FIELD },
  config: {
    name: null,
    classification: { ...INITIAL_FORM_FIELD },
    usecase: {
      name: null,
      audio: { ...INITIAL_FORM_FIELD },
      language: { ...INITIAL_FORM_FIELD },
      textual: { ...INITIAL_FORM_FIELD },
      equipment: { ...INITIAL_FORM_FIELD },
      framerates: { ...INITIAL_FORM_FIELD },
      timecode: { ...INITIAL_FORM_FIELD },
      audioSegment: { ...INITIAL_FORM_FIELD }
    }
  }
}

export const INITIAL_BUCKET_ASSETS: CdBucketAssetsModel = {
  bucket: { label: null, title: null, next: { ...INITIAL_BUTTON_MODEL_2 }, list: [{ ...INITIAL_OPTION_MODEL }] },
  config: {
    label: null, next: { ...INITIAL_BUTTON_MODEL_2 }, preprocess: { title: null }, usecase: { title: null }
  }
}
