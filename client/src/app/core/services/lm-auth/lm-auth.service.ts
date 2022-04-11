import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { share } from 'rxjs/operators'

import { AppEndpointRequestModel, AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'
import { COMMON_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

import { LmLoginRequestModel } from '@lm-core/models/common/auth/lm-auth-login.model'
import { LmSignupRequestModel } from '@lm-core/models/common/auth/lm-auth-signup.model'

const STRING_CONSTANTS = {
  DEFAULT_ORGANIZATION: 'lntinfotech.com',
  SALES: 'SALES',
  CLIENT: 'CLIENT',
  AT: '@',
  DASH: '-'
}

@Injectable({
  providedIn: 'root'
})
export class LmAuthService {

  constructor(
    private _endpointService: AppEndpointService
  ) { }

  login(_: LmLoginRequestModel): Observable<AppEndpointResponseModel<any>> {
    const reqBody: AppEndpointRequestModel = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      },
      auth: { ..._ },
      params: null,
      data: null,
      route: null
    }
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.WSO2,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.WSO2.LOGIN
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody })
  }

  signup(_: LmSignupRequestModel): Observable<AppEndpointResponseModel<any>> {
    const reqBody: AppEndpointRequestModel = {
      headers: { 'Content-Type': 'application/json' },
      auth: { username: 'admin', password: btoa('admin') },
      params: null,
      data: { ..._ },
      route: null
    }
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.WSO2,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.WSO2.REGISTER
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody })
  }

  verify(_: { token: string }): Observable<AppEndpointResponseModel<any>> {
    const reqBody: AppEndpointRequestModel = {
      headers: { 'Content-Type': 'application/json' },
      auth: { username: 'admin', password: btoa('admin') },
      params: null,
      data: { ..._ },
      route: null
    }
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.WSO2,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.WSO2.VERIFY
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody })
  }

  resendCode(_: { username: string, realm: string }): Observable<AppEndpointResponseModel<any>> {
    const reqBody: AppEndpointRequestModel = {
      headers: { 'Content-Type': 'application/json' },
      auth: { username: 'admin', password: btoa('admin') },
      params: null,
      data: { ..._ },
      route: null
    }
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.WSO2,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.WSO2.RESEND
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(share())
  }

  getUserName(_: { email: string }): string {
    return _.email.split(STRING_CONSTANTS.AT).join(STRING_CONSTANTS.DASH)
  }

  getRealm(_: { email: string }): string {
    return _.email.endsWith(STRING_CONSTANTS.DEFAULT_ORGANIZATION) ? STRING_CONSTANTS.SALES : STRING_CONSTANTS.CLIENT
  }
}
