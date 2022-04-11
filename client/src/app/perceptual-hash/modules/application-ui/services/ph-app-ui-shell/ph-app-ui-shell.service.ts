import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'

import { APP_ROUTES } from '@ph-app/ph-app.routes'

import { PhApplicationModel } from '@ph-app/models/ph-app-ui-shell/ph-app-ui-shell.model'
import { PhHomeAssetsModel } from '../../models/ph-phash-app-ui/phash.model'

@Injectable({
  providedIn: 'root'
})
export class PhAppUIShellService {

  private _appList: PhApplicationModel[] = []
  private _appList$: BehaviorSubject<PhApplicationModel[]> = new BehaviorSubject<PhApplicationModel[]>([])

  private _assets: PhHomeAssetsModel

  constructor() {

    this._assets = {
      buttons: {
        text: 'Explore',
        link: null,
        appearance: 'raised',
        type: 'button',
        disabled: false,
        color: 'primary'
      }
    }

    this._appList = [
      {
        value: APP_ROUTES.PHASH._,
        viewValue: 'Perceptual Hashing',
        descriptions: [
          'Perceptual hashing refers to data generated when a user views two videos and tries to depict the visual similarity or difference between them',
          // 'This use case represents the duplicate data in two graphs',
          // 'The Circular Packed Graph provides and overview of all the videos compared',
          // 'Each blue circle represents a reference video which contains data of all the videos the reference video was compared with',
          // 'Each circle inside the blue circle is colored based on the mean hamming distance between frames of two videos being compared',
          // 'The Divergence Graph represents framewise comparison , degree of similarity between each individual frame throughout the video',
          // 'This functionality is also equipped with THEOplayer integrated which plays the inspected and reference videos side by side for visual validation'
        ]
      },
      {
        value: APP_ROUTES.COLORBAR,
        viewValue: 'Colorbar Detection',
        descriptions: [
          'Color bar detection refers to the presence of color bars in a video under analysis',
          // 'This use case indicates whether a video being analyzed has random color bars present in them',
          // 'This use case consists of a graph which is plotted with respect to time/duration of the video on the horiontal axis',
          // 'It is also equipped with a THEOplayer intergration which is capable of playing the video analysed',
          // 'When a datapoint on a graph is clicked, THEOplayer plays the video at the time code location corresponding to the data point',
          // 'This enables the user to directly navigate to the exact time in the video where the system has detected color bars'
        ]
      },
      {
        value: APP_ROUTES.BLACK_FRAMES,
        viewValue: 'Black Frames Detection',
        descriptions: [
          'Black frames detection refers to the presence of black frames throughout the video',
          // 'This use case indicates whether a video being analyzed has random black frames present in them',
          // 'This use case consists of a graph which is plotted with respect to time/duration of the video on the horiontal axis',
          // 'It is also equipped with a THEOplayer intergration which is capable of playing the video analysed',
          // 'When a datapoint on a graph is clicked, THEOplayer plays the video at the time code location corresponding to the data point',
          // 'This enables the user to directly navigate to the exact time in the video where the system has detected black frames',
          // 'This use case is also equipped with another graph which indicates scenes between fades and works in the same way as the earlier graph'
        ]
      },
      {
        value: APP_ROUTES.AUDIO,
        viewValue: 'Audio Difference',
        descriptions: [
          'Audio Difference refers to the presence of audio signature of inspected and reference videos and comparing them'
        ]
      },
      {
        value: APP_ROUTES.COUNT_DOWN,
        viewValue: 'Count Down Detection',
        descriptions: [
          'Countdown detection refers to the presence of the 5, 4, 3, 2, 1 countdown which typically occurs when a movie is being watched from the very start'
        ]
      },
      {
        value: APP_ROUTES.SCENE_DETECTION,
        viewValue: 'Scene Transition Detection',
        descriptions: [
          'Scene transition detection refers to detection of instances in the video where a scene is present in between black frames',
          'The scene detected using this algorithm may coincide with any scene which fades from or into a black screen'
        ]
      }
    ]
  }

  fetchAppList(): void {
    this._appList$.next(this._appList)
  }

  watchAppList$(): Observable<PhApplicationModel[]> {
    return this._appList$.asObservable()
  }

  fetchAssets(): Observable<PhHomeAssetsModel> {
    return of(this._assets)
  }
}
