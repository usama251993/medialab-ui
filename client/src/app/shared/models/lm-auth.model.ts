interface LmRequestBaseModel {
  username: string
  password: string
}

interface LmLoginRequestBaseModel
  extends LmRequestBaseModel { }

interface LmSignupRequestBaseModel
  extends LmRequestBaseModel {
  givenname: string
  lastname: string
  organization: string
  designation: string
  country: string
}

interface LmUserRequestBaseModel
  extends LmRequestBaseModel { }

export interface LmLoginRequestModel
  extends LmLoginRequestBaseModel {
  id: string
}

export interface LmSignupRequestModel
  extends LmSignupRequestBaseModel {
  id: string
}

export interface LmUserRequestModel
  extends LmUserRequestBaseModel {
  id: string
}

interface LmUserBaseModel extends LmSignupRequestBaseModel { }

export interface LmUserModel extends LmUserBaseModel {
  id: string
}

interface LmResponseBaseModel {
  pending: boolean
  error: any
}

interface LmLoginResponseBaseModel
  extends LmResponseBaseModel {
  token: string
}

interface LmSignupResponseBaseModel
  extends LmResponseBaseModel { }

interface LmUserResponseBaseModel
  extends LmResponseBaseModel {
  user: LmUserBaseModel
}

interface LmAuthResponseBaseModel
  extends LmSignupResponseBaseModel, LmLoginResponseBaseModel {
  user: LmUserBaseModel
}

export interface LmLoginResponseModel
  extends LmLoginResponseBaseModel {
  id: string
}

export interface LmSignupResponseModel
  extends LmSignupResponseBaseModel {
  id: string
}

export interface LmAuthResponseModel
  extends LmAuthResponseBaseModel {
  id: string
}

export interface LmUserResponseModel
  extends LmUserResponseBaseModel {
  id: string
}
