import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from 'src/environments/environment'

import { APP_ROUTES } from './app.routes'
import { AppHomeContainerComponent } from '@shared/components/app-home-container/app-home-container.component'

const ROUTES: Routes = [
  {
    path: APP_ROUTES.MEDIALAB,
    loadChildren: () => import('@lm-core/lm-core.module').then(_ => _.LmCoreModule)
  },
  {
    path: APP_ROUTES.DEDUPLICATION,
    loadChildren: () => import('@cd-core/cd-core.module').then(_ => _.CdCoreModule)
  },
  {
    path: APP_ROUTES.EMPTY,
    component: AppHomeContainerComponent
  }
]

const IMPORTS = [
  RouterModule.forRoot(ROUTES, {
    // enableTracing: !environment.production
  })
]

const EXPORTS = [
  RouterModule
]

@NgModule({
  imports: IMPORTS,
  exports: EXPORTS
})
export class AppRoutingModule { }
