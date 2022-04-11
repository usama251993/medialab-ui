import { AppButton2Model, AppImageModel } from '@shared/models/app-assets.model'
import { AppCarouselAssetsModel } from '@shared/models/components/carousel/app-carousel.model'

// interface LmHomeAssetsCarouselItemModel {
//   image: AppImageModel
//   buttons: AppButtonModel[]
//   text?: {
//     heading: string
//     subheading?: string
//     description?: string
//   }
// }

interface LmHomeAssetsOfferingItemModel {
  title: string
  summary: string[]
  image: AppImageModel
  buttons: AppButton2Model[]
  video?: { link: string }
}

interface LmHomeAssetsSolutionItemModel {
  title: string
  summary: string[]
  buttons: AppButton2Model[]
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

// export interface LmHomeAssetsCarouselModel {
//   title: string
//   _: LmHomeAssetsCarouselItemModel[]
// }

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

export interface LmHomeAssetsModel {
  carousel: AppCarouselAssetsModel
  offerings: LmHomeAssetsOfferingModel
  solution: LmHomeAssetsSolutionModel
  about: LmHomeAssetsAboutModel
  customers: LmHomeAssetsCustomerModel

}
