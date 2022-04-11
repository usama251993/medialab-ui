export interface LmFooterAssetsModel {
  id: string
  assets: {
    socials: {
      label: string
      icon: string
      link: string
    }[]
    terms: {
      label: string
      route: string
    }[]
    navigations: {
      label: string
      route: string
    }[]
    copyright: {
      from: string
      to?: string
      statement: string
    }
  }
  error: any
}
