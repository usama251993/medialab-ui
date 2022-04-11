import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppSharedModule } from '@shared/app-shared.module'

import { LmCoreRoutingModule } from './lm-core-routing.module'

import { LmAppShellComponent } from './components/lm-app-shell/lm-app-shell.component'

import { LmHomeContainerComponent } from './components/lm-home-container/lm-home-container.component'
import { LmHomeComponent } from './components/lm-home-container/lm-home/lm-home.component'
import { LmHomeCarouselComponent } from './components/lm-home-container/lm-home/lm-home-carousel/lm-home-carousel.component'
import { LmHomeOfferingsComponent } from './components/lm-home-container/lm-home/lm-home-offerings/lm-home-offerings.component'
import { LmHomeSolutionsComponent } from './components/lm-home-container/lm-home/lm-home-solutions/lm-home-solutions.component'
import { LmHomeAboutComponent } from './components/lm-home-container/lm-home/lm-home-about/lm-home-about.component'
import { LmHomeCustomersComponent } from './components/lm-home-container/lm-home/lm-home-customers/lm-home-customers.component'

import { LmNavbarContainerComponent } from './components/lm-navbar-container/lm-navbar-container.component'
import { LmNavbarComponent } from './components/lm-navbar-container/lm-navbar/lm-navbar.component'
import { LmFooterContainerComponent } from './components/lm-footer-container/lm-footer-container.component'
import { LmFooterComponent } from './components/lm-footer-container/lm-footer/lm-footer.component'
import { LmLoginContainerComponent } from './components/lm-login-container/lm-login-container.component'
import { LmLoginComponent } from './components/lm-login-container/lm-login/lm-login.component'
import { LmSignupContainerComponent } from './components/lm-signup-container/lm-signup-container.component'
import { LmSignupComponent } from './components/lm-signup-container/lm-signup/lm-signup.component'
import { LmCookiebarContainerComponent } from './components/lm-cookiebar-container/lm-cookiebar-container.component'
import { LmCookiebarComponent } from './components/lm-cookiebar-container/lm-cookiebar/lm-cookiebar.component'
import { LmVerifyContainerComponent } from './components/lm-verify-container/lm-verify-container.component'
import { LmVerifyComponent } from './components/lm-verify-container/lm-verify/lm-verify.component'

import { LmPricingContainerComponent } from './components/lm-pricing-container/lm-pricing-container.component'
import { LmPricingComponent } from './components/lm-pricing-container/lm-pricing/lm-pricing.component'

import { LmTestContainerComponent } from './components/lm-test-container/lm-test-container.component'
import { LmTestComponent } from './components/lm-test-container/lm-test/lm-test.component'

import { LmSettingsContainerComponent } from './components/lm-settings-container/lm-settings-container.component'
import { LmSettingsComponent } from './components/lm-settings-container/lm-settings/lm-settings.component'

import { LmProfileComponent } from './components/lm-settings-container/lm-profile/lm-profile.component'
import { LmKbprofileComponent } from './components/lm-settings-container/lm-kbprofile/lm-kbprofile.component'
import { LmPaymentMethodComponent } from './components/lm-settings-container/lm-payment-method/lm-payment-method.component'
import { LmDialogContainerComponent } from './components/lm-dialog-container/lm-dialog-container.component'
import { LmDialogComponent } from './components/lm-dialog-container/lm-dialog/lm-dialog.component'
import { LmInvoicesComponent } from './components/lm-settings-container/lm-invoices/lm-invoices.component';
import { LmContactContainerComponent } from './components/lm-contact-container/lm-contact-container.component';
import { LmContactComponent } from './components/lm-contact-container/lm-contact/lm-contact.component';
import { LmContactFormComponent } from './components/lm-contact-container/lm-contact/lm-contact-form/lm-contact-form.component';
import { LmFeedbackContainerComponent } from './components/lm-feedback-container/lm-feedback-container.component';
import { LmFeedbackComponent } from './components/lm-feedback-container/lm-feedback/lm-feedback.component';

const DECLARATIONS = [
  LmAppShellComponent,

  LmHomeContainerComponent, LmHomeComponent,
  LmHomeCarouselComponent,
  LmHomeOfferingsComponent,
  LmHomeSolutionsComponent,
  LmHomeAboutComponent,
  LmHomeCustomersComponent,

  LmNavbarContainerComponent, LmNavbarComponent,
  LmFooterContainerComponent, LmFooterComponent,
  LmLoginContainerComponent, LmLoginComponent,
  LmSignupContainerComponent, LmSignupComponent,
  LmCookiebarContainerComponent, LmCookiebarComponent,
  LmPricingContainerComponent, LmPricingComponent,
  LmTestContainerComponent, LmTestComponent,
  LmVerifyContainerComponent, LmVerifyComponent,
  LmContactContainerComponent, LmContactComponent,
  LmFeedbackContainerComponent, LmFeedbackComponent,
  LmSettingsContainerComponent, LmSettingsComponent,
  LmProfileComponent,
  LmKbprofileComponent,
  LmPaymentMethodComponent,
  LmInvoicesComponent,
  LmContactFormComponent,

  LmDialogContainerComponent, LmDialogComponent
]

const IMPORTS = [
  CommonModule,
  AppSharedModule,
  LmCoreRoutingModule,
]

const ENTRY_COMPONENTS = [
  LmDialogContainerComponent
]
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class LmCoreModule { }
