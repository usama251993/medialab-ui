import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppRouteErrorComponent } from '@shared/components/app-route-error/app-route-error.component'

import { CORE_ROUTES } from './ia-core.routes'

import { IaAppShellComponent } from './components/ia-app-shell/ia-app-shell.component'

const ROUTES: Routes = [
  {
    path: CORE_ROUTES.EMPTY,
    component: IaAppShellComponent,
    children: [
      {
        path: CORE_ROUTES.EMPTY,
        loadChildren: () => import('./modules/business-ui/ia-business.module').then(_ => _.IaBusinessModule)
      },
      {
        path: CORE_ROUTES.APPLICATION,
        loadChildren: () => import('./modules/application-ui/ia-app.module').then(_ => _.IaAppModule)
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
export class IaCoreRoutingModule { }
