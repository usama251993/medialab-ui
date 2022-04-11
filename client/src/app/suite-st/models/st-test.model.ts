import { StAppConfig } from './st-app.model';
import { StDeviceResults, StDeviceShortInfo } from './st-device.model';

export interface StLineResult {
  lineId?: string
  result: string
  timeStarted: string
  timeFinished: string
  fileName?: string
  lineNumber?: number
  columnNumber?: number
  errorType?: string
  actualValue?: {}
  results?: [{}]
}

export interface StTestResult {
  testId?: string
  executionStatus: string
  overallResult: string
  effectiveAppConfig?: StAppConfig
  results?: StDeviceResults
}

export interface StTestRun {
  testRunId: string
  devices: StDeviceShortInfo[]
  executionStatus: string
  result: string
  startTime: string
  endTime: string
}

export interface StTestScenario {
  testId: string
  title: string
  latestRevisionTime: string
  latestRevisionAuthor: StLatestRevisionAuthor
  tags: string[]
}

export interface StLatestRevisionAuthor {
  name: string
  email: string
}

export interface StTestScenarioDefinition {
  testId: string
  latestRevisionTime: string
  latestRevisionAuthor: StLatestRevisionAuthor
  title: string
  definition: StTestLine[]
  description: string
}

export interface StTestLine {
  type: string
  condition: {}
  count: number
  delay: number
  excluded: boolean
  ids: string[]
  lineId: string
  negateCondition: boolean
  then: string
  fatal: boolean
}

export type StTestModel =
  | StTestLine
  | StTestScenario
  | StTestScenarioDefinition
  | StLatestRevisionAuthor
  | StTestRun
  | StTestResult
  | StLineResult
