import { AppButton2Model } from '@shared/models/app-assets.model';

export interface LmSignupPageAssetsModel {
  title: string | null
  // login: string | null
  // signup: string | null
  login: AppButton2Model | null
  signup: AppButton2Model | null
  passwordPolicy: {
    conditions: {
      policy: string | null
      statement: string | null
      bIsValid: boolean
    }[]
  }
}

export const INITIAL_SIGNUP_PAGE_ASSETS: LmSignupPageAssetsModel = {
  title: null, login: null, signup: null,
  passwordPolicy: {
    conditions: [{ policy: null, statement: null, bIsValid: false }]
  }
}
