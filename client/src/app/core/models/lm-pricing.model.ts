interface LmSubscriptionModel {
  charge: number
  frequency: string
  currency: string
}

interface LmPlanModel {
  title: string
  subscription: LmSubscriptionModel
  nTesters: number
  nConcurrentTests: number
  versioning: {
    nCount: number
    bIsShareable: boolean
  }
  nTestTime: number
  nStorageSpace: number
  nDevices: number
  nTestTimeLimit: number
  nStorageRetention: number
}

export interface LmPricingModel {
  id: string
  assets: {
    plans: LmPlanModel[]
  }
  error: any
}
