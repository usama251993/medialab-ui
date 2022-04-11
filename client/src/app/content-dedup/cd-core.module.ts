import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppSharedModule } from '@shared/app-shared.module'

import { CdCoreRoutingModule } from './cd-core-routing.module'

import { CdAppShellComponent } from './components/cd-app-shell/cd-app-shell.component'

import { CdNavbarContainerComponent } from './components/cd-navbar-container/cd-navbar-container.component'
import { CdNavbarComponent } from './components/cd-navbar-container/cd-navbar/cd-navbar.component'

import { CdFooterContainerComponent } from './components/cd-footer-container/cd-footer-container.component'
import { CdFooterComponent } from './components/cd-footer-container/cd-footer/cd-footer.component'

const DECLARATIONS = [
  CdAppShellComponent,
  CdNavbarContainerComponent, CdNavbarComponent,
  CdFooterContainerComponent, CdFooterComponent
]

const IMPORTS = [
  CommonModule,
  CdCoreRoutingModule,
  AppSharedModule
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS]
})
export class CdCoreModule { }
