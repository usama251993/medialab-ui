import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { NavigationExtras, ParamMap } from '@angular/router'

import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { catchError, map, mergeMap, retry, retryWhen, take } from 'rxjs/operators'

import { APP_ROUTES } from 'src/app/app.routes'

import { AppEndpointRequestModel } from '@shared/models/app-endpoint.model'
import { AppSnackbarModel } from '@shared/models/app-snackbar.model'
import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'
import { AppRouterService } from '@shared/services/app-router/app-router.service'
import { AppSnackbarService } from '@shared/services/app-snackbar/app-snackbar.service'
import { COMMON_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

import { LmLoginRequestModel } from '@lm-core/models/common/auth/lm-auth-login.model'
import { LmUserModel, INITIAL_USER_MODEL } from '@lm-core/models/common/auth/lm-auth-user.model'
import { LmWSO2ErrorResponseModel, INITIAL_WSO2_ERROR } from '@lm-core/models/lm-wso2-error.model'
import { INITIAL_KB_ERROR, LmKBErrorResponseModel } from '@lm-core/models/lm-kb-error.model'
import { CORE_ROUTES } from '@lm-core/lm-core.routes'

const _USER: string = 'username'
const _REALM: string = 'realm'

@Injectable({
  providedIn: 'root'
})
export class LmCoreService {

  private _user$: BehaviorSubject<LmUserModel> = new BehaviorSubject<LmUserModel>(INITIAL_USER_MODEL)
  private _token$: BehaviorSubject<string> = new BehaviorSubject<string>('')
  private _userForResendProcess$: BehaviorSubject<{ username: string; realm: string }> = new BehaviorSubject<{ username: string; realm: string }>({ username: null, realm: null })
  private _accountId$: BehaviorSubject<string>

  constructor(
    private _endpointService: AppEndpointService,
    private _routerService: AppRouterService,
    private _snackbarService: AppSnackbarService
  ) { }

  handleWSO2Error(_: HttpErrorResponse): LmWSO2ErrorResponseModel {

    console.groupCollapsed('[LM Core Service] Operation failed')
    console.error(_)
    console.groupEnd()

    if (!!_.status) {
      const wso2Error: LmWSO2ErrorResponseModel = _.error.data
      switch (wso2Error.code) {
        case '17005':
          return {
            ...INITIAL_WSO2_ERROR,
            code: wso2Error.code,
            description: wso2Error.description,
            properties: { ...wso2Error.properties },
            resend: {
              message: {
                _: 'Resend Code',
                success: 'Verification code sent sucessfully',
                failed: 'Unable to send verification code'
              }
            }
          }
        default:
          return { ...wso2Error }
      }
    }

    return {
      ...INITIAL_WSO2_ERROR,
      code: _.status,
      description: 'Service Unavailable',
      message: ''
    }
  }

  handleKBError(_: HttpErrorResponse): LmKBErrorResponseModel {

    console.groupCollapsed('[LM Core Service] Operation failed')
    console.error(_)
    console.groupEnd()

    if (!!_.status) {
      const _kbError: LmKBErrorResponseModel = _.error.data
      return { ..._kbError }
    }

    return {
      ...INITIAL_KB_ERROR,
      code: _.status,
      message: 'Service Unavailable',
      causeClassName: null,
      causeMessage: null,
      className: null,
      stackTrace: []
    }

  }

  // navigate(_: { path: string[], extras: NavigationExtras }) {
  //   this._routerService.navigate({ path: [APP_ROUTES.EMPTY, ..._.path], extras: {} })
  // }

  showSnackbar(_: AppSnackbarModel) {
    this._snackbarService.showSnackbar(_)
  }

  logout(): void {
    if (!!localStorage.getItem('token')) localStorage.removeItem('token')
    if (!!localStorage.getItem('user')) localStorage.removeItem('user')
    this._user$.next(null)
    this._token$.next(null)
  }

  watchToken$(): Observable<string> {
    return this._token$.asObservable()
  }

  setToken(_: { token: string }): void {
    localStorage.removeItem('token')
    localStorage.setItem('token', _.token)
  }

  getToken(): void {
    if (!!localStorage.getItem('token')) this._token$.next(localStorage.getItem('token'))
    else this._token$.next(null)
  }

  watchAccountId(): Observable<string> {
    return this._accountId$.asObservable()
  }

  setAccountId(_: { accountId: string }): void {
    localStorage.removeItem('accountId')
    localStorage.setItem('accountId', _.accountId)
  }

  getAccountId(): void {
    if (!!localStorage.getItem('accountId')) this._accountId$.next(localStorage.getItem('accountId'))
    else this._accountId$.next(null)
  }

  watchUser$(): Observable<LmUserModel> {
    return this._user$.asObservable()
  }

  getUser(): void {
    if (!!localStorage.getItem('user')) this._user$.next({ ...<LmUserModel>JSON.parse(localStorage.getItem('user')) })
    else this._user$.next(null)

  }

  setUser(_: LmLoginRequestModel): void {
    this._user$.next(null)
    const reqBody: AppEndpointRequestModel = {
      headers: null,
      auth: {
        username: _.username,
        password: _.password
      },
      params: null,
      data: null,
      route: null
    }
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.WSO2,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.WSO2.USERDETAILS
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    this._endpointService.triggerPostRequest<any>({ endpoint, reqBody })
      .pipe(map(_ => <LmUserModel>_.data.basic))
      .subscribe(
        _ => {
          localStorage.setItem('user', JSON.stringify(_))
          this._user$.next(<LmUserModel>_)
        })
  }

  watchUserForResendProcess$(): Observable<{ username: string; realm: string }> {
    if (!this._userForResendProcess$.getValue().username) {
      this.watchParamMap$()
        .pipe(
          mergeMap(_ => {
            const username: string = _.get(_USER)
            const realm: string = _.get(_REALM)
            if (!!username && !!realm) return [{ username, realm }]
          }),
          catchError(__ => throwError(__)),
        )
        .subscribe(
          _ => { if (!!_) this.setUserForResendProcess(_) },
          __ => { }
        )
    }
    return this._userForResendProcess$.asObservable()
  }

  setUserForResendProcess(_: { username: string; realm: string }): void {
    this._userForResendProcess$.next(_)
  }

  watchParamMap$(): Observable<ParamMap> {
    return this._routerService.watchParamMap$()
  }

  navigate(_: { path: string[], extras: NavigationExtras }) {
    if (_.path.includes(CORE_ROUTES.MEDIALAB)) this._routerService.navigate({ path: [APP_ROUTES.EMPTY], extras: {} })
    else this._routerService.navigate({ path: [..._.path], extras: {} })
  }

}
