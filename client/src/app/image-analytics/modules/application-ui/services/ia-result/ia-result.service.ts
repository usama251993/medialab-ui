import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'

import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'
import { AppEndpointRequestModel, AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { COMMON_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

import { IaAnalysisModel } from '@ia-app/models/ia-result.model'
import { IaResultModel } from '@ia-app/models/ia-result.model'

@Injectable({
  providedIn: 'root'
})
export class IaResultService {

  constructor(
    private _http: HttpClient,
    private _endpointService: AppEndpointService
  ) { }

  watchResult$(_: { route: string }): Observable<AppEndpointResponseModel<IaResultModel>> {
    const endpoint: string = this._endpointService.getEndpoint({
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.IMAGE_ANALYTICS,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.IMAGE_ANALYTICS.FETCHRESULT
    })
    const reqBody: AppEndpointRequestModel = { headers: null, auth: null, params: null, data: null, route: _.route }
    return this._endpointService.triggerPostRequest({ endpoint, reqBody })
  }

  fakeResult$(_: IaAnalysisModel): Observable<IaResultModel> {

    console.groupCollapsed(`[S-Ia-Result] fakeResult`)
    console.log(_)
    console.groupEnd()

    return (!!(_?.value)) ? this._http.get<IaResultModel>(`/assets/image-analytics/application-ui/result/${_.value}.json`) : of(null)
  }

}
