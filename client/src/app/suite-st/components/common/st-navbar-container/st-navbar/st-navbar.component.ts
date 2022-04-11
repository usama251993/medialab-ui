import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core'
import { MatMenuTrigger } from '@angular/material/menu'

import { NavigationExtras } from '@angular/router'

import { BehaviorSubject } from 'rxjs'

import { INITIAL_NAVBAR_ASSETS, StNavbarAssetsModel, StNavbarItemAssetsModel } from '@st-core/models/st-navbar/st-navbar.model'

@Component({
  selector: 'app-st-navbar',
  templateUrl: './st-navbar.component.html',
  styleUrls: ['./st-navbar.component.scss']
})
export class StNavbarComponent implements OnInit {

  private _assets$: BehaviorSubject<StNavbarAssetsModel> = new BehaviorSubject<StNavbarAssetsModel>(INITIAL_NAVBAR_ASSETS)
  private _user$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _menuTriggers$: BehaviorSubject<MatMenuTrigger[] | any[]> = new BehaviorSubject<MatMenuTrigger[] | any[]>([])

  @Input()
  set assets(value: StNavbarAssetsModel) { this._assets$.next(value) }
  get assets(): StNavbarAssetsModel { return this._assets$.getValue() }

  @Input()
  set user(value: boolean) { this._user$.next(value) }
  get user(): boolean { return this._user$.getValue() }

  @ViewChildren(MatMenuTrigger) private set menuTrigger(_: QueryList<MatMenuTrigger | any>) { this._menuTriggers$.next(_.toArray()) }

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor(
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.handleMenuTrigger()
  }

  handleMenuTrigger(): void {
    this._menuTriggers$.subscribe(__ => {
      const triggeredEl: MatMenuTrigger | any = __.find(_find => !!_find.menuOpen)
      if (!!triggeredEl) this._renderer.addClass(<HTMLButtonElement>(<ElementRef>triggeredEl._element).nativeElement, 'st-menu-active')
      else __.forEach(_forEach => { this._renderer.removeClass(<HTMLButtonElement>(<ElementRef>_forEach._element).nativeElement, 'st-menu-active') })
    })
  }

  navigate(navbarItem?: StNavbarItemAssetsModel): void {
    if (!!navbarItem) {
      this.triggerNavigate$.emit({ path: [navbarItem.route], extras: {} })
    }
    else this.triggerNavigate$.emit({ path: [], extras: {} })
  }
}
