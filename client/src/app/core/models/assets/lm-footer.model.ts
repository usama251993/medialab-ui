export interface LmFooterAssetsModel {
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
