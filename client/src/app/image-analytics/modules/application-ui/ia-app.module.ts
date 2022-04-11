import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppSharedModule } from '@shared/app-shared.module'

import { IaAppRoutingModule } from './ia-app-routing.module'

import { IaBucketContainerComponent } from './components/ia-bucket-container/ia-bucket-container.component'
import { IaBucketComponent } from './components/ia-bucket-container/ia-bucket/ia-bucket.component'

import { IaResultShellContainerComponent } from './components/ia-result-shell-container/ia-result-shell-container.component'
import { IaResultShellComponent } from './components/ia-result-shell-container/ia-result-shell/ia-result-shell.component'

import { IaResultMetadataContainerComponent } from './components/ia-result-metadata-container/ia-result-metadata-container.component'
import { IaResultMetadataComponent } from './components/ia-result-metadata-container/ia-result-metadata/ia-result-metadata.component'

import { IaResultOverviewListContainerComponent } from './components/ia-result-overview-list-container/ia-result-overview-list-container.component'
import { IaResultOverviewListComponent } from './components/ia-result-overview-list-container/ia-result-overview-list/ia-result-overview-list.component'

import { IaResultOverviewContainerComponent } from './components/ia-result-overview-container/ia-result-overview-container.component'
import { IaResultOverviewComponent } from './components/ia-result-overview-container/ia-result-overview/ia-result-overview.component'

import { IaResultContainerComponent } from './components/ia-result-container/ia-result-container.component'
import { IaResultComponent } from './components/ia-result-container/ia-result/ia-result.component'

import { IaDialogContainerComponent } from './components/ia-dialog-container/ia-dialog-container.component'
import { IaDialogComponent } from './components/ia-dialog-container/ia-dialog/ia-dialog.component'

import { IaSummaryContainerComponent } from './components/ia-summary-container/ia-summary-container.component'
import { IaSummaryGraphComponent } from './components/ia-summary-container/ia-summary/ia-summary-graph/ia-summary-graph.component'
import { IaSummaryComponent } from './components/ia-summary-container/ia-summary/ia-summary.component'

const DECLARATIONS = [
  IaBucketContainerComponent, IaBucketComponent,
  IaResultShellContainerComponent, IaResultShellComponent,
  IaResultMetadataContainerComponent, IaResultMetadataComponent,
  IaResultOverviewListContainerComponent, IaResultOverviewListComponent,
  IaResultOverviewContainerComponent, IaResultOverviewComponent,
  IaResultContainerComponent, IaResultComponent,
  IaDialogContainerComponent, IaDialogComponent,
  IaSummaryContainerComponent, IaSummaryComponent,
  IaSummaryGraphComponent
]
const IMPORTS = [
  CommonModule,
  IaAppRoutingModule,
  AppSharedModule
]
const ENTRY_COMPONENTS = [IaDialogContainerComponent]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class IaAppModule { }
