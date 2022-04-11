export interface LmNavbarItemAssetsModel {
  label: string
  route: string
  name: string
  children: LmNavbarItemAssetsModel[]
}

export interface LmNavbarAssetsModel {
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
