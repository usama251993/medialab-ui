// interface CdResultOverviewBaseModel {

import { AppOptionModel } from '@shared/models/app-assets.model'


// }

export interface CdResultOverviewModel {
  algorithm: AppOptionModel
  progress: number
  duplicates: number
}
