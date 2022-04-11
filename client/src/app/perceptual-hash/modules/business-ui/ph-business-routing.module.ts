import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { APP_ROUTES } from './ph-business.routes'

import { PhHomeContainerComponent } from './components/ph-home-container/ph-home-container.component'
import { PhPricingContainerComponent } from './components/ph-pricing-container/ph-pricing-container.component'

const routes: Routes = [
  {
    path: APP_ROUTES.EMPTY,
    component: PhHomeContainerComponent
  },
  {
    path: APP_ROUTES.PRICING,
    component: PhPricingContainerComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhBusinessRoutingModule { }
