import { MetaReducer, ActionReducerMap, Action } from '@ngrx/store'

import * as fromAuth from '@lm-core/state/reducers/lm-auth.reducer'
import * as fromNavbar from '@lm-core/state/reducers/lm-navbar.reducer'
import * as fromFooter from '@lm-core/state/reducers/lm-footer.reducer'
import * as fromHome from '@lm-core/state/reducers/lm-home.reducer'
import * as fromLogin from '@lm-core/state/reducers/lm-login.reducer'
import * as fromSignup from '@lm-core/state/reducers/lm-signup.reducer'
import * as fromPricing from '@lm-core/state/reducers/lm-pricing.reducer'

export interface State {
  auth: fromAuth.State
  navbar: fromNavbar.State,
  footer: fromFooter.State,
  home: fromHome.State,
  login: fromLogin.State,
  signup: fromSignup.State,
  pricing: fromPricing.State
}

export const reducers: ActionReducerMap<State, Action> = {
  auth: fromAuth.reducer,
  navbar: fromNavbar.reducer,
  footer: fromFooter.reducer,
  home: fromHome.reducer,
  login: fromLogin.reducer,
  signup: fromSignup.reducer,
  pricing: fromPricing.reducer
}

export const metaReducers: MetaReducer<State>[] = []

export const FEATURE_NAME: string = 'core'
