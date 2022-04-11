export interface LmCookiebarModel {
  state: {
    bIsDismissed: boolean
  }
}

export const INITIAL_COOKIEBAR: LmCookiebarModel = {
  state: { bIsDismissed: false }
}
