import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core'
import { MatMenuTrigger } from '@angular/material/menu'
import { NavigationExtras } from '@angular/router'

import { BehaviorSubject } from 'rxjs'

import { IaNavbarAssetsModel, IaNavbarItemAssetsModel, INITIAL_NAVBAR_ASSETS } from '@ia-core/models/navbar/ia-navbar.model'

@Component({
  selector: 'app-ia-navbar',
  templateUrl: './ia-navbar.component.html',
  styleUrls: ['./ia-navbar.component.scss']
})
export class IaNavbarComponent implements OnInit {

  private _assets$: BehaviorSubject<IaNavbarAssetsModel> = new BehaviorSubject<IaNavbarAssetsModel>(INITIAL_NAVBAR_ASSETS)
  private _user$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _menuTriggers$: BehaviorSubject<MatMenuTrigger[] | any[]> = new BehaviorSubject<MatMenuTrigger[] | any[]>([])

  @Input()
  set assets(value: IaNavbarAssetsModel) { this._assets$.next(value) }
  get assets(): IaNavbarAssetsModel { return this._assets$.getValue() }

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
      console.groupCollapsed(`[IaNavbarComponent] _matMenuTriggers$ subscribe`)
      const triggeredEl: MatMenuTrigger | any = __.find(_find => !!_find.menuOpen)
      if (!!triggeredEl) {
        console.log('Opening Menu')
        this._renderer.addClass(<HTMLButtonElement>(<ElementRef>triggeredEl._element).nativeElement, 'ia-menu-active')
      }
      else {
        console.log('Closing Menu')
        __.forEach(_forEach => {
          this._renderer.removeClass(<HTMLButtonElement>(<ElementRef>_forEach._element).nativeElement, 'ia-menu-active')
        })
      }
      console.groupEnd()
    })
  }

  navigate(navbarItem?: IaNavbarItemAssetsModel): void {
    if (!!navbarItem) this.triggerNavigate$.emit({ path: [navbarItem.route], extras: {} })
    else this.triggerNavigate$.emit({ path: [], extras: {} })
  }
}
