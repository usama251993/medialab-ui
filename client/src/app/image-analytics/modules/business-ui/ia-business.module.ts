import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppSharedModule } from '@shared/app-shared.module'

import { IaBusinessRoutingModule } from './ia-business-routing.module'

import { IaHomeContainerComponent } from './components/ia-home-container/ia-home-container.component'
import { IaHomeComponent } from './components/ia-home-container/ia-home/ia-home.component'
import { IaPricingContainerComponent } from './components/ia-pricing-container/ia-pricing-container.component'
import { IaPricingComponent } from './components/ia-pricing-container/ia-pricing/ia-pricing.component'
import { IaBannerComponent } from './components/common/ia-banner/ia-banner.component'
import { IaClosureComponent } from './components/common/ia-closure/ia-closure.component'
import { IaPricingModuleComponent } from './components/ia-pricing-container/ia-pricing/ia-pricing-module/ia-pricing-module.component'
import { IaPricingPlanComponent } from './components/ia-pricing-container/ia-pricing/ia-pricing-module/ia-pricing-plan/ia-pricing-plan.component'

const DECLARATIONS = [
  IaHomeContainerComponent, IaHomeComponent,
  IaPricingContainerComponent, IaPricingComponent,
  IaBannerComponent,
  IaClosureComponent,
  IaPricingModuleComponent,
  IaPricingPlanComponent
]

const IMPORTS = [
  CommonModule,
  IaBusinessRoutingModule,
  AppSharedModule
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS]
})
export class IaBusinessModule { }
