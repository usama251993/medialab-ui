import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'

import { LmCoreStateModule } from './state/lm-core-state.module'

import { LmCoreRoutingModule } from './lm-core-routing.module'

import { LmAppShellComponent } from './components/lm-app-shell/lm-app-shell.component'
import { LmErrorComponent } from './components/lm-error/lm-error.component'

import { LmHomeContainerComponent } from './components/lm-home-container/lm-home-container.component'
import { LmHomeComponent } from './components/lm-home-container/lm-home/lm-home.component'
import { LmHomeCarouselComponent } from './components/lm-home-container/lm-home/lm-home-carousel/lm-home-carousel.component'
import { LmHomeOfferingsComponent } from './components/lm-home-container/lm-home/lm-home-offerings/lm-home-offerings.component'
import { LmHomeSolutionsComponent } from './components/lm-home-container/lm-home/lm-home-solutions/lm-home-solutions.component'
import { LmHomeAboutComponent } from './components/lm-home-container/lm-home/lm-home-about/lm-home-about.component'
import { LmHomeCustomersComponent } from './components/lm-home-container/lm-home/lm-home-customers/lm-home-customers.component'
import { LmHomeCookiebarComponent } from './components/lm-home-container/lm-home/lm-home-cookiebar/lm-home-cookiebar.component'

import { LmNavbarContainerComponent } from './components/lm-navbar-container/lm-navbar-container.component'
import { LmNavbarComponent } from './components/lm-navbar-container/lm-navbar/lm-navbar.component'
import { LmFooterContainerComponent } from './components/lm-footer-container/lm-footer-container.component'
import { LmFooterComponent } from './components/lm-footer-container/lm-footer/lm-footer.component'
import { LmLoginContainerComponent } from './components/lm-login-container/lm-login-container.component'
import { LmLoginComponent } from './components/lm-login-container/lm-login/lm-login.component'
import { LmSignupContainerComponent } from './components/lm-signup-container/lm-signup-container.component'
import { LmSignupComponent } from './components/lm-signup-container/lm-signup/lm-signup.component'
import { LmPricingContainerComponent } from './components/lm-pricing-container/lm-pricing-container.component'
import { LmPricingComponent } from './components/lm-pricing-container/lm-pricing/lm-pricing.component'
import { LmLandingComponent } from './components/lm-landing-container/lm-landing/lm-landing.component'
import { LmLandingContainerComponent } from './components/lm-landing-container/lm-landing-container.component'

import { LmTestContainerComponent } from './components/lm-test-container/lm-test-container.component'
import { LmTestComponent } from './components/lm-test-container/lm-test/lm-test.component'


const COMPONENTS = [
  LmAppShellComponent,
  LmHomeContainerComponent,
  LmHomeComponent,
  LmHomeCarouselComponent,
  LmHomeOfferingsComponent,
  LmHomeSolutionsComponent,
  LmHomeAboutComponent,
  LmHomeCustomersComponent,
  LmHomeCookiebarComponent,

  LmErrorComponent,
  LmNavbarContainerComponent,
  LmNavbarComponent,
  LmFooterContainerComponent,
  LmFooterComponent,
  LmLoginContainerComponent,
  LmLoginComponent,
  LmSignupContainerComponent,
  LmSignupComponent,
  LmPricingContainerComponent,
  LmPricingComponent,
  LmLandingContainerComponent,
  LmLandingComponent,

  LmTestContainerComponent,
  LmTestComponent
]

const MODULES = [
  CommonModule,
  SharedModule,
  LmCoreRoutingModule,
  LmCoreStateModule
]

@NgModule({
  declarations: COMPONENTS,
  imports: MODULES
})
export class LmCoreModule { }
