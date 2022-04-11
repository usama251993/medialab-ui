import { Injectable } from '@angular/core'
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
  CanDeactivate
} from '@angular/router'

import { AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { CdBucketService } from '../cd-bucket/cd-bucket.service'
import { CdCoreService } from '../cd-core.service'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CdResultListResolve implements Resolve<AppEndpointResponseModel> {

  constructor(
    private _coreService: CdCoreService,
    private _bucketService: CdBucketService,
    private _router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AppEndpointResponseModel> {
    return (!this._coreService.bIsDataAvailable)
      ? this._bucketService.fetchResults$(<FormData>this._router.getCurrentNavigation().extras.state)
      : of({ status: 200, data: {}, error: null })

  }
}

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean>
}

@Injectable({
  providedIn: 'root'
})
export class CdResultListCanDeactivate implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): Observable<boolean> {
    console.log('CanDeactivate in guard')
    console.log(component)
    // return component.canDeactivate ? component.canDeactivate() : of(true);
    return of(true)
  }
}
