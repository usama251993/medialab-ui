
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppRouteErrorComponent } from '@shared/components/app-route-error/app-route-error.component'

import { CORE_ROUTES } from './cd-core.routes'
import { CdAppShellComponent } from './components/cd-app-shell/cd-app-shell.component'
import { CdBucketContainerComponent } from './components/cd-bucket-container/cd-bucket-container.component'
import { CdResultListContainerComponent } from './components/cd-result-list-container/cd-result-list-container.component'
import { CdResultContainerComponent } from './components/cd-result-list-container/cd-result-list/cd-result-container/cd-result-container.component'

import { CdResultListResolve, CdResultListCanDeactivate } from './services/cd-result-list/cd-result-list.guard'
import { CdSummaryContainerComponent } from './components/cd-summary-container/cd-summary-container.component'

const ROUTES: Routes = [
  {
    path: CORE_ROUTES.EMPTY,
    component: CdAppShellComponent,
    children: [
      {
        path: CORE_ROUTES.BUCKET,
        component: CdBucketContainerComponent
      },
      {
        path: CORE_ROUTES.RESULT_LIST,
        children: [
          {
            path: CORE_ROUTES.EMPTY,
            component: CdResultListContainerComponent,
            resolve: { formData: CdResultListResolve }
            // canDeactivate: [CdResultListCanDeactivate]
          },
          {
            path: ':algorithm',
            component: CdResultContainerComponent
          }

        ]
      },
      {
        path: CORE_ROUTES.SUMMARY,
        component: CdSummaryContainerComponent
      },
      {
        path: CORE_ROUTES.EMPTY,
        redirectTo: CORE_ROUTES.BUCKET
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

const IMPORTS = [
  RouterModule.forChild(ROUTES)
]

const EXPORTS = [
  RouterModule
]

@NgModule({
  imports: IMPORTS,
  exports: EXPORTS
})
export class CdCoreRoutingModule { }
