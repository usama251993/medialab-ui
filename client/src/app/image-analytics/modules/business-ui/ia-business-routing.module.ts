import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { APP_ROUTES } from './ia-business.routes'

import { IaHomeContainerComponent } from './components/ia-home-container/ia-home-container.component'
import { IaPricingContainerComponent } from './components/ia-pricing-container/ia-pricing-container.component'

const routes: Routes = [
  {
    path: APP_ROUTES.EMPTY,
    component: IaHomeContainerComponent
  },
  {
    path: APP_ROUTES.PRICING,
    component: IaPricingContainerComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IaBusinessRoutingModule { }
