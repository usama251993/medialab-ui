export interface LmWSO2ErrorResponseModel {
  code: number | string | null
  description: string | null
  message: string | null
  properties: { [key: string]: any } | null
  resend: {
    message: {
      _: string
      failed: string
      success: string
    }
  }
}

export const INITIAL_WSO2_ERROR: LmWSO2ErrorResponseModel = null

