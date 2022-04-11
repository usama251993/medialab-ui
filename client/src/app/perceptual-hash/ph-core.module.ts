import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppSharedModule } from '@shared/app-shared.module'

import { PhCoreRoutingModule } from './ph-core-routing.module'

import { PhAppShellComponent } from './components/ph-app-shell/ph-app-shell.component'

import { PhNavbarContainerComponent } from './components/ph-navbar-container/ph-navbar-container.component'
import { PhNavbarComponent } from './components/ph-navbar-container/ph-navbar/ph-navbar.component'

import { PhFooterContainerComponent } from './components/ph-footer-container/ph-footer-container.component'
import { PhFooterComponent } from './components/ph-footer-container/ph-footer/ph-footer.component'

const DECLARATIONS = [
  PhAppShellComponent,
  PhNavbarContainerComponent, PhNavbarComponent,
  PhFooterContainerComponent, PhFooterComponent
]

const IMPORTS = [
  CommonModule,
  PhCoreRoutingModule,
  AppSharedModule
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS]
})
export class PhCoreModule { }
