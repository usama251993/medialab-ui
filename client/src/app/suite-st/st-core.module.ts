import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppSharedModule } from '@shared/app-shared.module'

import { StCoreRoutingModule } from './st-core-routing.module'

import { StAppShellComponent } from './components/common/st-app-shell/st-app-shell.component'

import { StApplicationContainerComponent } from './components/application-ui/st-application-container/st-application-container.component'
import { StApplicationComponent } from './components/application-ui/st-application-container/st-application/st-application.component'

import { StNavbarContainerComponent } from './components/common/st-navbar-container/st-navbar-container.component'
import { StNavbarComponent } from './components/common/st-navbar-container/st-navbar/st-navbar.component'

import { StFooterContainerComponent } from './components/common/st-footer-container/st-footer-container.component'
import { StFooterComponent } from './components/common/st-footer-container/st-footer/st-footer.component'

import { StZigzagComponent } from './components/business-ui/common/st-zigzag/st-zigzag.component'
import { StBannerComponent } from './components/business-ui/common/st-banner/st-banner.component'

import { StHomeContainerComponent } from './components/business-ui/st-home-container/st-home-container.component'
import { StHomeComponent } from './components/business-ui/st-home-container/st-home/st-home.component'
import { StHomeMultiComponent } from './components/business-ui/st-home-container/st-home/st-home-multi/st-home-multi.component'
import { StHomeOverviewComponent } from './components/business-ui/st-home-container/st-home/st-home-overview/st-home-overview.component'
import { StHomeAdvantagesComponent } from './components/business-ui/st-home-container/st-home/st-home-advantages/st-home-advantages.component'
import { StHomeShortInfoComponent } from './components/business-ui/st-home-container/st-home/st-home-short-info/st-home-short-info.component'
import { StHomeAutomationComponent } from './components/business-ui/st-home-container/st-home/st-home-automation/st-home-automation.component'
import { StHomeFeaturesComponent } from './components/business-ui/st-home-container/st-home/st-home-features/st-home-features.component'
import { StHomeTrustedByComponent } from './components/business-ui/st-home-container/st-home/st-home-trusted-by/st-home-trusted-by.component'
import { StHomeClosureComponent } from './components/business-ui/st-home-container/st-home/st-home-closure/st-home-closure.component'

import { StDashboardContainerComponent } from './components/application-ui/st-dashboard-container/st-dashboard-container.component'
import { StDashboardComponent } from './components/application-ui/st-dashboard-container/st-dashboard/st-dashboard.component'

import { StResultDialogContainerComponent } from './components/application-ui/st-result-dialog-container/st-result-dialog-container.component'
import { StResultDialogComponent } from './components/application-ui/st-result-dialog-container/st-result-dialog/st-result-dialog.component'

import { StPricingContainerComponent } from './components/business-ui/st-pricing-container/st-pricing-container.component'
import { StPricingComponent } from './components/business-ui/st-pricing-container/st-pricing/st-pricing.component'
import { StPricingBannerComponent } from './components/business-ui/st-pricing-container/st-pricing/st-pricing-banner/st-pricing-banner.component'
import { StPricingModuleComponent } from './components/business-ui/st-pricing-container/st-pricing/st-pricing-module/st-pricing-module.component'
import { StPricingPlanComponent } from './components/business-ui/st-pricing-container/st-pricing/st-pricing-module/st-pricing-plan/st-pricing-plan.component'
import { StPricingFeatureOverviewComponent } from './components/business-ui/st-pricing-container/st-pricing/st-pricing-feature-overview/st-pricing-feature-overview.component'
import { StPricingFeatureComponent } from './components/business-ui/st-pricing-container/st-pricing/st-pricing-feature-overview/st-pricing-feature/st-pricing-feature.component'
import { StPricingClosureComponent } from './components/business-ui/st-pricing-container/st-pricing/st-pricing-closure/st-pricing-closure.component'

