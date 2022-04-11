import { StAppConfigOverride, StAggregatedResult } from './st-app.model';

export interface StRunTestPack extends StAggregatedResult {
  effectiveAppConfig: StAppConfigOverride
  metadata: StRunTestPackMetadata
  includeChangelist: boolean
  testPackId: string
  tests: [{
    executionStatus: string
    exit: boolean
    failure: boolean
    fatal: boolean
    planned: boolean
    running: boolean
    success: boolean
    testId: string
    testRunId: string
    warning: boolean
  }]
}

export interface StRunTestPackMetadata {
  version: string
  hash: string
  link: string
}

export interface StTestPack {
  name: string
  models: [{
    modelId: string
    firmware: string
  }]
  devices: [{
    deviceId: string
  }]
  id?: number
  active: boolean
  configId: string
  tests: {
    byTags: string[]
  }
  planning: {
    daysOfWeek: number[]
    hours: number[]
    minutes: number[]
  }
  meta?: {
    plannerType?: string
  }
  screenshots?: string
  notifications: {
    reportFirstErrorForDevice: boolean
    reportSummary: boolean
    email: boolean
    slack: boolean
    emailAddresses?: string[]
  }
}

export interface StTestPackReduced {
  name: string
  models: [{
    modelId: string
    firmware: string
  }]
  devices: [{
    deviceId: string
  }]
}

export interface StTestPackTriggerResult {
  testRunId: string
  testId: string
  definitionVersion: number
}

export type StTestPackModel =
  | StTestPack
  | StRunTestPack
  | StRunTestPackMetadata
  | StTestPackTriggerResult
  | StTestPackReduced


