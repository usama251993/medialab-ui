export interface PhComponentFlagModel {
  success: boolean
  fail: boolean
  progress: boolean
  visible: boolean
}

export const INITIAL_PH_COMPONENT_FLAG: PhComponentFlagModel = {
  success: false, fail: false, progress: false, visible: false
}
