import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { IaAppCoreService } from '../../ia-app-core.service'
import { IaSummaryModel } from '@ia-app/models/ia-result.model'

@Injectable({
  providedIn: 'root'
})
export class IaSummaryResolver implements Resolve<IaSummaryModel> {

  constructor(
    private _coreService: IaAppCoreService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IaSummaryModel> {
    return this._coreService.watchOverviewList$().pipe(
      map(__ => __.summary)
    )
  }
}
