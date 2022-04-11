import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { switchMap, catchError, map, tap } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'

import * as fromAuthActions from '@lm-core/state/actions/lm-auth.action'
import * as fromRouterActions from '@lm-core/state/actions/lm-router.action'
import * as fromNotificationActions from '@lm-core/state/actions/lm-notification.action'
import * as fromKBActions from '@lm-core/state/actions/lm-killbill.action'
import { AUTH_ACTIONS } from '@lm-core/state/types/lm-auth.type'
import { LmAuthService } from '@lm-core/services/lm-auth/lm-auth.service'

import { LmKBAccountRequestModel } from '@lm-core/models/lm-kb.model'

import { AppEndpointRequestModel } from '@shared/models/app-endpoint.model'
import * as fromAuthModels from '@shared/models/lm-auth.model'

@Injectable()
export class LmAuthEffects {

  constructor(
    private _actions$: Actions,
    private _authService: LmAuthService
  ) { }

  @Effect() eAttemptLogin = this._actions$.pipe(
    ofType<fromAuthActions.LmAuthLoginActions>(AUTH_ACTIONS.LOGIN),
    switchMap(_ => {
      const payload: AppEndpointRequestModel = {
        auth: {
          username: (<fromAuthModels.LmLoginRequestModel>_.payload).username,
          password: (<fromAuthModels.LmLoginRequestModel>_.payload).password,
        },
        headers: {
          'Content-Type': 'application/json'
        },
        params: {},
        data: {},
        route: ''
      }
      return this._authService.login(payload).pipe(
        switchMap(__ => [
          new fromAuthActions.LmAuthLoginSuccess({
            id: payload.auth.username,
            pending: false,
            token: __.data.token,
            error: __.error
          }),
          new fromAuthActions.LmAuthUserContext({
            id: payload.auth.username,
            ...payload.auth
          })
        ]),
        catchError(__ => of(new fromAuthActions.LmAuthLoginFail({
          id: payload.auth.username,
          pending: false,
          token: null,
          error: __.error
        }))))
    }))

  @Effect() eFetchUserData = this._actions$.pipe(
    ofType<fromAuthActions.LmAuthUserContextActions>(AUTH_ACTIONS.USER_CONTEXT),
    switchMap(_ => {
      const payload: AppEndpointRequestModel = {
        auth: {
          username: (<fromAuthModels.LmLoginRequestModel>_.payload).username,
          password: (<fromAuthModels.LmLoginRequestModel>_.payload).password,
        },
        headers: {
          'Content-Type': 'application/json'
        },
        params: {},
        data: {},
        route: ''
      }
      return this._authService.getUserContext(payload).pipe(
        switchMap(__ => {
          let userContext: fromAuthModels.LmUserResponseModel = {
            id: payload.auth.username,
            pending: false,
            user: {
              givenname: '',
              lastname: '',
              username: '',
              password: 'restricted',
              country: '',
              organization: '',
              designation: ''
            },
            error: null
          }
          Object.keys((<{ basic: { [key: string]: string } }>__.data).basic)
            .map(_ => _.slice('http://wso2.org/claims/'.length))
            .filter(_ => Object.keys(userContext.user).includes(_))
            .forEach(_ => {
              userContext.user[_] = (<{ basic: { [key: string]: string } }>__.data).basic['http://wso2.org/claims/' + _]
            })
          return [
            new fromAuthActions.LmAuthUserContextSuccess(userContext),
            new fromRouterActions.LmGo({ path: 'home' }),
            new fromNotificationActions.LmShowNotification({
              message: 'Credentials Validation Successful',
              button: { text: 'OK!', link: '' }
            })]
        }),
        catchError(__ => of(new fromAuthActions.LmAuthUserContextFail(__)))
      )
    }))

  @Effect() eAttemptSignup = this._actions$.pipe(
    ofType<fromAuthActions.LmAuthSignupActions>(AUTH_ACTIONS.SIGNUP),
    switchMap(_ => {
      const payload: AppEndpointRequestModel = {
        auth: {
          username: 'admin',
          password: 'YWRtaW4='
        },
        headers: {
          'Content-Type': 'application/json'
        },
        params: {},
        data: { ..._.payload },
        route: ''
      }
      return this._authService.signup(payload).pipe(
        switchMap(__ => {
          const externalKey: string = `${(<fromAuthModels.LmSignupRequestModel>_.payload).organization}-${(<fromAuthModels.LmSignupRequestModel>_.payload).username}`
          const name: string = `${(<fromAuthModels.LmSignupRequestModel>_.payload).givenname} ${(<fromAuthModels.LmSignupRequestModel>_.payload).lastname}`
          const kbPayload: LmKBAccountRequestModel = {
            id: _.payload.id,
            externalKey,
            name,
            email: (<fromAuthModels.LmSignupRequestModel>_.payload).username,
            company: (<fromAuthModels.LmSignupRequestModel>_.payload).organization,
            country: (<fromAuthModels.LmSignupRequestModel>_.payload).country,
            currency: 'USD'
          }
          const signupPayload: fromAuthModels.LmSignupResponseModel = {
            id: _.payload.id,
            pending: false,
            error: __.error
          }
          return [
            new fromAuthActions.LmAuthSignupSuccess({ ...signupPayload }),
            new fromRouterActions.LmGo({ path: 'login' }),
            new fromNotificationActions.LmShowNotification({
              message: 'User Registration Successful',
              button: {
                text: 'Dismiss',
                link: ''
              }
            }),
            new fromKBActions.LmKbCreateAccount({ ...kbPayload })
          ]
        }),
        catchError(__ => of(new fromAuthActions.LmAuthSignupFail({
          id: _.payload.id,
          pending: false,
          error: __.error
        }))))
    }))

  @Effect() eSignupFailed = this._actions$.pipe(
    ofType<fromAuthActions.LmAuthSignupActions>(AUTH_ACTIONS.SIGNUP_FAIL),
    map(_ => _.payload),
    switchMap(_ => [
      new fromNotificationActions.LmShowNotification({
        message: `${(<fromAuthModels.LmSignupResponseModel>_).error.error}: User Already exists`,
        button: { text: 'OK!', link: '' }
      })
    ]))

  @Effect() eAttemptLogout = this._actions$.pipe(
    ofType<fromAuthActions.LmAuthLogoutActions>(AUTH_ACTIONS.LOGOUT),
    switchMap(_ => [
      new fromAuthActions.LmAuthLogoutSuccess(_.payload),
      new fromRouterActions.LmGo({ path: 'home' }),
      new fromNotificationActions.LmShowNotification({
        message: 'Logout Successful',
        button: { text: 'OK!', link: '' }
      })
    ]))

  @Effect()
  eNavigateToRegister$ = this._actions$.pipe(
    ofType<fromAuthActions.LmAuthNavigationActions>(AUTH_ACTIONS.NAVIGATE_SIGNUP),
    map(_ => new fromRouterActions.LmGo({ path: _.payload.path })))

  @Effect()
  eNavigateToLogin$ = this._actions$.pipe(
    ofType<fromAuthActions.LmAuthNavigationActions>(AUTH_ACTIONS.NAVIGATE_LOGIN),
    map(_ => new fromRouterActions.LmGo({ path: _.payload.path })))

}
