import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppSharedModule } from '@shared/app-shared.module'

import { PhAppRoutingModule } from './ph-app-routing.module'

import { PhAppUIShellContainerComponent } from './components/ph-app-ui-shell-container/ph-app-ui-shell-container.component'
import { PhAppUIShellComponent } from './components/ph-app-ui-shell-container/ph-app-ui-shell/ph-app-ui-shell.component'

import { PhPhashBucketContainerComponent } from './components/ph-phash-app-ui/ph-phash-bucket-container/ph-phash-bucket-container.component'
import { PhPhashBucketComponent } from './components/ph-phash-app-ui/ph-phash-bucket-container/ph-phash-bucket/ph-phash-bucket.component'

import { PhPhashOverviewContainerComponent } from './components/ph-phash-app-ui/ph-phash-overview-container/ph-phash-overview-container.component'
import { PhPhashOverviewComponent } from './components/ph-phash-app-ui/ph-phash-overview-container/ph-phash-overview/ph-phash-overview.component'
import { PhCircularPackedChartComponent } from './components/ph-phash-app-ui/ph-phash-overview-container/ph-phash-overview/ph-circular-packed-chart/ph-circular-packed-chart.component'

import { PhPhashResultContainerComponent } from './components/ph-phash-app-ui/ph-phash-result-container/ph-phash-result-container.component'
import { PhPhashResultComponent } from './components/ph-phash-app-ui/ph-phash-result-container/ph-phash-result/ph-phash-result.component'
import { PhDivergenceComponent } from './components/ph-phash-app-ui/ph-phash-result-container/ph-phash-result/ph-divergence/ph-divergence.component'

import { PhPhashComparisonSummaryContainerComponent } from './components/ph-phash-app-ui/ph-phash-comparison-summary-container/ph-phash-comparison-summary-container.component'
import { PhPhashComparisonSummaryComponent } from './components/ph-phash-app-ui/ph-phash-comparison-summary-container/ph-phash-comparison-summary/ph-phash-comparison-summary.component'

import { PhColorbarContainerComponent } from './components/ph-colorbar-app-ui/ph-colorbar-container/ph-colorbar-container.component'
import { PhColorbarComponent } from './components/ph-colorbar-app-ui/ph-colorbar-container/ph-colorbar/ph-colorbar.component'
import { PhColorbarChartComponent } from './components/ph-colorbar-app-ui/ph-colorbar-container/ph-colorbar/ph-colorbar-chart/ph-colorbar-chart.component'

import { PhBlackFrameContainerComponent } from './components/ph-black-frame-app-ui/ph-black-frame-container/ph-black-frame-container.component'
import { PhBlackFrameComponent } from './components/ph-black-frame-app-ui/ph-black-frame-container/ph-black-frame/ph-black-frame.component'
import { PhBlackFrameChartComponent } from './components/ph-black-frame-app-ui/ph-black-frame-container/ph-black-frame/ph-black-frame-chart/ph-black-frame-chart.component'

import { PhCountDownContainerComponent } from './components/ph-countdown-app-ui/ph-countdown-container/ph-countdown-container.component'
import { PhCountDownChartComponent } from './components/ph-countdown-app-ui/ph-countdown-container/ph-countdown/ph-countdown-chart/ph-countdown-chart.component'
import { PhCountDownComponent } from './components/ph-countdown-app-ui/ph-countdown-container/ph-countdown/ph-countdown.component'

import { PhSceneDetectionChartComponent } from './components/ph-scene-detection-app-ui/ph-scene-detection-container/ph-scene-detection/ph-scene-detection-chart/ph-scene-detection-chart.component'
import { PhSceneDetectionContainerComponent } from './components/ph-scene-detection-app-ui/ph-scene-detection-container/ph-scene-detection-container.component'
import { PhSceneDetectionComponent } from './components/ph-scene-detection-app-ui/ph-scene-detection-container/ph-scene-detection/ph-scene-detection.component'
import { PhSceneDetectionBlackChartComponent } from './components/ph-scene-detection-app-ui/ph-scene-detection-container/ph-scene-detection/ph-scene-detection-black-chart/ph-scene-detection-black-chart.component'

import { PhAudioContainerComponent } from './components/ph-audio-app-ui/ph-audio-container/ph-audio-container.component'
import { PhAudioComponent } from './components/ph-audio-app-ui/ph-audio-container/ph-audio/ph-audio.component'
import { PhAudioChartComponent } from './components/ph-audio-app-ui/ph-audio-container/ph-audio/ph-audio-chart/ph-audio-chart.component'
import { PhMatrixComponent } from './components/ph-phash-app-ui/ph-phash-overview-container/ph-phash-overview/ph-matrix/ph-matrix.component'
import { PhSankeyComponent } from './components/ph-phash-app-ui/ph-phash-result-container/ph-phash-result/ph-sankey/ph-sankey.component'
import { PhScenebarChartComponent } from './components/ph-phash-app-ui/ph-phash-result-container/ph-phash-result/ph-scenebar-chart/ph-scenebar-chart.component'
import { PhPlayerControlComponent } from './components/ph-phash-app-ui/ph-phash-result-container/ph-phash-result/ph-player-control/ph-player-control.component'

const DECLARATIONS = [
  PhAppUIShellContainerComponent, PhAppUIShellComponent,

  PhPhashBucketContainerComponent, PhPhashBucketComponent,

  PhPhashOverviewContainerComponent, PhPhashOverviewComponent,
  PhCircularPackedChartComponent,
  PhMatrixComponent,

  PhPhashResultContainerComponent, PhPhashResultComponent,
  PhScenebarChartComponent,
  PhDivergenceComponent,
  PhSankeyComponent,

  PhPhashComparisonSummaryContainerComponent, PhPhashComparisonSummaryComponent,
  PhColorbarContainerComponent, PhColorbarComponent,
  PhColorbarChartComponent,

  PhBlackFrameContainerComponent, PhBlackFrameComponent,
  PhBlackFrameChartComponent,

  PhCountDownContainerComponent, PhCountDownComponent,

  PhCountDownChartComponent, PhPlayerControlComponent,

  PhSceneDetectionContainerComponent, PhSceneDetectionComponent,
  PhSceneDetectionChartComponent,
  PhSceneDetectionBlackChartComponent,

  PhAudioContainerComponent, PhAudioComponent,
  PhAudioChartComponent
]

const IMPORTS = [
  CommonModule,
  PhAppRoutingModule,
  AppSharedModule
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS]
})
export class PhAppModule { }
