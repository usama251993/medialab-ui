import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { throwError, Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

import { APP_ROUTES } from 'src/app/app.routes'

import { AppEndpointRequestModel, AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'

import { StCoreService } from '@st-core/services/st-core.service'
import { CORE_ROUTES } from '@st-core/st-core.routes'
import { StApplicationModel } from '@st-core/models/st-app.model'

@Injectable({
  providedIn: 'root'
})
export class StAppService {

  constructor(
    private _endpointService: AppEndpointService,
    private _coreService: StCoreService,
    private _router: Router) { }

  fetchApps$(): Observable<StApplicationModel> {
    let endpoint: string = this._endpointService.getEndpoint({ context: 'suite-st', endpoint: 'applicationlist' })
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-TokenId': 'QYbKppoKr8',
        'X-TokenPassword': '7cff015c0baffa2de81753bd78160d177ba84ad6830a4c6f24717a5e0f41b66f'
      },
      auth: null,
      params: null,
      data: null,
      route: null
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  fetchFinishedTestPackRunsList$(): Observable<AppEndpointResponseModel<any>> {
    let endpoint: string = this._endpointService.getEndpoint({ context: 'suite-st', endpoint: 'finishedtestpackruns' })
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-TokenId': 'QYbKppoKr8',
        'X-TokenPassword': '7cff015c0baffa2de81753bd78160d177ba84ad6830a4c6f24717a5e0f41b66f'
      },
      auth: null,
      params: null,
      data: null,
      route: null
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  fetchTestPackList$(): Observable<AppEndpointResponseModel<any>> {
    var x = (localStorage.getItem('appName') != null && localStorage.getItem('appName') != undefined) ? JSON.parse(localStorage.getItem('appName')) : ""
    let endpoint: string = this._endpointService.getEndpoint({ context: 'suite-st', endpoint: 'testpacklist' })
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-TokenId': 'QYbKppoKr8',
        'X-TokenPassword': '7cff015c0baffa2de81753bd78160d177ba84ad6830a4c6f24717a5e0f41b66f'
      },
      auth: null,
      params: null,
      data: { ...<{ [key: string]: any }>x },
      route: null
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  fetchTestsList$(): Observable<AppEndpointResponseModel<any>> {
    var x = (localStorage.getItem('appName') != null && localStorage.getItem('appName') != undefined) ? JSON.parse(localStorage.getItem('appName')) : ""
    let endpoint: string = this._endpointService.getEndpoint({ context: 'suite-st', endpoint: 'testlist' })
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-TokenId': 'QYbKppoKr8',
        'X-TokenPassword': '7cff015c0baffa2de81753bd78160d177ba84ad6830a4c6f24717a5e0f41b66f'
      },
      auth: null,
      params: null,
      data: { ...<{ [key: string]: any }>x },
      route: null
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  fetchConfiguration$(): Observable<AppEndpointResponseModel<any>> {
    var x = (localStorage.getItem('appName') != null && localStorage.getItem('appName') != undefined) ? JSON.parse(localStorage.getItem('appName')) : ""
    let endpoint: string = this._endpointService.getEndpoint({ context: 'suite-st', endpoint: 'configuration' })
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-TokenId': 'QYbKppoKr8',
        'X-TokenPassword': '7cff015c0baffa2de81753bd78160d177ba84ad6830a4c6f24717a5e0f41b66f'
      },
      auth: null,
      params: null,
      data: { ...<{ [key: string]: any }>x },
      route: null
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  fetchTestPackResult$(_: any): Observable<AppEndpointResponseModel<any>> {
    let endpoint: string = this._endpointService.getEndpoint({ context: 'suite-st', endpoint: 'testpackexeresult' })
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-TokenId': 'QYbKppoKr8',
        'X-TokenPassword': '7cff015c0baffa2de81753bd78160d177ba84ad6830a4c6f24717a5e0f41b66f'
      },
      auth: null,
      params: null,
      data: { ...<{ [key: string]: any }>_ },
      route: null
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  fetchDevices$(): Observable<AppEndpointResponseModel<any>> {
    let endpoint: string = this._endpointService.getEndpoint({ context: 'suite-st', endpoint: 'devices' })
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-TokenId': 'QYbKppoKr8',
        'X-TokenPassword': '7cff015c0baffa2de81753bd78160d177ba84ad6830a4c6f24717a5e0f41b66f'
      },
      auth: null,
      params: null,
      data: null,
      route: null
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  triggerTestPackExecution$(_: any): Observable<AppEndpointResponseModel<any>> {
    let endpoint: string = this._endpointService.getEndpoint({ context: 'suite-st', endpoint: 'testpackexecute' })
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-TokenId': 'QYbKppoKr8',
        'X-TokenPassword': '7cff015c0baffa2de81753bd78160d177ba84ad6830a4c6f24717a5e0f41b66f',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      auth: null,
      params: null,
      data: {
        "includeChangelist": true
      },
      route: _.id
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  stopTestPackExecution$(_: any): Observable<AppEndpointResponseModel<any>> {
    console.log(_)
    let endpoint: string = this._endpointService.getEndpoint({ context: 'suite-st', endpoint: 'testpackstop' })
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-TokenId': 'QYbKppoKr8',
        'X-TokenPassword': '7cff015c0baffa2de81753bd78160d177ba84ad6830a4c6f24717a5e0f41b66f',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      auth: null,
      params: null,
      data: null,
      route: _.testPackRunId
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  handleForm(_: FormData) {
    this._coreService.setCurrentAppName(_)
    this._router.navigate([APP_ROUTES.TESTSUITE, CORE_ROUTES.DASHBOARD])
  }

  viewTestRunResult(_: any) {
    this._coreService.setTestRunResult(_)
    this._router.navigate([APP_ROUTES.TESTSUITE, CORE_ROUTES.TESTPACKRESULT])
  }
}
