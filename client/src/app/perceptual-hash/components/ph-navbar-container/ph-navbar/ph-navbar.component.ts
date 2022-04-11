import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core'
import { MatMenuTrigger } from '@angular/material/menu'
import { NavigationExtras } from '@angular/router'

import { BehaviorSubject } from 'rxjs'

import { PhNavbarAssetsModel, PhNavbarItemAssetsModel, INITIAL_NAVBAR_ASSETS } from '@ph-core/models/navbar/ph-navbar.model'

@Component({
  selector: 'app-ph-navbar',
  templateUrl: './ph-navbar.component.html',
  styleUrls: ['./ph-navbar.component.scss']
})
export class PhNavbarComponent implements OnInit {

  private _assets$: BehaviorSubject<PhNavbarAssetsModel> = new BehaviorSubject<PhNavbarAssetsModel>(INITIAL_NAVBAR_ASSETS)
  private _user$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _menuTriggers$: BehaviorSubject<MatMenuTrigger[] | any[]> = new BehaviorSubject<MatMenuTrigger[] | any[]>([])

  @Input()
  set assets(value: PhNavbarAssetsModel) { this._assets$.next(value) }
  get assets(): PhNavbarAssetsModel { return this._assets$.getValue() }

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
      if (!!triggeredEl) this._renderer.addClass(<HTMLButtonElement>(<ElementRef>triggeredEl._element).nativeElement, 'ph-menu-active')
      else __.forEach(_forEach => { this._renderer.removeClass(<HTMLButtonElement>(<ElementRef>_forEach._element).nativeElement, 'ph-menu-active') })
    })
  }

  navigate(navbarItem?: PhNavbarItemAssetsModel): void {
    if (!!navbarItem) this.triggerNavigate$.emit({ path: [navbarItem.route], extras: {} })
    else this.triggerNavigate$.emit({ path: [], extras: {} })
  }
}
