import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { PhCoreService } from '@ph-core/services/ph-core.service';

@Injectable({
  providedIn: 'root'
})
export class PhBusinessCoreService {

  constructor(
    private _coreService: PhCoreService
  ) { }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    this._coreService.navigate({ path: [..._.path], extras: {} })
  }
}
