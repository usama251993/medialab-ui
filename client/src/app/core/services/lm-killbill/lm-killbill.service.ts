import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { State } from '@lm-core/state'

import * as fromEndpointModels from '@shared/models/app-endpoint.model'
import { AppEndpointService } from '@shared/facade/services/app-endpoint/app-endpoint.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LmKillbillService {

  constructor(
    private _store$: Store<State>,
    private _endpointService: AppEndpointService
  ) { }

  createKBAccount(reqBody: fromEndpointModels.AppEndpointRequestModel): Observable<fromEndpointModels.AppEndpointResponseModel> {
    const endpointConfig = {
      context: this._endpointService.EXPRESS.CONTEXT.KB,
      endpoint: this._endpointService.EXPRESS.ENDPOINT.KB.CREATEACCOUNT
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    return this._endpointService.triggerPostRequest({ endpoint, reqBody })
  }

}
