import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppSharedModule } from '@shared/app-shared.module'

import { CdAppRoutingModule } from './cd-app-routing.module'

import { CdBucketContainerComponent } from './components/cd-bucket-container/cd-bucket-container.component'
import { CdBucketComponent } from './components/cd-bucket-container/cd-bucket/cd-bucket.component'

import { CdResultShellContainerComponent } from './components/cd-result-shell-container/cd-result-shell-container.component'
import { CdResultShellComponent } from './components/cd-result-shell-container/cd-result-shell/cd-result-shell.component'

import { CdResultMetadataContainerComponent } from './components/cd-result-metadata-container/cd-result-metadata-container.component'
import { CdResultMetadataComponent } from './components/cd-result-metadata-container/cd-result-metadata/cd-result-metadata.component'

import { CdResultOverviewListContainerComponent } from './components/cd-result-overview-list-container/cd-result-overview-list-container.component'
import { CdResultOverviewListComponent } from './components/cd-result-overview-list-container/cd-result-overview-list/cd-result-overview-list.component'

import { CdResultOverviewContainerComponent } from './components/cd-result-overview-container/cd-result-overview-container.component'
import { CdResultOverviewComponent } from './components/cd-result-overview-container/cd-result-overview/cd-result-overview.component'

import { CdResultContainerComponent } from './components/cd-result-container/cd-result-container.component'
import { CdResultComponent } from './components/cd-result-container/cd-result/cd-result.component'

import { CdDialogContainerComponent } from './components/cd-dialog-container/cd-dialog-container.component'
import { CdDialogComponent } from './components/cd-dialog-container/cd-dialog/cd-dialog.component'

import { CdSummaryContainerComponent } from './components/cd-summary-container/cd-summary-container.component'
import { CdSummaryGraphComponent } from './components/cd-summary-container/cd-summary/cd-summary-graph/cd-summary-graph.component'
import { CdSummaryComponent } from './components/cd-summary-container/cd-summary/cd-summary.component'

const DECLARATIONS = [
  CdBucketContainerComponent, CdBucketComponent,
  CdResultShellContainerComponent, CdResultShellComponent,
  CdResultMetadataContainerComponent, CdResultMetadataComponent,
  CdResultOverviewListContainerComponent, CdResultOverviewListComponent,
  CdResultOverviewContainerComponent, CdResultOverviewComponent,
  CdResultContainerComponent, CdResultComponent,
  CdDialogContainerComponent, CdDialogComponent,
  CdSummaryContainerComponent, CdSummaryComponent,
  CdSummaryGraphComponent
]
const IMPORTS = [
  CommonModule,
  CdAppRoutingModule,
  AppSharedModule
]
const ENTRY_COMPONENTS = [CdDialogContainerComponent]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class CdAppModule { }
