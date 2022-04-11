import { AppCarouselAssetsModel, INITIAL_CAROUSEL_ASSETS_MODEL } from '@shared/models/components/carousel/app-carousel.model'

import { CdClosureAssetsModel, INITIAL_CLOSURE_ASSETS_MODEL } from '@cd-business/models/common/cd-closure.model'

export interface CdHomeAssetsModel {
  banner: AppCarouselAssetsModel
  closure: CdClosureAssetsModel
}

export const INITIAL_HOME_ASSETS_MODEL: CdHomeAssetsModel = {
  banner: { ...INITIAL_CAROUSEL_ASSETS_MODEL }, closure: { ...INITIAL_CLOSURE_ASSETS_MODEL }
}