import { StFeatureContainerComponent } from './components/business-ui/st-feature-container/st-feature-container.component'
import { StFeatureComponent } from './components/business-ui/st-feature-container/st-feature/st-feature.component'
import { StFeatureLeftBannerComponent } from './components/business-ui/st-feature-container/st-feature/st-feature-left-banner/st-feature-left-banner.component'
import { StFeatureRightBannerComponent } from './components/business-ui/st-feature-container/st-feature/st-feature-right-banner/st-feature-right-banner.component'
import { StFeatureBannerComponent } from './components/business-ui/st-feature-container/st-feature/st-feature-banner/st-feature-banner.component'
import { StFeatureWrapupComponent } from './components/business-ui/st-feature-container/st-feature/st-feature-wrapup/st-feature-wrapup.component'
import { StFeatureClosureComponent } from './components/business-ui/st-feature-container/st-feature/st-feature-closure/st-feature-closure.component'

import { StBoxContainerComponent } from './components/business-ui/st-box-container/st-box-container.component'
import { StBoxComponent } from './components/business-ui/st-box-container/st-box/st-box.component'
import { StBoxClosureComponent } from './components/business-ui/st-box-container/st-box/st-box-closure/st-box-closure.component'
import { StBoxFeaturesComponent } from './components/business-ui/st-box-container/st-box/st-box-features/st-box-features.component'
import { StBoxDescriptionComponent } from './components/business-ui/st-box-container/st-box/st-box-description/st-box-description.component'
import { StBoxBannerComponent } from './components/business-ui/st-box-container/st-box/st-box-banner/st-box-banner.component'

import { StMonoContainerComponent } from './components/business-ui/st-mono-container/st-mono-container.component'
import { StMonoComponent } from './components/business-ui/st-mono-container/st-mono/st-mono.component'
import { StMonoBannerComponent } from './components/business-ui/st-mono-container/st-mono/st-mono-banner/st-mono-banner.component'
import { StMonoClosureComponent } from './components/business-ui/st-mono-container/st-mono/st-mono-closure/st-mono-closure.component'
import { StMonoFeaturesComponent } from './components/business-ui/st-mono-container/st-mono/st-mono-features/st-mono-features.component'
import { StMonoDescriptionComponent } from './components/business-ui/st-mono-container/st-mono/st-mono-description/st-mono-description.component'

const DECLARATIONS = [
  StAppShellComponent,

  StApplicationContainerComponent, StApplicationComponent,

  StNavbarContainerComponent, StNavbarComponent,

  StFooterContainerComponent, StFooterComponent,

  StDashboardContainerComponent, StDashboardComponent,

  StResultDialogContainerComponent, StResultDialogComponent,

  StZigzagComponent,
  StBannerComponent,

  StHomeContainerComponent, StHomeComponent,
  StHomeMultiComponent,
  StHomeOverviewComponent,
  StHomeAdvantagesComponent,
  StHomeShortInfoComponent,
  StHomeAutomationComponent,
  StHomeFeaturesComponent,
  StHomeTrustedByComponent,
  StHomeClosureComponent,

  StPricingContainerComponent, StPricingComponent,
  StPricingBannerComponent,
  StPricingModuleComponent,
  StPricingPlanComponent,
  StPricingFeatureComponent,
  StPricingFeatureOverviewComponent,
  StPricingClosureComponent,

  StFeatureContainerComponent, StFeatureComponent,
  StFeatureLeftBannerComponent,
  StFeatureRightBannerComponent,
  StFeatureBannerComponent,
  StFeatureClosureComponent,
  StFeatureWrapupComponent,

  StBoxContainerComponent, StBoxComponent,
  StBoxClosureComponent,
  StBoxFeaturesComponent,
  StBoxDescriptionComponent,
  StBoxBannerComponent,

  StMonoContainerComponent, StMonoComponent,
  StMonoClosureComponent,
  StMonoFeaturesComponent,
  StMonoDescriptionComponent,
  StMonoBannerComponent
]

const IMPORTS = [
  CommonModule,
  StCoreRoutingModule,
  AppSharedModule
]

const ENTRY_COMPONENTS = [
  StResultDialogContainerComponent
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class StCoreModule { }
