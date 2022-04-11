import { AppButtonModel, AppImageModel } from '@shared/models/app-assets.model'

interface LmHomeAssetsCarouselItemModel {
  image: AppImageModel
  buttons: AppButtonModel[]
  text?: {
    heading: string
    subheading?: string
    description: string
  }
}

interface LmHomeAssetsOfferingItemModel {
  title: string
  summary: string[]
  image: AppImageModel
  buttons: AppButtonModel[]
  video?: { link: string }
}

interface LmHomeAssetsSolutionItemModel {
  title: string
  summary: string[]
  buttons: AppButtonModel[]
}

interface LmHomeAssetsAboutItemModel {
  title: string
  statements: string[]
}

interface LmHomeAssetsCustomerItemModel {
  image: AppImageModel
  link: string
  label: string
}

export interface LmHomeAssetsCarouselModel {
  title: string
  _: LmHomeAssetsCarouselItemModel[]
}

export interface LmHomeAssetsOfferingModel {
  title: string
  _: LmHomeAssetsOfferingItemModel[]
}

export interface LmHomeAssetsSolutionModel {
  title: string
  _: LmHomeAssetsSolutionItemModel[]
}

export interface LmHomeAssetsAboutModel {
  title: string
  _: LmHomeAssetsAboutItemModel[]
}

export interface LmHomeAssetsCustomerModel {
  title: string
  _: LmHomeAssetsCustomerItemModel[]
}

export interface LmHomeAssetsCookiebarModel {
  state: {
    bIsDismissed: boolean
  }
  assets: {
    policies: {
      label: string
      link: string
    }[]
    message: string
    buttons: AppButtonModel[]
  }
}

export interface LmHomeAssetsModel {
  id: string
  assets: {
    carousel: LmHomeAssetsCarouselModel
    offerings: LmHomeAssetsOfferingModel
    solution: LmHomeAssetsSolutionModel
    about: LmHomeAssetsAboutModel
    customers: LmHomeAssetsCustomerModel
  }
  cookiebar: LmHomeAssetsCookiebarModel
  error: {}
}
