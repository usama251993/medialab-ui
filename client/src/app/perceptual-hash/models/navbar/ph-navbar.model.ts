import { AppImageModel, INITIAL_IMAGE_MODEL } from '@shared/models/app-assets.model'

export interface PhNavbarItemAssetsModel {
  label: string | null
  name: string | null
  route: string | null
  children: PhNavbarItemAssetsModel[]
}

const INITIAL_NAVBAR_ITEM_MODEL: PhNavbarItemAssetsModel = {
  label: null, name: null, route: null, children: []
}

export interface PhNavbarAssetsModel {
  logo: AppImageModel
  items: {
    common: PhNavbarItemAssetsModel[]
    authenticated: PhNavbarItemAssetsModel[]
    anonymous: PhNavbarItemAssetsModel[]
  }
}

export const INITIAL_NAVBAR_ASSETS: PhNavbarAssetsModel = {
  logo: { ...INITIAL_IMAGE_MODEL },
  items: {
    common: [{ ...INITIAL_NAVBAR_ITEM_MODEL }],
    authenticated: [{ ...INITIAL_NAVBAR_ITEM_MODEL }],
    anonymous: [{ ...INITIAL_NAVBAR_ITEM_MODEL }]
  }
}
