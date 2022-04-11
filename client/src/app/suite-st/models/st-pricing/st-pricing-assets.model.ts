import { AppButtonModel, AppImageModel, INITIAL_BUTTON_MODEL, INITIAL_IMAGE_MODEL } from '@shared/models/app-assets.model'

export interface StPricingPlanModel {
  name: string | null
  offerings: string[]
  price: string | null
  overview: string | null
  action: AppButtonModel
}

export interface StPricingModuleModel {
  _: {
    title: string | null
    plans: StPricingPlanModel[]
    actions: AppButtonModel[]
  }[]
}

export interface StPricingBannerModel {
  image: AppImageModel
  title: string | null
  statements: string[]
  actions: AppButtonModel[]
}

export interface StPricingFeatureModel {
  image: AppImageModel
  title: string | null
  statements: string[]
}

export interface StPricingFeatureContainerModel {
  overview: {
    title: string | null,
    offerings: string[]
  }
  _: StPricingFeatureModel[]
}

export interface StPricingClosureModel {
  title: string | null
  description: string | null
  actions: AppButtonModel[]
}

export interface StPricingPageAssetsModel {
  banner: StPricingBannerModel
  module: StPricingModuleModel
  feature: StPricingFeatureContainerModel
  closure: StPricingClosureModel
}

export const INITIAL_PRICING_PLAN_MODEL: StPricingPlanModel = {
  name: null, offerings: [], price: "0", overview: null, action: { ...INITIAL_BUTTON_MODEL }
}

export const INITIAL_PRICING_MODULE_MODEL: StPricingModuleModel = {
  _: [{ title: null, plans: [{ ...INITIAL_PRICING_PLAN_MODEL }], actions: [{ ...INITIAL_BUTTON_MODEL }] }]
}

export const INITIAL_PRICING_BANNER_MODEL: StPricingBannerModel = {
  image: { ...INITIAL_IMAGE_MODEL }, title: null, statements: [], actions: [{ ...INITIAL_BUTTON_MODEL }]
}

export const INITIAL_PRICING_FEATURE_MODEL: StPricingFeatureModel = {
  image: { ...INITIAL_IMAGE_MODEL }, title: null, statements: []
}

export const INITIAL_PRICING_FEATURE_CONTAINER_MODEL: StPricingFeatureContainerModel = {
  overview: { title: null, offerings: [] }, _: [{ ...INITIAL_PRICING_FEATURE_MODEL }]
}

export const INITIAL_PRICING_CLOSURE_MODEL: StPricingClosureModel = {
  actions: [{ ...INITIAL_BUTTON_MODEL }], title: null, description: null
}

export const INITIAL_PRICING_ASSETS_MODEL: StPricingPageAssetsModel = {
  banner: { ...INITIAL_PRICING_BANNER_MODEL },
  module: { ...INITIAL_PRICING_MODULE_MODEL },
  feature: { ...INITIAL_PRICING_FEATURE_CONTAINER_MODEL },
  closure: { ...INITIAL_PRICING_CLOSURE_MODEL }
}
