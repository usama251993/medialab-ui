import { AppCarouselAssetsModel, INITIAL_CAROUSEL_ASSETS_MODEL } from '@shared/models/components/carousel/app-carousel.model'

import { IaClosureAssetsModel, INITIAL_CLOSURE_ASSETS_MODEL } from '@ia-business/models/common/ia-closure.model'

export interface IaHomeAssetsModel {
  banner: AppCarouselAssetsModel
  closure: IaClosureAssetsModel
}

export const INITIAL_HOME_ASSETS_MODEL: IaHomeAssetsModel = {
  banner: { ...INITIAL_CAROUSEL_ASSETS_MODEL }, closure: { ...INITIAL_CLOSURE_ASSETS_MODEL }
}
