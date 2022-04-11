import { AppImageModel, INITIAL_IMAGE_MODEL } from '@shared/models/app-assets.model'

export interface CdNavbarItemAssetsModel {
  label: string | null
  name: string | null
  route: string | null
  children: CdNavbarItemAssetsModel[]
}

const INITIAL_NAVBAR_ITEM_MODEL: CdNavbarItemAssetsModel = {
  label: null, name: null, route: null, children: []
}

export interface CdNavbarAssetsModel {
  logo: AppImageModel
  items: {
    common: CdNavbarItemAssetsModel[]
    authenticated: CdNavbarItemAssetsModel[]
    anonymous: CdNavbarItemAssetsModel[]
  }
}

export const INITIAL_NAVBAR_ASSETS: CdNavbarAssetsModel = {
  logo: { ...INITIAL_IMAGE_MODEL },
  items: {
    common: [{ ...INITIAL_NAVBAR_ITEM_MODEL }],
    authenticated: [{ ...INITIAL_NAVBAR_ITEM_MODEL }],
    anonymous: [{ ...INITIAL_NAVBAR_ITEM_MODEL }]
  }
}
