export interface StDeviceResults {
  startTime: string
  endTime: string
  deviceId: string
  executionStatus: string
  result: string
  resultDetails: string
}

export interface StDeviceInfo {
  deviceId: string
  manufacturer: string
  model: string
  owner: string
  firmware: string
  customName: string
  inactivityTimeout: number
  isShared: boolean
  modelId: string
  platforms: string[]
  status: string
}

export interface StDeviceShortInfo {
  modelId: string
  deviceId: string
  name: string
  firmware: string
}

export type StDeviceModel =
  | StDeviceInfo
  | StDeviceResults
  | StDeviceShortInfo
