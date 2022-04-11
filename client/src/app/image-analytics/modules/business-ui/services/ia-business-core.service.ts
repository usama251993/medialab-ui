import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { IaCoreService } from '@ia-core/services/ia-core.service'

@Injectable({
  providedIn: 'root'
})
export class IaBusinessCoreService {

  constructor(
    private _coreService: IaCoreService
  ) { }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._coreService.navigate({ path: [..._.path], extras: { ..._.extras } })
  }
}
