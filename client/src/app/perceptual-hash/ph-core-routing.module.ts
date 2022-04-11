import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppRouteErrorComponent } from '@shared/components/app-route-error/app-route-error.component'

import { CORE_ROUTES } from './ph-core.routes'

import { PhAppShellComponent } from './components/ph-app-shell/ph-app-shell.component'

const ROUTES: Routes = [
  {
    path: CORE_ROUTES.EMPTY,
    component: PhAppShellComponent,
    children: [
      {
        path: CORE_ROUTES.EMPTY,
        loadChildren: () => import('./modules/business-ui/ph-business.module').then(_ => _.PhBusinessModule)
      },
      {
        path: CORE_ROUTES.APPLICATION,
        loadChildren: () => import('./modules/application-ui/ph-app.module').then(_ => _.PhAppModule)
      }
    ]
  },
  {
    path: CORE_ROUTES.ERROR,
    component: AppRouteErrorComponent
  },
  {
    path: CORE_ROUTES.WILDCARD, redirectTo: CORE_ROUTES.ERROR
  }
]

const IMPORTS = [RouterModule.forChild(ROUTES)]
const EXPORTS = [RouterModule]

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS]
})
export class PhCoreRoutingModule { }
