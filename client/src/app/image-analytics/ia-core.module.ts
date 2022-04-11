import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppSharedModule } from '@shared/app-shared.module'

import { IaCoreRoutingModule } from './ia-core-routing.module'

import { IaNavbarContainerComponent } from './components/ia-navbar-container/ia-navbar-container.component'
import { IaNavbarComponent } from './components/ia-navbar-container/ia-navbar/ia-navbar.component'
import { IaFooterContainerComponent } from './components/ia-footer-container/ia-footer-container.component'
import { IaFooterComponent } from './components/ia-footer-container/ia-footer/ia-footer.component'
import { IaAppShellComponent } from './components/ia-app-shell/ia-app-shell.component'

const DECLARATIONS = [
  IaAppShellComponent,
  IaNavbarContainerComponent, IaNavbarComponent,
  IaFooterContainerComponent, IaFooterComponent
]

const IMPORTS = [
  CommonModule,
  IaCoreRoutingModule,
  AppSharedModule
]

@NgModule({
  declarations: [...DECLARATIONS, IaNavbarContainerComponent],
  imports: [...IMPORTS]
})
export class IaCoreModule { }
