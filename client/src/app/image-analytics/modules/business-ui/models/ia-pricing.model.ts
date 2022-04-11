import { AppCarouselAssetsModel, INITIAL_CAROUSEL_ASSETS_MODEL } from '@shared/models/components/carousel/app-carousel.model'
import { AppButtonModel, INITIAL_BUTTON_MODEL } from '@shared/models/app-assets.model'

import { IaClosureAssetsModel, INITIAL_CLOSURE_ASSETS_MODEL } from './common/ia-closure.model'

export interface IaPricingPlanModel {
  name: string | null
  offerings: string[]
  price: string | null
  overview: string | null
  actions: AppButtonModel[]
}

export interface IaPricingModuleAssetsModel {
  _: {
    title: string | null
    plans: IaPricingPlanModel[]
  }[]
}

export interface IaPricingPageAssetsModel {
  banner: AppCarouselAssetsModel
  module: IaPricingModuleAssetsModel
  closure: IaClosureAssetsModel
}

export const INITIAL_PRICING_PLAN_MODEL: IaPricingPlanModel = {
  name: null, actions: [{ ...INITIAL_BUTTON_MODEL }], offerings: [], overview: null, price: null
}

export const INITIAL_PRICING_ASSETS_MODEL: IaPricingModuleAssetsModel = {
  _: [{ title: null, plans: [{ ...INITIAL_PRICING_PLAN_MODEL }] }]
}

export const INITIAL_PRICING_PAGE_ASSETS_MODEL: IaPricingPageAssetsModel = {
  banner: { ...INITIAL_CAROUSEL_ASSETS_MODEL }, module: { ...INITIAL_PRICING_ASSETS_MODEL }, closure: { ...INITIAL_CLOSURE_ASSETS_MODEL }
}
