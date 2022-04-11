import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppRouteErrorComponent } from '@shared/components/app-route-error/app-route-error.component'

import { APP_ROUTES } from './ia-app.routes'

import { IaBucketContainerComponent } from './components/ia-bucket-container/ia-bucket-container.component'
import { IaResultContainerComponent } from './components/ia-result-container/ia-result-container.component'
import { IaResultOverviewListContainerComponent } from './components/ia-result-overview-list-container/ia-result-overview-list-container.component'
import { IaResultShellContainerComponent } from './components/ia-result-shell-container/ia-result-shell-container.component'
import { IaSummaryContainerComponent } from './components/ia-summary-container/ia-summary-container.component'

import { IaResultOverviewResolver } from './services/guards/ia-result-overview/ia-result-overview.resolver'
import { IaResultDetailResolver } from './services/guards/ia-result-detail/ia-result-detail.resolver'

const ROUTES: Routes = [
  {
    path: APP_ROUTES.EMPTY,
    component: IaBucketContainerComponent
  },
  {
    path: APP_ROUTES.RESULT_LIST,
    component: IaResultShellContainerComponent,
    children: [
      {
        path: APP_ROUTES.EMPTY,
        component: IaResultOverviewListContainerComponent,
        resolve: { resultList: IaResultOverviewResolver }
      },
      {
        path: ':algorithm',
        component: IaResultContainerComponent,
        resolve: { result: IaResultDetailResolver }
      }
    ]
  },
  {
    path: APP_ROUTES.SUMMARY,
    component: IaSummaryContainerComponent
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
export class IaAppRoutingModule { }
