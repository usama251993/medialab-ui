import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppRouteErrorComponent } from '@shared/components/app-route-error/app-route-error.component'

import { APP_ROUTES } from './cd-app.routes'

import { CdBucketContainerComponent } from './components/cd-bucket-container/cd-bucket-container.component'
import { CdResultContainerComponent } from './components/cd-result-container/cd-result-container.component'
import { CdResultOverviewListContainerComponent } from './components/cd-result-overview-list-container/cd-result-overview-list-container.component'
import { CdResultShellContainerComponent } from './components/cd-result-shell-container/cd-result-shell-container.component'
import { CdSummaryContainerComponent } from './components/cd-summary-container/cd-summary-container.component'

import { CdResultResolveGuard, CdResultListResolveGuard } from './services/cd-result/cd-result.guard'

const ROUTES: Routes = [
  {
    path: APP_ROUTES.EMPTY,
    component: CdBucketContainerComponent
  },
  {
    path: APP_ROUTES.RESULT_LIST,
    component: CdResultShellContainerComponent,
    children: [
      {
        path: APP_ROUTES.EMPTY,
        component: CdResultOverviewListContainerComponent,
        resolve: { resultList: CdResultListResolveGuard }
      },
      {
        path: ':algorithm',
        component: CdResultContainerComponent,
        resolve: { result: CdResultResolveGuard }
      }
    ]
  },
  {
    path: APP_ROUTES.SUMMARY,
    component: CdSummaryContainerComponent
  },
  {
    path: APP_ROUTES.ERROR,
    component: AppRouteErrorComponent
  },
  {
    path: APP_ROUTES.WILDCARD, redirectTo: APP_ROUTES.ERROR
  }
]

const IMPORTS = [RouterModule.forChild(ROUTES)]
const EXPORTS = [RouterModule]

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS]
})
export class CdAppRoutingModule { }
