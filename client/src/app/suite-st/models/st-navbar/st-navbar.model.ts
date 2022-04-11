import { AppImageModel, INITIAL_IMAGE_MODEL } from '@shared/models/app-assets.model'

export interface StNavbarItemAssetsModel {
  label: string | null
  name: string | null
  route: string | null
  children: StNavbarItemAssetsModel[]
}

const INITIAL_NAVBAR_ITEM_MODEL: StNavbarItemAssetsModel = {
  label: null, name: null, route: null, children: []
}

export interface StNavbarAssetsModel {
  logo: AppImageModel
  items: {
    common: StNavbarItemAssetsModel[]
    authenticated: StNavbarItemAssetsModel[]
    anonymous: StNavbarItemAssetsModel[]
  }
}

export const INITIAL_NAVBAR_ASSETS: StNavbarAssetsModel = {
  logo: { ...INITIAL_IMAGE_MODEL },
  items: {
    common: [{ ...INITIAL_NAVBAR_ITEM_MODEL }],
    authenticated: [{ ...INITIAL_NAVBAR_ITEM_MODEL }],
    anonymous: [{ ...INITIAL_NAVBAR_ITEM_MODEL }]
  }
}
