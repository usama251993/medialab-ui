import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'

import { CdCoreRoutingModule } from './cd-core-routing.module'

import { CdAppShellComponent } from './components/cd-app-shell/cd-app-shell.component'
import { CdNavbarContainerComponent } from './components/cd-navbar-container/cd-navbar-container.component'
import { CdNavbarComponent } from './components/cd-navbar-container/cd-navbar/cd-navbar.component'
import { CdBucketContainerComponent } from './components/cd-bucket-container/cd-bucket-container.component'
import { CdBucketComponent } from './components/cd-bucket-container/cd-bucket/cd-bucket.component'
import { CdProgressContainerComponent } from './components/cd-progress-container/cd-progress-container.component'
import { CdProgressComponent } from './components/cd-progress-container/cd-progress/cd-progress.component'
import { CdResultListContainerComponent } from './components/cd-result-list-container/cd-result-list-container.component'
import { CdResultListComponent } from './components/cd-result-list-container/cd-result-list/cd-result-list.component'
import { CdResultOverviewContainerComponent } from './components/cd-result-list-container/cd-result-list/cd-result-overview-container/cd-result-overview-container.component'
import { CdResultOverviewComponent } from './components/cd-result-list-container/cd-result-list/cd-result-overview-container/cd-result-overview/cd-result-overview.component'
import { CdResultContainerComponent } from './components/cd-result-list-container/cd-result-list/cd-result-container/cd-result-container.component'
import { CdResultComponent } from './components/cd-result-list-container/cd-result-list/cd-result-container/cd-result/cd-result.component'
import { CdFooterContainerComponent } from './components/cd-footer-container/cd-footer-container.component'
import { CdTheoplayerContainerComponent } from './components/cd-theoplayer-container/cd-theoplayer-container.component'
import { CdTheoplayerComponent } from './components/cd-theoplayer-container/cd-theoplayer/cd-theoplayer.component'
import { CdFooterComponent } from './components/cd-footer-container/cd-footer/cd-footer.component'
import { CdSummaryContainerComponent } from './components/cd-summary-container/cd-summary-container.component'
import { CdSummaryComponent } from './components/cd-summary-container/cd-summary/cd-summary.component'
import { CdDialogContainerComponent } from './components/cd-dialog-container/cd-dialog-container.component'
import { CdDialogComponent } from './components/cd-dialog-container/cd-dialog/cd-dialog.component'

import { HttpClientModule } from '@angular/common/http'

const DECLARATIONS = [
  CdAppShellComponent,
  CdNavbarContainerComponent,
  CdNavbarComponent,
  CdBucketContainerComponent,
  CdBucketComponent,
  CdProgressContainerComponent,
  CdProgressComponent,
  CdResultListContainerComponent,
  CdResultListComponent,
  CdResultOverviewContainerComponent,
  CdResultOverviewComponent,
  CdResultContainerComponent,
  CdResultComponent,
  CdFooterContainerComponent,
  CdFooterComponent,
  CdTheoplayerContainerComponent,
  CdTheoplayerComponent,
  CdSummaryContainerComponent,
  CdSummaryComponent,
  CdDialogContainerComponent,
  CdDialogComponent
]

const IMPORTS = [
  CommonModule,
  CdCoreRoutingModule,
  SharedModule,
  HttpClientModule
]

const ENTRY_COMPONENTS = [
  CdDialogContainerComponent
]

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  entryComponents: ENTRY_COMPONENTS
})
export class CdCoreModule { }
