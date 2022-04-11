import { Action } from '@ngrx/store'

import { AppButtonModel } from '@shared/models/app-assets.model'
import { NOTIFICATION_ACTION } from '@lm-core/state/types/lm-notification.type'

export class LmShowNotification implements Action {
  readonly type = NOTIFICATION_ACTION.SHOW
  constructor(public payload: {
    message: string
    button: AppButtonModel
  }) { }
}

export type LmNotificationActions =
  | LmShowNotification
