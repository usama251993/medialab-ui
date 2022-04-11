import { LmAuthRequestModel, LmAuthResponseModel } from './lm-auth-base.model'

interface LmSignupRequestBaseModel
  extends LmAuthRequestModel {
  givenname: string | null
  lastname: string | null
  email: string | null
  organization: string | null
  designation?: string | null
  country: string | null
  realm: string | null
}

export interface LmSignupRequestModel
  extends LmSignupRequestBaseModel { }

interface LmSignupResponseBaseModel
  extends LmAuthResponseModel { }

export interface LmSignupResponseModel
  extends LmSignupResponseBaseModel { }

export const INITIAL_SIGNUP_REQUEST: LmSignupRequestModel = {
  username: null, password: null, givenname: null, lastname: null, email: null, organization: null, designation: null, country: null, realm: null
}

export const INITIAL_SIGNUP_RESPONSE: LmSignupResponseModel = {
  error: null, pending: false
}  
