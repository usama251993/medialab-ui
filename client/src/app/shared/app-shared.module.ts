import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppMaterialModule } from '@shared/modules/app-material.module'

import { AppRouteErrorComponent } from './components/app-route-error/app-route-error.component'

import { AppLoaderContainerComponent } from './components/app-loader-container/app-loader-container.component'
import { AppLoaderComponent } from './components/app-loader-container/app-loader/app-loader.component'

import { AppTheoplayerContainerComponent } from './components/app-theoplayer-container/app-theoplayer-container.component'
import { AppTheoplayerComponent } from './components/app-theoplayer-container/app-theoplayer/app-theoplayer.component'

import { AppCarouselContainerComponent } from './components/app-carousel-container/app-carousel-container.component'
import { AppCarouselComponent } from './components/app-carousel-container/app-carousel/app-carousel.component'

import { AppZigzagContainerComponent } from './components/app-zigzag-container/app-zigzag-container.component'
import { AppZigzagComponent } from './components/app-zigzag-container/app-zigzag/app-zigzag.component'

import { AppTableauContainerComponent } from './components/app-tableau-container/app-tableau-container.component'
import { AppTableauComponent } from './components/app-tableau-container/app-tableau/app-tableau.component';
import { AppButtonContainerComponent } from './components/app-button-container/app-button-container.component';
import { AppButtonComponent } from './components/app-button-container/app-button/app-button.component'

const IMPORTS = [
  CommonModule,
  AppMaterialModule,
  ReactiveFormsModule,
  HttpClientModule
]

const EXPORTS = [...IMPORTS]

const DECLARATIONS = [
  AppRouteErrorComponent,
  AppLoaderContainerComponent, AppLoaderComponent,
  AppTheoplayerContainerComponent, AppTheoplayerComponent,
  AppCarouselContainerComponent, AppCarouselComponent,
  AppZigzagContainerComponent, AppZigzagComponent,
  AppTableauContainerComponent, AppTableauComponent,
  AppButtonContainerComponent, AppButtonComponent
]

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS, ...DECLARATIONS],
  declarations: [...DECLARATIONS]
})
export class AppSharedModule { }
