import { AppButtonModel, AppImageModel, INITIAL_BUTTON_MODEL, INITIAL_IMAGE_MODEL } from '../../app-assets.model'

interface AppCarouselItemModel {
  image: AppImageModel
  actions: AppButtonModel[]
  text?: {
    heading: string | null
    subheading?: string | null
    statements?: string[]
  }
}

export interface AppCarouselAssetsModel {
  items: AppCarouselItemModel[]
}

interface AppCarouselElementStyleModel {
  color: string | null
  fontSize: string | null
}

export interface AppCarouselConfig {
  caption: {
    alignment: 'center' | 'default' | 'full' | null
    heading: AppCarouselElementStyleModel
    subheading: AppCarouselElementStyleModel
    statements: AppCarouselElementStyleModel
    backdrop: { color: string | null }

  }
}

const INITIAL_CAROUSEL_ITEM_MODEL: AppCarouselItemModel = {
  image: { ...INITIAL_IMAGE_MODEL }, actions: [{ ...INITIAL_BUTTON_MODEL }],
  text: { heading: null, subheading: null, statements: [] }
}

export const INITIAL_CAROUSEL_ASSETS_MODEL: AppCarouselAssetsModel = {
  items: [{ ...INITIAL_CAROUSEL_ITEM_MODEL }]
}

const INITIAL_CAROUSEL_STYLE: AppCarouselElementStyleModel = {
  color: null, fontSize: null
}

export const INITIAL_CAROUSEL_CONFIG: AppCarouselConfig = {
  caption: {
    alignment: 'default',
    heading: { ...INITIAL_CAROUSEL_STYLE },
    subheading: { ...INITIAL_CAROUSEL_STYLE },
    statements: { ...INITIAL_CAROUSEL_STYLE },
    backdrop: null
  }
}
