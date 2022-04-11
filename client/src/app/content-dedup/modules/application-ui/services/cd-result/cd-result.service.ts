import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs'

import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'
import { AppEndpointRequestModel, AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { COMMON_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

import { CdAnalysisModel } from '@cd-app/models/cd-result.model'
import { CdResultModel } from '@cd-app/models/cd-result.model'

import { AppRouterService } from '@shared/services/app-router/app-router.service'

@Injectable({
  providedIn: 'root'
})
export class CdResultService {

  constructor(
    private _http: HttpClient,
    private _endpointService: AppEndpointService
  ) { }

  watchResult$(_: { route: string }): Observable<AppEndpointResponseModel<any>> {
    const endpoint: string = this._endpointService.getEndpoint({
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.DEDUP,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.DEDUP.FETCHRESULT
    })
    const reqBody: AppEndpointRequestModel = { headers: null, auth: null, params: null, data: null, route: _.route }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody })
  }

  fakeResult$(_: CdAnalysisModel): Observable<CdResultModel> {
    // console.log('fakeResults', _)
    return (!!(_?.value)) ? this._http.get<CdResultModel>(`/assets/dedup/application-ui/${_.value}.json`) : of(null)
  }

}
