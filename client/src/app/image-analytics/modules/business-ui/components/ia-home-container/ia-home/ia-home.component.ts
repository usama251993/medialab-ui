import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { IaHomeAssetsModel, INITIAL_HOME_ASSETS_MODEL } from '@ia-business/models/ia-home.model'

@Component({
  selector: 'app-ia-home',
  templateUrl: './ia-home.component.html',
  styleUrls: ['./ia-home.component.scss']
})
export class IaHomeComponent implements OnInit {

  private _assets$: BehaviorSubject<IaHomeAssetsModel> = new BehaviorSubject<IaHomeAssetsModel>(INITIAL_HOME_ASSETS_MODEL)

  @Input()
  set assets(value: IaHomeAssetsModel) { this._assets$.next(value) }
  get assets(): IaHomeAssetsModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
