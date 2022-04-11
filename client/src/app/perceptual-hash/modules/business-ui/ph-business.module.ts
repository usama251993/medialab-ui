import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppSharedModule } from '@shared/app-shared.module'

import { PhBusinessRoutingModule } from './ph-business-routing.module'
import { PhHomeContainerComponent } from './components/ph-home-container/ph-home-container.component'
import { PhHomeComponent } from './components/ph-home-container/ph-home/ph-home.component'
import { PhPricingContainerComponent } from './components/ph-pricing-container/ph-pricing-container.component'
import { PhPricingComponent } from './components/ph-pricing-container/ph-pricing/ph-pricing.component'
import { PhBannerComponent } from './components/common/ph-banner/ph-banner.component'
import { PhClosureComponent } from './components/common/ph-closure/ph-closure.component'
import { PhPricingModuleComponent } from './components/ph-pricing-container/ph-pricing/ph-pricing-module/ph-pricing-module.component'
import { PhPricingPlanComponent } from './components/ph-pricing-container/ph-pricing/ph-pricing-module/ph-pricing-plan/ph-pricing-plan.component'

const DECLARATIONS = [
  PhHomeContainerComponent, PhHomeComponent,
  PhPricingContainerComponent, PhPricingComponent,
  PhBannerComponent,
  PhClosureComponent,
  PhPricingModuleComponent,
  PhPricingPlanComponent
]

const IMPORTS = [
  CommonModule,
  PhBusinessRoutingModule,
  AppSharedModule
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS]
})
export class PhBusinessModule { }
