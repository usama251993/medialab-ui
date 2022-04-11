export interface LmKBErrorResponseModel {
  causeClassName: string | null
  causeMessage: string | null
  className: string | null
  code: number | null
  message: string | null
  stackTrace: string[]
}

export const INITIAL_KB_ERROR: LmKBErrorResponseModel = null
