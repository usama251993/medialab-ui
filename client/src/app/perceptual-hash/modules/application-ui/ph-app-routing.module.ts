import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { APP_ROUTES } from './ph-app.routes'

import { PhAppUIShellContainerComponent } from './components/ph-app-ui-shell-container/ph-app-ui-shell-container.component'
import { PhAudioContainerComponent } from './components/ph-audio-app-ui/ph-audio-container/ph-audio-container.component'
import { PhBlackFrameContainerComponent } from './components/ph-black-frame-app-ui/ph-black-frame-container/ph-black-frame-container.component'
import { PhColorbarContainerComponent } from './components/ph-colorbar-app-ui/ph-colorbar-container/ph-colorbar-container.component'
import { PhCountDownContainerComponent } from './components/ph-countdown-app-ui/ph-countdown-container/ph-countdown-container.component'
import { PhPhashOverviewContainerComponent } from './components/ph-phash-app-ui/ph-phash-overview-container/ph-phash-overview-container.component'
import { PhPhashResultContainerComponent } from './components/ph-phash-app-ui/ph-phash-result-container/ph-phash-result-container.component'
import { PhPhashBucketContainerComponent } from './components/ph-phash-app-ui/ph-phash-bucket-container/ph-phash-bucket-container.component'
import { PhSceneDetectionContainerComponent } from './components/ph-scene-detection-app-ui/ph-scene-detection-container/ph-scene-detection-container.component'

import { PhPhashOverviewResolver } from './services/ph-phash-app-ui/guards/ph-phash-overview/ph-phash-overview.resolver'
import { PhPhashResultResolver } from './services/ph-phash-app-ui/guards/ph-phash-result/ph-phash-result.resolver'

const routes: Routes = [
  {
    path: APP_ROUTES.EMPTY,
    component: PhAppUIShellContainerComponent
  },
  {
    path: APP_ROUTES.PHASH._,
    children: [
      {
        path: APP_ROUTES.EMPTY,
        component: PhPhashBucketContainerComponent
      },
      {
        path: APP_ROUTES.PHASH.OVERVIEW,
        children: [
          {
            path: APP_ROUTES.EMPTY,
            component: PhPhashOverviewContainerComponent,
            resolve: { chartOverview: PhPhashOverviewResolver }
          },
          {
            path: APP_ROUTES.PHASH.RESULT,
            component: PhPhashResultContainerComponent,
            resolve: { chartData: PhPhashResultResolver }
          }
        ]
      }
    ]
  },
  {
    path: APP_ROUTES.COLORBAR,
    component: PhColorbarContainerComponent
  },
  {
    path: APP_ROUTES.COUNT_DOWN,
    component: PhCountDownContainerComponent
  },
  {
    path: APP_ROUTES.SCENE_DETECTION,
    component: PhSceneDetectionContainerComponent
  },
  {
    path: APP_ROUTES.BLACK_FRAMES,
    component: PhBlackFrameContainerComponent
  },
  {
    path: APP_ROUTES.AUDIO,
    component: PhAudioContainerComponent
  }

]

const IMPORTS = [RouterModule.forChild(routes)]
const EXPORTS = [RouterModule]

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS]
})
export class PhAppRoutingModule { }
