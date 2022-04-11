import { AppButton2Model, AppOptionModel } from '@shared/models/app-assets.model'

export interface IaResultModel {
  index: number
  filename: string | null
  fileFormat: string | null
  tags: string[]
  brand: string | null
  image_type: string | null
  url: string | null
}

export interface IaAnalysisModel extends AppOptionModel {
  count: number
}

export interface IaSummaryAssetsModel {
  title: string | null
  summary: AppOptionModel[]
}

export interface IaSummaryModel {
  client_details: string | null
  bucket_location: string | null
  sample_count: number
  sample_size: string | null
  bags: number
  logos: number
  others: number
}

export type IaResultOverviewModel = {
  useCase: IaAnalysisModel
  summary: IaSummaryModel
}

export type IaResultOverviewListModel = {
  summary: IaSummaryModel
  analysis: IaAnalysisModel[]
}

export interface IaNextButtonModel {
  buttons: {
    next: AppButton2Model
    launch: AppButton2Model
    cloud: AppButton2Model
    viewPhoto: AppButton2Model
    here: AppButton2Model
    pauseCircle: AppButton2Model
    close: AppButton2Model
    chevronLeft: AppButton2Model
  }
}
