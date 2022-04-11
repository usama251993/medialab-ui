import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { AppSharedModule } from '@shared/app-shared.module'

const DECLARATIONS = [
  AppComponent
]

const IMPORTS = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  AppSharedModule
]

const PROVIDERS = []

const BOOTSTRAP = [
  AppComponent
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  providers: [...PROVIDERS],
  bootstrap: [...BOOTSTRAP]
})
export class AppModule { }
