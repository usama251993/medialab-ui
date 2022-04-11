import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { AppZigzagAssetsModel, INITIAL_ZIGZAG_ASSETS_MODEL, AppZigzagConfigModel, INITIAL_ZIGZAG_CONFIG_MODEL } from '@shared/models/components/zigzag/app-zigzag.model'
import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-zigzag',
  templateUrl: './app-zigzag.component.html',
  styleUrls: ['./app-zigzag.component.scss']
})
export class AppZigzagComponent implements OnInit {

  private _assets$: BehaviorSubject<AppZigzagAssetsModel> = new BehaviorSubject<AppZigzagAssetsModel>(INITIAL_ZIGZAG_ASSETS_MODEL)
  private _config$: BehaviorSubject<AppZigzagConfigModel> = new BehaviorSubject<AppZigzagConfigModel>(INITIAL_ZIGZAG_CONFIG_MODEL)

  @Input()
  set assets(value: AppZigzagAssetsModel) { this._assets$.next(value) }
  get assets(): AppZigzagAssetsModel { return this._assets$.getValue() }

  @Input()
  set config(value: AppZigzagConfigModel) { this._config$.next(value) }
  get config(): AppZigzagConfigModel { return this._config$.getValue() }

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() { }

  ngOnInit(): void { }

  triggerNavigate(): void {
    this.triggerNavigate$.emit();
  }

}
