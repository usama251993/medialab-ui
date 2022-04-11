import { LmAuthRequestModel, LmAuthResponseModel } from './lm-auth-base.model'

interface LmLoginRequestBaseModel
  extends LmAuthRequestModel { }

export interface LmLoginRequestModel
  extends LmLoginRequestBaseModel {
}

interface LmLoginResponseBaseModel
  extends LmAuthResponseModel {
  token: string | null
}

export interface LmLoginResponseModel
  extends LmLoginResponseBaseModel { }

export const INITIAL_LOGIN_REQUEST: LmLoginRequestModel = {
  username: null, password: null
}

export const INITIAL_LOGIN_RESPONSE: LmLoginResponseModel = {
  error: null, pending: false, token: null
}
