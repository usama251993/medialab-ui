import { AppButton2Model } from '@shared/models/app-assets.model'
import { LmAuthFlags, INITIAL_AUTH_FLAGS } from '../common/auth/lm-auth-flags.model'

export interface LmLoginPageAssetsModel {
  title: string | null
  login: AppButton2Model,
  // login: string | null,
  // signup: string | null
  signup: AppButton2Model
}

export const INITIAL_LOGIN_PAGE_ASSETS: LmLoginPageAssetsModel = {
  title: null,
  login: null,
  signup: null
}

export interface LmLoginComponentFlags {
  login: LmAuthFlags,
  resend: LmAuthFlags
}

export const INITIAL_COMPONENT_FLAGS: LmLoginComponentFlags = {
  login: { ...INITIAL_AUTH_FLAGS }, resend: { ...INITIAL_AUTH_FLAGS }
}
