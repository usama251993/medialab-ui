import { Injectable, isDevMode } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable, throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'

import { AppEndpointRequestModel, AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { COMMON_ENDPOINT_CONSTANTS, DEV_ENDPOINT_CONSTANTS, PROD_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

@Injectable({
  providedIn: 'root'
})
export class AppEndpointService {

  constructor(
    private _http: HttpClient,
  ) { }

  getEndpoint(_: {
    context: string
    endpoint: string
  }): string {
    const PROTOCOL: string = isDevMode() ? DEV_ENDPOINT_CONSTANTS.PROTOCOL : PROD_ENDPOINT_CONSTANTS.PROTOCOL
    const DOMAIN: string = isDevMode() ? DEV_ENDPOINT_CONSTANTS.DOMAIN : PROD_ENDPOINT_CONSTANTS.DOMAIN
    const APPLICATION: string = COMMON_ENDPOINT_CONSTANTS.CONTEXT.ROOT
    const CONTEXT: string = _.context
    const ENDPOINT: string = _.endpoint
    return `${PROTOCOL}://${DOMAIN}/${APPLICATION}/${CONTEXT}/${ENDPOINT}`
  }

  triggerPostRequest<T>(_: {
    endpoint: string
    reqBody: AppEndpointRequestModel
  }): Observable<AppEndpointResponseModel<T>> {
    return this._http.post<AppEndpointResponseModel<T>>(_.endpoint, _.reqBody).pipe(
      retry(2),
      catchError(__ => throwError(__))
    )
  }

  triggerGetRequest<T>(_: { endpoint: string }): Observable<AppEndpointResponseModel<T>> {
    return this._http.get<AppEndpointResponseModel<T>>(_.endpoint).pipe(
      retry(2),
      catchError(__ => throwError(__))
    )
  }

  triggerLocalJSONGetRequest<T>(_: { endpoint: string }): Observable<T> {
    return this._http.get<T>(_.endpoint).pipe(catchError(__ => throwError(__)))
  }

}
