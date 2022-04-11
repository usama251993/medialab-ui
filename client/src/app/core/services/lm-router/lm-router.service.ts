import { Injectable } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'

import { APP_ROUTES } from 'src/app/app.routes'

import * as fromActions from '@lm-core/state/actions/lm-router.action'
import { State } from '@lm-core/state'

@Injectable({
  providedIn: 'root'
})
export class LmRouterService {

  constructor(
    private _store$: Store<State>,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  triggerNavigate(_: { path: string }): void {
    this._store$.dispatch(new fromActions.LmGo(_))
  }

  navigate(_: { path: string }): void {
    (!!_.path)
      ? (_.path === 'home')
        ? this._router.navigate([APP_ROUTES.MEDIALAB], { relativeTo: this._route })
        : this._router.navigate([APP_ROUTES.MEDIALAB, _.path], { relativeTo: this._route })
      : void (0)
  }

}
