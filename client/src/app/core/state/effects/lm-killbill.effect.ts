import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { switchMap, catchError, tap, map } from 'rxjs/operators'
import { Actions, ofType, Effect } from '@ngrx/effects'

import * as fromKBActions from '../actions/lm-killbill.action'
import { KB_ACTIONS } from '../types/lm-killbill.type'
import { LmKillbillService } from '../../services/lm-killbill/lm-killbill.service'
import * as fromNotificationActions from '../actions/lm-notification.action'

import { AppEndpointRequestModel } from '../../../shared/models/app-endpoint.model'
import { LmKBAccountRequestModel } from '@lm-core/models/lm-kb.model'

@Injectable()
export class LmKBEffects {
  constructor(
    private _actions: Actions,
    private _kbService: LmKillbillService
  ) { }

  @Effect() eCreateAccount$ = this._actions.pipe(
    ofType<fromKBActions.LmKbActions>(KB_ACTIONS.CREATE_ACCOUNT),
    switchMap(_ => {
      const kbReqBody: Partial<LmKBAccountRequestModel> = {
        externalKey: (<LmKBAccountRequestModel>_.payload).externalKey,
        name: (<LmKBAccountRequestModel>_.payload).name,
        email: (<LmKBAccountRequestModel>_.payload).email,
        company: (<LmKBAccountRequestModel>_.payload).company,
        country: (<LmKBAccountRequestModel>_.payload).country,
        currency: (<LmKBAccountRequestModel>_.payload).currency
      }
      const payload: AppEndpointRequestModel = {
        auth: {
          username: 'admin',
          password: 'cGFzc3dvcmQ='
        },
        data: { ...kbReqBody },
        headers: {
          'accept': 'application/json',
          'X-Killbill-CreatedBy': 'LTIMediaLabsUI',
          'X-Killbill-ApiKey': 'Disney',
          'X-Killbill-ApiSecret': 'medialab123',
          'Content-Type': 'application/json',
          // 'Cookie': 'BCSI-CS-95da4b98f8f01d25=1'
        },
        params: {},
        route: ''
      }
      return this._kbService.createKBAccount(payload).pipe(
        switchMap(_ => [
          new fromKBActions.LmKbCreateAccountSuccess(_)
        ]),
        catchError(__ => of(new fromKBActions.LmKbCreateAccountFail(__))))
    }))

  @Effect() eCreateAccountFail$ = this._actions.pipe(
    ofType<fromKBActions.LmKbActions>(KB_ACTIONS.CREATE_ACCOUNT_FAIL),
    map(_ => _.payload),
    switchMap(_ => [
      new fromNotificationActions.LmShowNotification({
        message: 'Killbill account creation failed',
        button: { text: 'OK!', link: '' }
      })
    ]))
}

