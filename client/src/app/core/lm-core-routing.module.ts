import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppRouteErrorComponent } from '@shared/components/app-route-error/app-route-error.component'

import { CORE_ROUTES } from './lm-core.routes'

import { LmAppShellComponent } from './components/lm-app-shell/lm-app-shell.component'
import { LmHomeContainerComponent } from './components/lm-home-container/lm-home-container.component'
import { LmLoginContainerComponent } from './components/lm-login-container/lm-login-container.component'
import { LmSignupContainerComponent } from './components/lm-signup-container/lm-signup-container.component'
import { LmLandingContainerComponent } from './components/lm-landing-container/lm-landing-container.component'
import { LmTestContainerComponent } from './components/lm-test-container/lm-test-container.component'

const moduleRoutes: Routes = [
  {
    path: CORE_ROUTES.EMPTY,
    component: LmAppShellComponent, children: [
      {
        path: CORE_ROUTES.EMPTY,
        component: LmHomeContainerComponent
      },
      {
        path: CORE_ROUTES.LOGIN,
        component: LmLoginContainerComponent
      },
      {
        path: CORE_ROUTES.SIGNUP,
        component: LmSignupContainerComponent
      },
      {
        path: CORE_ROUTES.TEST,
        component: LmTestContainerComponent
      },
      {
        path: CORE_ROUTES.DASHBOARD,
        component: LmLandingContainerComponent
      }
    ]
  },
  {
    path: CORE_ROUTES.ERROR,
    component: AppRouteErrorComponent
  },
  {
    path: CORE_ROUTES.WILDCARD, redirectTo: CORE_ROUTES.ERROR
  }
]

const IMPORTS = [
  RouterModule.forChild(moduleRoutes)
]

const EXPORTS = [
  RouterModule
]

@NgModule({
  imports: IMPORTS,
  exports: EXPORTS
})
export class LmCoreRoutingModule { }
