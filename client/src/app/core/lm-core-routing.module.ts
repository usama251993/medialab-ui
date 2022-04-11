import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppRouteErrorComponent } from '@shared/components/app-route-error/app-route-error.component'

import { APP_ROUTES } from '../app.routes'
import { CORE_ROUTES } from './lm-core.routes'

import { LmAppShellComponent } from './components/lm-app-shell/lm-app-shell.component'
import { LmHomeContainerComponent } from './components/lm-home-container/lm-home-container.component'
import { LmLoginContainerComponent } from './components/lm-login-container/lm-login-container.component'
import { LmSignupContainerComponent } from './components/lm-signup-container/lm-signup-container.component'
import { LmVerifyContainerComponent } from './components/lm-verify-container/lm-verify-container.component'
import { LmTestContainerComponent } from './components/lm-test-container/lm-test-container.component'
import { AppTableauContainerComponent } from '@shared/components/app-tableau-container/app-tableau-container.component'
import { LmPricingContainerComponent } from './components/lm-pricing-container/lm-pricing-container.component'
import { LmSettingsContainerComponent } from './components/lm-settings-container/lm-settings-container.component'
import { LmContactContainerComponent } from './components/lm-contact-container/lm-contact-container.component'
import { LmFeedbackContainerComponent } from './components/lm-feedback-container/lm-feedback-container.component'

const routes: Routes = [
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
        path: CORE_ROUTES.VERIFY,
        component: LmVerifyContainerComponent
      },
      {
        path: CORE_ROUTES.PRICING,
        component: LmPricingContainerComponent
      },
      {
        path: CORE_ROUTES.SETTINGS,
        component: LmSettingsContainerComponent
      },
      {
        path: CORE_ROUTES.TEST,
        component: LmTestContainerComponent
      },
      {
        path: CORE_ROUTES.CONTACT,
        component: LmContactContainerComponent
      },
      {
        path: CORE_ROUTES.FEEDBACK,
        component: LmFeedbackContainerComponent
      },
      {
        path: CORE_ROUTES.HOME,
        redirectTo: CORE_ROUTES.EMPTY
      }
    ]
  },
  {
    path: APP_ROUTES.DEDUPLICATION,
    loadChildren: () => import('@cd-core/cd-core.module').then(_ => _.CdCoreModule)
  },
  {
    path: APP_ROUTES.TESTSUITE,
    loadChildren: () => import('@st-core/st-core.module').then(_ => _.StCoreModule)
  },
  {
    path: APP_ROUTES.PERCEPTUAL_HASH,
    loadChildren: () => import('@ph-core/ph-core.module').then(_ => _.PhCoreModule)
  },
  {
    path: APP_ROUTES.IMAGE_ANALYTCS,
    loadChildren: () => import('@ia-core/ia-core.module').then(_ => _.IaCoreModule)
  },
  {
    path: 'tableau',
    component: AppTableauContainerComponent
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
  RouterModule.forChild(routes)
]

const EXPORTS = [
  RouterModule
]

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS]
})
export class LmCoreRoutingModule { }
