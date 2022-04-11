import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { PhHomeAssetsModel, INITIAL_HOME_ASSETS_MODEL } from '@ph-core/modules/business-ui/models/ph-home.model'
import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-ph-home',
  templateUrl: './ph-home.component.html',
  styleUrls: ['./ph-home.component.scss']
})
export class PhHomeComponent implements OnInit {

  private _assets$: BehaviorSubject<PhHomeAssetsModel> = new BehaviorSubject<PhHomeAssetsModel>(INITIAL_HOME_ASSETS_MODEL)

  @Input()
  set assets(value: PhHomeAssetsModel) { this._assets$.next(value) }
  get assets(): PhHomeAssetsModel { return this._assets$.getValue() }

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() { }

  ngOnInit(): void { }

  navigate() {
    this.triggerNavigate$.emit({ path: [], extras: {} })
  }

}
