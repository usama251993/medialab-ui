import { isDevMode, NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { APP_ROUTES } from './app.routes'

const ROUTES: Routes = [
  {
    path: APP_ROUTES.EMPTY,
    loadChildren: () => import('@lm-core/lm-core.module').then(_ => _.LmCoreModule)
  }
]

const IMPORTS = [
  RouterModule.forRoot(ROUTES, {
    // enableTracing: isDevMode()
  })
]

const EXPORTS = [
  RouterModule
]

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS]
})
export class AppRoutingModule { }
