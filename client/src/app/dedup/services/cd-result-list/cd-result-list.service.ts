import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, of } from 'rxjs'

import { CdResultOverviewModel } from '@cd-core/models/cd-result-overview.model'
import { CdCoreService } from '../cd-core.service'
import { APP_ROUTES } from 'src/app/app.routes'
import { CORE_ROUTES } from '@cd-core/cd-core.routes'

@Injectable({
  providedIn: 'root'
})
export class CdResultListService {

  constructor(
    private _router: Router,
    private _coreService: CdCoreService
  ) { }

  fetchBucketForm$(): Observable<FormData> {
    return this._coreService.getBucketForm()
  }

  fetchResultList$(): Observable<CdResultOverviewModel[]> {
    return of([
      {
        algorithm: {
          value: 'audio',
          viewValue: 'Additional Audio Data'
        },
        progress: 0,
        duplicates: 0
      },
      {
        algorithm: {
          value: 'language',
          viewValue: 'Same Videos with Different Language Tracks'
        },
        progress: 0,
        duplicates: 0
      },
      {
        algorithm: {
          value: 'textual',
          viewValue: 'Same Videos with Different Textual Captions'
        },
        progress: 0,
        duplicates: 0
      },
      {
        algorithm: {
          value: 'equipment',
          viewValue: 'Same Videos Recorded or Encoded with Different Equipment'
        },
        progress: 0,
        duplicates: 0
      },
      {
        algorithm: {
          value: 'framerates',
          viewValue: 'Same Videos with Different Frame Rates and Resolutions'
        },
        progress: 0,
        duplicates: 0
      },
      {
        algorithm: {
          value: 'timecode',
          viewValue: 'Same Videos with Different Time Code Start and End Points'
        },
        progress: 0,
        duplicates: 0
      },
      {
        algorithm: {
          value: 'audioSegment',
          viewValue: 'Same Videos with Audio Segments in between Video Segments'
        },
        progress: 0,
        duplicates: 0
      }
    ])
  }

  gotoBucketSelection() {
    this._router.navigate([APP_ROUTES.DEDUPLICATION, CORE_ROUTES.BUCKET])
  }

}
