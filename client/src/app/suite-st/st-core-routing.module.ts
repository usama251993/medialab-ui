import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CORE_ROUTES } from './st-core.routes'

import { StAppShellComponent } from './components/common/st-app-shell/st-app-shell.component'

import { StHomeContainerComponent } from './components/business-ui/st-home-container/st-home-container.component'
import { StFeatureContainerComponent } from './components/business-ui/st-feature-container/st-feature-container.component'
import { StBoxContainerComponent } from './components/business-ui/st-box-container/st-box-container.component'
import { StMonoContainerComponent } from './components/business-ui/st-mono-container/st-mono-container.component'
import { StPricingContainerComponent } from './components/business-ui/st-pricing-container/st-pricing-container.component'
import { StApplicationContainerComponent } from './components/application-ui/st-application-container/st-application-container.component'
import { StDashboardContainerComponent } from './components/application-ui/st-dashboard-container/st-dashboard-container.component'

const ROUTES: Routes = [
  {
    path: CORE_ROUTES.EMPTY,
    component: StAppShellComponent,
    children: [
      {
        path: CORE_ROUTES.EMPTY,
        component: StHomeContainerComponent
      },
      {
        path: CORE_ROUTES.APPLICATION,
        component: StApplicationContainerComponent
      },
      {
        path: CORE_ROUTES.DASHBOARD,
        component: StDashboardContainerComponent
      },
      {
        path: CORE_ROUTES.PRICING,
        component: StPricingContainerComponent
      },
      {
        path: CORE_ROUTES.FEATURE,
        component: StFeatureContainerComponent
      },
      {
        path: CORE_ROUTES.BOX,
        component: StBoxContainerComponent
      },
      {
        path: CORE_ROUTES.MONO,
        component: StMonoContainerComponent
      },
    ]
  }
]

const IMPORTS = [
  RouterModule.forChild(ROUTES)
]

const EXPORTS = [
  RouterModule
]

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS]
})
export class StCoreRoutingModule { }
