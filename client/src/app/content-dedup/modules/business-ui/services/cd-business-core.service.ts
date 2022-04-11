import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { CdCoreService } from '@cd-core/services/cd-core.service'

@Injectable({
  providedIn: 'root'
})
export class CdBusinessCoreService {

  constructor(
    private _coreService: CdCoreService
  ) { }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._coreService.navigate({ path: [..._.path], extras: { ..._.extras } })
  }
}
