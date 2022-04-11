import { Injectable } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Observable, of, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

import { AppEndpointService } from '@shared/facade/services/app-endpoint/app-endpoint.service'
import { AppOptionModel } from '@shared/models/app-assets.model'
import * as fromEndpointModel from '@shared/models/app-endpoint.model'
import { CORE_ROUTES } from '@cd-core/cd-core.routes'
import { APP_ROUTES } from '../../../app.routes'

import { CdCoreService } from '@cd-core/services/cd-core.service'

@Injectable({
  providedIn: 'root'
})
export class CdBucketService {

  private _bucketList: AppOptionModel[]

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _endpointService: AppEndpointService,
    private _coreService: CdCoreService
  ) {
    this._bucketList = [{
      value: 'medialabs_contentdedup_devbucket',
      viewValue: 'Content-Aware Deduplication bucket'
    }, {
      value: null,
      viewValue: 'Google Cloud Nearline Storage (not available)'
    }, {
      value: null,
      viewValue: 'AWS S3 Cloud Storage (not available)'
    }]
  }

  fetchBuckets$(): Observable<AppOptionModel[]> {
    return of(this._bucketList)
  }

  handleForm(_: FormData) {
    this._coreService.setBucketForm(_)
    this._router.navigate([APP_ROUTES.DEDUPLICATION, CORE_ROUTES.RESULT_LIST], { relativeTo: this._route, state: { ..._ } })
  }

  fetchResults$(_: FormData): Observable<fromEndpointModel.AppEndpointResponseModel> {
    let endpoint: string = this._endpointService.getEndpoint({ context: 'dedup', endpoint: 'processBucket' })
    let reqBody: fromEndpointModel.AppEndpointRequestModel = {
      data: { ...<{ [key: string]: any }>_ }
    }
    return this._endpointService.triggerPostRequest({ endpoint, reqBody }).pipe(
      map(_ => _),
      catchError(__ => throwError(__))
    )
  }

}
