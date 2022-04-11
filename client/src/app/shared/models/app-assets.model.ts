export interface AppButtonModel {
  text: string | null
  link: string | null
  icon?: {
    position: 'before' | 'after'
    _: string
  } | null
}

export interface AppButton2Model {
  text: string | null
  link: string | null
  icon?: {
    position: 'before' | 'after'
    _: string
  } | null
  appearance: 'raised' | 'flat' | 'icon' | 'link' | 'stroked' | 'stepper'
  color: 'primary' | 'accent' | 'warn'
  type: 'submit' | 'button'
  disabled: boolean
}

export interface AppImageModel {
  src: string | null
  alt: string | null
}

export interface AppOptionModel {
  value: string | number | null
  viewValue: string | null
}

export const INITIAL_BUTTON_MODEL: AppButtonModel = { text: null, link: null, icon: null }

export const INITIAL_IMAGE_MODEL: AppImageModel = { src: null, alt: null }

export const INITIAL_OPTION_MODEL: AppOptionModel = { value: null, viewValue: null }


// export interface AppButtonModel {
//   text: string | null
//   link: string | null
//   icon?: {
//     position: 'before' | 'after'
//     _: string
//   } | null
//   appearance: 'raised' | 'flat' | 'icon' | 'link' | 'stroked'
//   color: 'primary' | 'accent' | 'warn'
//   type: 'submit' | 'button'
//   disabled: boolean
// }

export const INITIAL_BUTTON_MODEL_2: AppButton2Model = { text: null, link: null, icon: null, appearance: null, color: null, type: null, disabled: null }

