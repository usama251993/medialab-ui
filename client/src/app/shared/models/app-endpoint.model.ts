export interface AppEndpointURLModel {
  PROTOCOL: string
  DOMAIN: string
  CONTEXT: {
    ROOT: string
    WSO2: string
    KB: string
  }
  ENDPOINT: {
    WSO2: {
      LOGIN: string
      REGISTER: string
      USER: string
    }
    KB: {
      CREATEACCOUNT: string
      ACCOUNT: string
    }
  }
}

export interface AppEndpointRequestModel {
  headers?: { [key: string]: string | number | boolean }
  auth?: {
    username: string
    password: string
  }
  params?: { [key: string]: string | number | boolean }
  data?: { [key: string]: string | number | boolean }
  route?: string
}

export interface AppEndpointResponseModel {
  status: number
  data: any | null
  error: any | null
}
