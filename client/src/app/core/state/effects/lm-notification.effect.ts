import { Injectable } from '@angular/core'
import { map, tap } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'

import * as fromActions from '@lm-core/state/actions/lm-notification.action'
import { NOTIFICATION_ACTION } from '@lm-core/state/types/lm-notification.type'
import { LmNotificationService } from '@lm-core/services/lm-notification/lm-notification.service'

@Injectable()
export class LmNotificationEffects {
  constructor(
    private _actions$: Actions,
    private _notificationService: LmNotificationService
  ) { }

  @Effect({ dispatch: false })
  eShowNotification$ = this._actions$.pipe(
    ofType<fromActions.LmNotificationActions>(NOTIFICATION_ACTION.SHOW),
    map(_ => _.payload),
    tap(_ => this._notificationService.displayNotification(_)))
}
