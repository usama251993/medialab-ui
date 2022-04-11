import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppRouteErrorComponent } from '@shared/components/app-route-error/app-route-error.component'

import { CORE_ROUTES } from './cd-core.routes'

import { CdAppShellComponent } from './components/cd-app-shell/cd-app-shell.component'

const ROUTES: Routes = [
  {
    path: CORE_ROUTES.EMPTY,
    component: CdAppShellComponent,
    children: [
      {
        path: CORE_ROUTES.EMPTY,
        loadChildren: () => import('./modules/business-ui/cd-business.module').then(_ => _.CdBusinessModule)
      },
      {
        path: CORE_ROUTES.APPLICATION,
        loadChildren: () => import('./modules/application-ui/cd-app.module').then(_ => _.CdAppModule)
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
export class CdCoreRoutingModule { }
