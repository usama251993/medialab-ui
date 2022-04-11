import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { CdHomeAssetsModel, INITIAL_HOME_ASSETS_MODEL } from '@cd-business/models/cd-home.model'

@Component({
  selector: 'app-cd-home',
  templateUrl: './cd-home.component.html',
  styleUrls: ['./cd-home.component.scss']
})
export class CdHomeComponent implements OnInit {

  private _assets$: BehaviorSubject<CdHomeAssetsModel> = new BehaviorSubject<CdHomeAssetsModel>(INITIAL_HOME_ASSETS_MODEL)

  @Input()
  set assets(value: CdHomeAssetsModel) { this._assets$.next(value) }
  get assets(): CdHomeAssetsModel { return this._assets$.getValue() }

  constructor() { }

  ngOnInit(): void { }

}
