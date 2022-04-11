import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppMaterialModule } from '@shared/material/app-material.module'
import { AppRouteErrorComponent } from './components/app-route-error/app-route-error.component'
import { AppHomeContainerComponent } from './components/app-home-container/app-home-container.component'
import { AppHomeComponent } from './components/app-home-container/app-home/app-home.component'

const MODULES = [
  AppMaterialModule,
  ReactiveFormsModule,
  HttpClientModule
]

const DECLARATIONS = [
  AppRouteErrorComponent,
  AppHomeContainerComponent,
  AppHomeComponent
]

@NgModule({
  imports: MODULES,
  exports: MODULES,
  declarations: DECLARATIONS
})
export class SharedModule { }
