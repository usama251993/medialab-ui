import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { APP_ROUTES } from './cd-business.routes'

import { CdHomeContainerComponent } from './components/cd-home-container/cd-home-container.component'
import { CdPricingContainerComponent } from './components/cd-pricing-container/cd-pricing-container.component'

const routes: Routes = [
  {
    path: APP_ROUTES.EMPTY,
    component: CdHomeContainerComponent
  },
  {
    path: APP_ROUTES.PRICING,
    component: CdPricingContainerComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdBusinessRoutingModule { }
