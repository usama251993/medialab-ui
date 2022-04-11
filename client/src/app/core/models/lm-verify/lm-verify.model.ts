import { AppButton2Model, INITIAL_BUTTON_MODEL_2 } from '@shared/models/app-assets.model'
import { INITIAL_AUTH_FLAGS, LmAuthFlags } from '../common/auth/lm-auth-flags.model'

export interface LmVerifyAssetsModel {
  _: {
    title: string | null,
    content: string | null
  }
  resend: {
    message: {
      _: string | null
      progress: string | null
      success: string | null
      failed: string | null
    }
    button: AppButton2Model
  }
  verify: {
    message: {
      _: string | null
      progress: string | null
      success: string | null
      failed: string | null
    }
    button: AppButton2Model
  }
}

export interface LmVerifyComponentFlags {
  resend: LmAuthFlags
  verify: LmAuthFlags
}

export const INITIAL_VERIFY_ASSETS: LmVerifyAssetsModel = {
  _: { title: null, content: null },
  resend: {
    message: { _: null, failed: null, progress: null, success: null },
    button: { ...INITIAL_BUTTON_MODEL_2 }
  },
  verify: {
    message: { _: null, failed: null, progress: null, success: null },
    button: { ...INITIAL_BUTTON_MODEL_2 }
  }
}

export const INITIAL_COMPONENT_FLAGS: LmVerifyComponentFlags = {
  resend: { ...INITIAL_AUTH_FLAGS }, verify: { ...INITIAL_AUTH_FLAGS }
}
