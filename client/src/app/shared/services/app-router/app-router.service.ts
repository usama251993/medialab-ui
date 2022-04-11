import { Injectable } from '@angular/core'
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppRouterService {

  private _route$: BehaviorSubject<ActivatedRoute> = new BehaviorSubject<ActivatedRoute>(null)

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  navigate(_: { path: string[], extras: NavigationExtras }): void {
    if (!!_.path.length) this._router.navigate([..._.path], { ..._.extras })
    else this._router.navigate([''])
  }

  watchRoute$(): Observable<ActivatedRoute> {
    this._route$.next(this._route)
    return this._route$.asObservable()
  }

  watchParamMap$(): Observable<ParamMap> {
    return this._route.queryParamMap
  }

}
