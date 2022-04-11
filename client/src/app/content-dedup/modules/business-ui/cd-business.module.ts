import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppSharedModule } from '@shared/app-shared.module'

import { CdBusinessRoutingModule } from './cd-business-routing.module'
import { CdHomeContainerComponent } from './components/cd-home-container/cd-home-container.component'
import { CdHomeComponent } from './components/cd-home-container/cd-home/cd-home.component'
import { CdPricingContainerComponent } from './components/cd-pricing-container/cd-pricing-container.component'
import { CdPricingComponent } from './components/cd-pricing-container/cd-pricing/cd-pricing.component'
import { CdBannerComponent } from './components/common/cd-banner/cd-banner.component'
import { CdClosureComponent } from './components/common/cd-closure/cd-closure.component'
import { CdPricingModuleComponent } from './components/cd-pricing-container/cd-pricing/cd-pricing-module/cd-pricing-module.component'
import { CdPricingPlanComponent } from './components/cd-pricing-container/cd-pricing/cd-pricing-module/cd-pricing-plan/cd-pricing-plan.component'

const DECLARATIONS = [
  CdHomeContainerComponent, CdHomeComponent,
  CdPricingContainerComponent, CdPricingComponent,
  CdBannerComponent,
  CdClosureComponent,
  CdPricingModuleComponent,
  CdPricingPlanComponent
]

const IMPORTS = [
  CommonModule,
  CdBusinessRoutingModule,
  AppSharedModule
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS]
})
export class CdBusinessModule { }
