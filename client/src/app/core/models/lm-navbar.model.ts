export interface LmNavbarItemAssetsModel {
  label: string
  route: string
  name: string
  children: LmNavbarItemAssetsModel[]
}

export interface LmNavbarAssetsModel {
  id: string
  assets: {
    logo: {
      src: string
      alt: string
    }
    items: {
      common: LmNavbarItemAssetsModel[]
      authenticated: LmNavbarItemAssetsModel[]
      anonymous: LmNavbarItemAssetsModel[]
    }
  }
  error: any
}
