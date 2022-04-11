import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Dictionary } from '@ngrx/entity'
import { MatSidenav } from '@angular/material/sidenav'

import { LmUserModel } from '@shared/models/lm-auth.model'
import * as fromNavbar from '@lm-core/models/lm-navbar.model'

@Component({
  selector: 'app-lm-navbar',
  templateUrl: './lm-navbar.component.html',
  styleUrls: ['./lm-navbar.component.scss']
})
export class LmNavbarComponent implements OnInit {

  data$: BehaviorSubject<Dictionary<fromNavbar.LmNavbarAssetsModel>>
  user$: BehaviorSubject<Dictionary<LmUserModel>>

  @Input()
  set assetsDict(value: Dictionary<fromNavbar.LmNavbarAssetsModel>) { this.data$.next(value) };
  get assetsDict(): Dictionary<fromNavbar.LmNavbarAssetsModel> { return this.data$.getValue() };

  @Input()
  set userContextDict(value: Dictionary<LmUserModel>) { this.user$.next(value) };
  get userContextDict(): Dictionary<LmUserModel> { return this.user$.getValue() };

  @Input() assetsEntityID: string
  @Input() userEntityIDs: string[]

  @Output() triggerNavigate$: EventEmitter<{ path: string }>
  @Output() toggleSidenav$: EventEmitter<MatSidenav>
  @Output() triggerLogout$: EventEmitter<LmUserModel>

  constructor() {
    this.data$ = new BehaviorSubject<Dictionary<fromNavbar.LmNavbarAssetsModel>>(null)
    this.user$ = new BehaviorSubject<Dictionary<LmUserModel>>(null)
    this.triggerNavigate$ = new EventEmitter<{ path: string }>()
    this.toggleSidenav$ = new EventEmitter<MatSidenav>()
    this.triggerLogout$ = new EventEmitter<LmUserModel>()
  }

  ngOnInit(): void { }

  navigate(navbarItem?: fromNavbar.LmNavbarItemAssetsModel): void {
    (!!navbarItem)
      ? (navbarItem.route === 'logout')
        ? this.triggerLogout$.emit(this.userContextDict[this.userEntityIDs[0]])
        : this.triggerNavigate$.emit({ path: navbarItem.route })
      : this.triggerNavigate$.emit({ path: 'home' })
  }


}
