export interface LmAuthFlags {
  progress: boolean
  success: boolean
  fail: boolean
  visible: boolean
}

export const INITIAL_AUTH_FLAGS: LmAuthFlags = {
  progress: false, fail: false, success: false, visible: false
}
