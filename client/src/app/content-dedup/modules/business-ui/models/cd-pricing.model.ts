import { AppCarouselAssetsModel, INITIAL_CAROUSEL_ASSETS_MODEL } from '@shared/models/components/carousel/app-carousel.model'
import { AppButtonModel, INITIAL_BUTTON_MODEL } from '@shared/models/app-assets.model'

import { CdClosureAssetsModel, INITIAL_CLOSURE_ASSETS_MODEL } from './common/cd-closure.model'

export interface CdPricingPlanModel {
  name: string | null
  offerings: string[]
  price: string | null
  overview: string | null
  actions: AppButtonModel[]
}

export interface CdPricingModuleAssetsModel {
  _: {
    title: string | null
    plans: CdPricingPlanModel[]
  }[]
}

export interface CdPricingPageAssetsModel {
  banner: AppCarouselAssetsModel
  module: CdPricingModuleAssetsModel
  closure: CdClosureAssetsModel
}

export const INITIAL_PRICING_PLAN_MODEL: CdPricingPlanModel = {
  name: null, actions: [{ ...INITIAL_BUTTON_MODEL }], offerings: [], overview: null, price: null
}

export const INITIAL_PRICING_ASSETS_MODEL: CdPricingModuleAssetsModel = {
  _: [{ title: null, plans: [{ ...INITIAL_PRICING_PLAN_MODEL }] }]
}

export const INITIAL_PRICING_PAGE_ASSETS_MODEL: CdPricingPageAssetsModel = {
  banner: { ...INITIAL_CAROUSEL_ASSETS_MODEL }, module: { ...INITIAL_PRICING_ASSETS_MODEL }, closure: { ...INITIAL_CLOSURE_ASSETS_MODEL }
}
