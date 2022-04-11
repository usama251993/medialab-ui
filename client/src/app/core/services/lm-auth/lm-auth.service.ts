import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { Dictionary } from '@ngrx/entity'

import { State } from '@lm-core/state'
import * as fromActions from '@lm-core/state/actions/lm-auth.action'
import { selectUserDict } from '@lm-core/state/selectors/lm-auth.selector'
import { ENTITY_ID } from '@lm-core/state/types'

import { LmRouterService } from '@lm-core/services/lm-router/lm-router.service'

import * as fromAuthModels from '@shared/models/lm-auth.model'
import * as fromEndpointModels from '@shared/models/app-endpoint.model'
import { AppEndpointService } from '@shared/facade/services/app-endpoint/app-endpoint.service'

@Injectable({
  providedIn: 'root'
})
export class LmAuthService {

  constructor(
    private _store$: Store<State>,
    private _routerService: LmRouterService,
    private _endpointService: AppEndpointService
  ) { }

  login(reqBody: fromEndpointModels.AppEndpointRequestModel): Observable<fromEndpointModels.AppEndpointResponseModel> {
    const endpointConfig = {
      context: this._endpointService.EXPRESS.CONTEXT.WSO2,
      endpoint: this._endpointService.EXPRESS.ENDPOINT.WSO2.LOGIN
    }
    let endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    return this._endpointService.triggerPostRequest({ endpoint, reqBody })
  }

  signup(reqBody: fromEndpointModels.AppEndpointRequestModel): Observable<fromEndpointModels.AppEndpointResponseModel> {
    const endpointConfig = {
      context: this._endpointService.EXPRESS.CONTEXT.WSO2,
      endpoint: this._endpointService.EXPRESS.ENDPOINT.WSO2.REGISTER
    }
    let endpoint = this._endpointService.getEndpoint(endpointConfig)
    return this._endpointService.triggerPostRequest({ endpoint, reqBody })
  }

  logout(_: fromAuthModels.LmUserModel) {
    this._store$.dispatch(new fromActions.LmAuthLogout(_))
  }

  // createKillbillAccount(): Observable<{ status: number }> {
  //   return this._http.post<{ status: number }>('http://localhost:3000/api/killbill/createAccount', {})
  // }

  // retrieveKBAccountID({ email, password }: fromAuthModels.LmLoginRequestModel): Observable<fromEndpointModels.AppEndpointResponseModel> {
  //   const endpoint: string = this.endpointService.getEndpoint({
  //     context: this.endpointService.EXPRESS.CONTEXT.KB,
  //     endpoint: this.endpointService.EXPRESS.ENDPOINT.KB.RETRIEVEID
  //   })
  //   const payload: LmKBRequestModel = {
  //     headers: {
  //       externalKey: 'Walt'
  //     },
  //     auth: {
  //       username: email,
  //       password: password
  //     },
  //     params: {}
  //   }
  //   return this._http.post<fromEndpointModels.AppEndpointResponseModel>(endpoint, payload)
  // }

  // retrieveKBTenantID(): Observable<any> {
  //   return this._http.post<any>('http://localhost:3000/api/killbill/getTenantID', {
  //     apiKey: 'Viacom',
  //     credentials: {
  //       username: 'admin',
  //       password: 'password'
  //     }
  //   })
  // }

  getUserContext(reqBody: fromEndpointModels.AppEndpointRequestModel): Observable<fromEndpointModels.AppEndpointResponseModel> {
    const endpointConfig = {
      context: this._endpointService.EXPRESS.CONTEXT.WSO2,
      endpoint: this._endpointService.EXPRESS.ENDPOINT.WSO2.USER
    }
    let endpoint = this._endpointService.getEndpoint(endpointConfig)
    return this._endpointService.triggerPostRequest({ endpoint, reqBody })
  }

  getLoginEntityID(): Observable<string> {
    return of(ENTITY_ID.LOGIN)
  }

  getSignupEntityID(): Observable<string> {
    return of(ENTITY_ID.SIGNUP)
  }

  gotoLogin() {
    this._routerService.triggerNavigate({ path: 'login' })
  }

  gotoSignup() {
    this._routerService.triggerNavigate({ path: 'signup' })
  }

  triggerLogin(_: fromAuthModels.LmLoginRequestModel): Observable<Dictionary<fromAuthModels.LmAuthResponseModel>> {
    this._store$.dispatch(new fromActions.LmAuthLogin(_))
    return this._store$.pipe(select(selectUserDict))
  }

  triggerSignup(_: fromAuthModels.LmSignupRequestModel): Observable<Dictionary<fromAuthModels.LmAuthResponseModel>> {
    this._store$.dispatch(new fromActions.LmAuthSignup(_))
    return this._store$.pipe(select(selectUserDict))
  }
}
