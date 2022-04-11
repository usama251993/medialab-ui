export interface StAggregatedResult {
  testPackId: string
  testPackName: string
  created: string
  initiatedBy: {
    name?: string
    type?: string
    email?: string
  }
  round: number
  testPackRunId: string
  numberOfResults: number
  duration: number
  executionStatus: string
  overallResult: string
}

export interface StAppModel {
  title: string
  appId: string
  versions: [
    {
      access: string
      clean: boolean
      id: string
      isDefault: boolean
      name: string
    }
  ]
}

export interface StAppFinishedTestPackModel {
  created: string | number
  duration: number
  executionStatus: string
  initiatedBy: {
    type: string
    name?: string
    email?: string
  }
  numberOfResults: number
  overallResult?: string
  round: number
  testPackId: number
  testPackName: string
  testPackRunId: string
}

export interface StAppConfig {
  url: string
  platform: string
  suitestify: boolean
  domainList: string[]
  learnDomains: boolean
  domainCandidates: string[]
  notDomains: string[]
  freezeRules: [{
    methods: string[]
    url: string
    type: string
    toUrl: string
    active: boolean
  }]
  codeOverrides: {
    description: string
  }
  configVariables: [{
    description: string
    key: string
    value: string
  }]
  overrideOpenApp: string
  rokuType: string
  launchActivity: string
}

export interface StAppConfigOverride {
  url: string
  suitestify: boolean
  domainList: string[]
  freezeRules: [{
    methods: string
    url: string
    tyoe: string
    toUrl: string
  }]
  codeOverrides: {}
  configVariables: [{
    key: string
    value: string
  }]
  overrideOpenApp: string
}

export interface StAppNotFound {
  errortype?: string
}

export type StApplicationModel =
  | StAppModel
  | StAppFinishedTestPackModel
  | StAppConfigOverride
  | StAppNotFound
  | StAggregatedResult
