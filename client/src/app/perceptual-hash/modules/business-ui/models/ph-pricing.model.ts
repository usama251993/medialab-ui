import { AppCarouselAssetsModel, INITIAL_CAROUSEL_ASSETS_MODEL } from '@shared/models/components/carousel/app-carousel.model'
import { AppButton2Model, INITIAL_BUTTON_MODEL_2 } from '@shared/models/app-assets.model'

import { PhClosureAssetsModel, INITIAL_CLOSURE_ASSETS_MODEL } from './common/ph-closure.model'

export interface PhPricingPlanModel {
  name: string | null
  offerings: string[]
  price: string | null
  overview: string | null
  actions: AppButton2Model[]
}

export interface PhPricingModuleAssetsModel {
  _: {
    title: string | null
    plans: PhPricingPlanModel[]
  }[]
}

export interface PhPricingPageAssetsModel {
  banner: AppCarouselAssetsModel
  module: PhPricingModuleAssetsModel
  closure: PhClosureAssetsModel
}

export const INITIAL_PRICING_PLAN_MODEL: PhPricingPlanModel = {
  name: null, actions: [{ ...INITIAL_BUTTON_MODEL_2 }], offerings: [], overview: null, price: null
}

export const INITIAL_PRICING_ASSETS_MODEL: PhPricingModuleAssetsModel = {
  _: [{ title: null, plans: [{ ...INITIAL_PRICING_PLAN_MODEL }] }]
}

export const INITIAL_PRICING_PAGE_ASSETS_MODEL: PhPricingPageAssetsModel = {
  banner: { ...INITIAL_CAROUSEL_ASSETS_MODEL }, module: { ...INITIAL_PRICING_ASSETS_MODEL }, closure: { ...INITIAL_CLOSURE_ASSETS_MODEL }
}
