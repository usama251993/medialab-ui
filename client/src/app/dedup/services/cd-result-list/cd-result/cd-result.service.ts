import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { AppEndpointService } from '@shared/facade/services/app-endpoint/app-endpoint.service'
import { AppEndpointRequestModel } from '@shared/models/app-endpoint.model'
import { CdResultModel } from '@cd-core/models/cd-result.model'
import { delay, tap, map } from 'rxjs/operators'
import { Router, ActivatedRoute } from '@angular/router'
import { APP_ROUTES } from 'src/app/app.routes'
import { CORE_ROUTES } from '@cd-core/cd-core.routes'
import { HttpClient } from '@angular/common/http'
import { CdCoreService } from '@cd-core/services/cd-core.service'
import { CdResultOverviewModel } from '@cd-core/models/cd-result-overview.model'

@Injectable({
  providedIn: 'root'
})
export class CdResultService {

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _endpointService: AppEndpointService,
    private _coreService: CdCoreService,
    private _http: HttpClient
  ) { }

  fetchResult$(_: { route: string }): Observable<CdResultModel[]> {
    const endpoint: string = this._endpointService.getEndpoint({ context: 'dedup', endpoint: 'getResult' })
    const reqBody: AppEndpointRequestModel = {
      route: _.route
    }
    return this._endpointService.triggerPostRequest({ endpoint, reqBody }).pipe(
      map(_ => <CdResultModel[]>_.data)
    )

  }

  gotoDetails(_: { path: string, data: CdResultModel[], useCase: CdResultOverviewModel }) {
    this._coreService.setResultData(_.data)
    this._coreService.setUseCase(_.useCase)
    this._router.navigate([APP_ROUTES.DEDUPLICATION, CORE_ROUTES.RESULT_LIST, _.path], { relativeTo: this._route })
  }

  fakeResult$(_: { route: string }): Observable<CdResultModel[]> {
    console.log('fakeResults', _)
    return this._http.get<CdResultModel[]>(`/assets/temp/${_.route}.json`)
  }
}
