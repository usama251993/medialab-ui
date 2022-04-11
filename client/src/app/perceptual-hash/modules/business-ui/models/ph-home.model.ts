import { AppCarouselAssetsModel, INITIAL_CAROUSEL_ASSETS_MODEL } from '@shared/models/components/carousel/app-carousel.model'

import { PhClosureAssetsModel, INITIAL_CLOSURE_ASSETS_MODEL } from '@ph-core/modules/business-ui/models/common/ph-closure.model'

export interface PhHomeAssetsModel {
  banner: AppCarouselAssetsModel
  closure: PhClosureAssetsModel
}

export const INITIAL_HOME_ASSETS_MODEL: PhHomeAssetsModel = {
  banner: { ...INITIAL_CAROUSEL_ASSETS_MODEL }, closure: { ...INITIAL_CLOSURE_ASSETS_MODEL }
}
