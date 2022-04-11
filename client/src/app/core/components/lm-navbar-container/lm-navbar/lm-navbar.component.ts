import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core'
import { MatMenuTrigger } from '@angular/material/menu'

import { BehaviorSubject } from 'rxjs'

import { LmUserModel } from '@lm-core/models/common/auth/lm-auth-user.model'
import { LmNavbarAssetsModel, LmNavbarItemAssetsModel } from '@lm-core/models/assets/lm-navbar.model'
import { CORE_ROUTES } from '@lm-core/lm-core.routes'

@Component({
  selector: 'app-lm-navbar',
  templateUrl: './lm-navbar.component.html',
  styleUrls: ['./lm-navbar.component.scss']
})
export class LmNavbarComponent implements OnInit {

  private _assets$: BehaviorSubject<LmNavbarAssetsModel> = new BehaviorSubject<LmNavbarAssetsModel>(null)
  private _user$: BehaviorSubject<LmUserModel> = new BehaviorSubject<LmUserModel>(null)
  private _menuTriggers$: BehaviorSubject<MatMenuTrigger[] | any[]> = new BehaviorSubject<MatMenuTrigger[] | any[]>([])

  @Input()
  set assets(value: LmNavbarAssetsModel) { this._assets$.next(value) }
  get assets(): LmNavbarAssetsModel { return this._assets$.getValue() }

  @Input()
  set user(value: LmUserModel) { this._user$.next(value) }
  get user(): LmUserModel { return this._user$.getValue() }

  @ViewChildren(MatMenuTrigger) private set menuTrigger(_: QueryList<MatMenuTrigger | any>) { this._menuTriggers$.next(_.toArray()) }

  @Output() triggerNavigate$: EventEmitter<{ path: string[] }> = new EventEmitter<{ path: string[] }>()
  @Output() triggerLogout$: EventEmitter<void> = new EventEmitter<void>()

  constructor(
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.handleMenuTrigger()
  }

  handleMenuTrigger(): void {
    this._menuTriggers$.subscribe(__ => {
      const triggeredEl: MatMenuTrigger | any = __.find(_find => !!_find.menuOpen)
      if (!!triggeredEl) this._renderer.addClass(<HTMLButtonElement>(<ElementRef>triggeredEl._element).nativeElement, 'lm-menu-active')
      else __.forEach(_forEach => { this._renderer.removeClass(<HTMLButtonElement>(<ElementRef>_forEach._element).nativeElement, 'lm-menu-active') })
    })
  }

  navigate(navbarItem?: LmNavbarItemAssetsModel): void {
    if (!!navbarItem) {
      if (navbarItem.route === CORE_ROUTES.LOGOUT) this.triggerLogout$.emit()
      else this.triggerNavigate$.emit({ path: [navbarItem.route] })
    } else {
      this.triggerNavigate$.emit({ path: [CORE_ROUTES.EMPTY] })
    }
  }
}
