import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { LmHomeAssetsModel } from '@lm-core/models/assets/lm-home.model'
import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-lm-home',
  templateUrl: './lm-home.component.html',
  styleUrls: ['./lm-home.component.scss']
})
export class LmHomeComponent implements OnInit {

  private _assets$: BehaviorSubject<LmHomeAssetsModel>

  @Input()
  set assets(value: LmHomeAssetsModel) { this._assets$.next(value) };
  get assets(): LmHomeAssetsModel { return this._assets$.getValue() };

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() {
    this._assets$ = new BehaviorSubject<LmHomeAssetsModel>(null)
  }

  ngOnInit(): void { }

  triggerNavigate() {
    this.triggerNavigate$.emit({ path: [], extras: {} })
  }
}
