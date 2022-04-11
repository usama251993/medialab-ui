import { AppImageModel, INITIAL_IMAGE_MODEL } from '@shared/models/app-assets.model'

export interface IaNavbarItemAssetsModel {
  label: string | null
  name: string | null
  route: string | null
  children: IaNavbarItemAssetsModel[]
}

const INITIAL_NAVBAR_ITEM_MODEL: IaNavbarItemAssetsModel = {
  label: null, name: null, route: null, children: []
}

export interface IaNavbarAssetsModel {
  logo: AppImageModel
  items: {
    common: IaNavbarItemAssetsModel[]
    authenticated: IaNavbarItemAssetsModel[]
    anonymous: IaNavbarItemAssetsModel[]
  }
}

export const INITIAL_NAVBAR_ASSETS: IaNavbarAssetsModel = {
  logo: { ...INITIAL_IMAGE_MODEL },
  items: {
    common: [{ ...INITIAL_NAVBAR_ITEM_MODEL }],
    authenticated: [{ ...INITIAL_NAVBAR_ITEM_MODEL }],
    anonymous: [{ ...INITIAL_NAVBAR_ITEM_MODEL }]
  }
}
