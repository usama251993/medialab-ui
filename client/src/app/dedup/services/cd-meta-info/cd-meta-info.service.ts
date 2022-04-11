import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router'
import { APP_ROUTES } from 'src/app/app.routes'
import { CORE_ROUTES } from '@cd-core/cd-core.routes'

@Injectable({
  providedIn: 'root'
})
export class CdMetaInfoService {

  private _metaInfo: {
    parameter: string
    count: number
  }[]

  constructor(
    private _router: Router) {
    this._metaInfo = [
      { parameter: 'Sample Videos', count: 54 },
      { parameter: 'Duplicate Videos', count: 15 },
      { parameter: 'Unmatched Videos', count: 39 }
    ]
  }

  fetchMetaInfo$(): Observable<{ parameter: string; count: number }[]> {
    return of(this._metaInfo)
  }

  gotoSummary() {
    this._router.navigate([APP_ROUTES.DEDUPLICATION, CORE_ROUTES.SUMMARY])
  }
}
