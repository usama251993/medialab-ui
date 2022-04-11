import { Injectable } from '@angular/core'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'

import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { IaAppCoreService } from '../../ia-app-core.service'
import { IaResultService } from '../../ia-result/ia-result.service'

import { IaResultModel, IaAnalysisModel } from '@ia-app/models/ia-result.model'

@Injectable({
  providedIn: 'root'
})
export class IaResultDetailResolver implements Resolve<IaResultModel> {

  constructor(
    private _coreService: IaAppCoreService,
    private _resultService: IaResultService,
    private _router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IaResultModel> {

    const _analysis: IaAnalysisModel = { ...<IaAnalysisModel>this._router.getCurrentNavigation().extras.state }

    console.groupCollapsed(`[G-Ia-Detail] resolve()`)
    console.log(_analysis)
    console.groupEnd()

    return this._resultService.fakeResult$(_analysis).pipe(
      tap(_ => {
        if (!!_) {
          this._coreService.setDataProcessing(false)
          this._coreService.setResultAvailability(true)
          this._coreService.setTableColumns(_analysis)
          this._coreService.setAnalysis(_analysis)
          this._coreService.setResult(_)
        }
      })
    )
  }

}
