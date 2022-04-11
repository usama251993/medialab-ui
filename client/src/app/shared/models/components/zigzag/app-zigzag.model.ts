import { AppImageModel, AppButtonModel, INITIAL_IMAGE_MODEL, INITIAL_BUTTON_MODEL } from '../../app-assets.model'

interface AppZigzagAssetItemModel {
  title: string | null
  statements: string[]
  actions: AppButtonModel[]
  image: AppImageModel
}

export interface AppZigzagAssetsModel {
  items: AppZigzagAssetItemModel[]
}

export interface AppZigzagConfigModel { }

const INITIAL_ZIGZAG_ITEM_MODEL: AppZigzagAssetItemModel = {
  title: null, statements: [], actions: [{ ...INITIAL_BUTTON_MODEL }], image: { ...INITIAL_IMAGE_MODEL }
}

export const INITIAL_ZIGZAG_ASSETS_MODEL: AppZigzagAssetsModel = {
  items: [{ ...INITIAL_ZIGZAG_ITEM_MODEL }]
}

export const INITIAL_ZIGZAG_CONFIG_MODEL: AppZigzagConfigModel = {}
