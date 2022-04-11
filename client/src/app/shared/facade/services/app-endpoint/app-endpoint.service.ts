import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'

import { environment } from 'src/environments/environment'
import * as fromEndpointModel from '@shared/models/app-endpoint.model'
// import * as fromErrorHandlerService from '../lm-error/lm-http-error-handler/lm-http-error-handler.service'

@Injectable({
  providedIn: 'root'
})
export class AppEndpointService {

  EXPRESS: fromEndpointModel.AppEndpointURLModel
  // private _handleError: fromErrorHandlerService.LmHandleError

  constructor(
    private _http: HttpClient,
    // private _errorHandler: fromErrorHandlerService.LmHttpErrorHandlerService
  ) {
    this.EXPRESS = environment.EXPRESS
    // this._handleError = this._errorHandler.createErrorHandler('AppEndpointService')
  }

  getEndpoint(_: {
    context: string
    endpoint: string
  }): string {
    const PROTOCOL: string = this.EXPRESS.PROTOCOL
    const DOMAIN: string = this.EXPRESS.DOMAIN
    const APPLICATION: string = this.EXPRESS.CONTEXT.ROOT
    const CONTEXT: string = _.context
    const ENDPOINT: string = _.endpoint
    return `${PROTOCOL}://${DOMAIN}/${APPLICATION}/${CONTEXT}/${ENDPOINT}`
  }

  triggerPostRequest(_: {
    endpoint: string
    reqBody: fromEndpointModel.AppEndpointRequestModel
  }): Observable<fromEndpointModel.AppEndpointResponseModel> {
    return this._http.post<fromEndpointModel.AppEndpointResponseModel>(_.endpoint, _.reqBody).pipe(
      retry(2),
      catchError(__ => throwError(__)))
  }

  triggerGetRequest(_: {
    endpoint: string
  }): Observable<fromEndpointModel.AppEndpointResponseModel> {
    return this._http.get<fromEndpointModel.AppEndpointResponseModel>(_.endpoint).pipe(
      retry(2),
      catchError(__ => throwError(__))
    )
  }

}
