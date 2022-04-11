import { LmAuthRequestModel, LmAuthResponseModel } from './lm-auth-base.model'
import { LmSignupRequestModel } from './lm-auth-signup.model'

interface LmUserBaseModel extends LmSignupRequestModel {
  [key: string]: string | Date | boolean | null
}

interface LmUserRequestBaseModel
  extends LmAuthRequestModel { }

export interface LmUserRequestModel
  extends LmUserRequestBaseModel { }

export interface LmUserModel extends LmUserBaseModel { }

interface LmUserResponseBaseModel
  extends LmAuthResponseModel {
  user: LmUserModel
}

export interface LmUserResponseModel
  extends LmUserResponseBaseModel { }

export const INITIAL_USER_REQUEST_MODEL: LmUserRequestModel = {
  username: null, password: null
}
export const INITIAL_USER_MODEL: LmUserModel = {
  username: null, password: null, givenname: null, lastname: null, email: null, organization: null, designation: null, country: null, realm: null
}
export const INITIAL_USER_RESPONSE_MODEL: LmUserResponseModel = {
  error: null, pending: false, user: { ...INITIAL_USER_MODEL }
}
