export interface AppButtonModel {
  text: string
  link: string
  icon?: {
    position: 'before' | 'after'
    _: string
  }
}

export interface AppImageModel {
  src: string
  alt: string
}

export interface AppOptionModel {
  value: string | number
  viewValue: string
}
