import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { BehaviorSubject } from 'rxjs'

import { PhApplicationModel } from '@ph-app/models/ph-app-ui-shell/ph-app-ui-shell.model'

@Component({
  selector: 'app-ph-app-ui-shell',
  templateUrl: './ph-app-ui-shell.component.html',
  styleUrls: ['./ph-app-ui-shell.component.scss']
})
export class PhAppUIShellComponent implements OnInit {

  _appList$: BehaviorSubject<PhApplicationModel[]> = new BehaviorSubject<PhApplicationModel[]>([])

  @Input()
  set appList(value: PhApplicationModel[]) { this._appList$.next(value) }
  get appList(): PhApplicationModel[] { return this._appList$.getValue() }

  @Output() gotoApplication$: EventEmitter<{ path: string; extras: NavigationExtras }> = new EventEmitter<{ path: string; extras: NavigationExtras }>()

  constructor() { }

  ngOnInit(): void { }

  gotoApplication(_: { path: string; extras: NavigationExtras }): void {
    this.gotoApplication$.emit(_)
  }

}
