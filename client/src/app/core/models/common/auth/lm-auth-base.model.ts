interface LmAuthRequestBaseModel {
  username: string | null
  password: string | null
}

export interface LmAuthRequestModel extends LmAuthRequestBaseModel { }

interface LmAuthResponseBaseModel {
  pending: boolean
  error: any | null
}

export interface LmAuthResponseModel extends LmAuthResponseBaseModel { }

export interface LmVerifyRequestModel {
  code: string | null
  properties: any[]
}

export const INITIAL_AUTH_REQUEST: LmAuthRequestModel = {
  username: null, password: null
}

export const INITIAL_AUTH_RESPONSE: LmAuthResponseModel = {
  error: null, pending: false
}

export const INITIAL_VERIFY_REQUEST: LmVerifyRequestModel = {
  code: null, properties: []
}
