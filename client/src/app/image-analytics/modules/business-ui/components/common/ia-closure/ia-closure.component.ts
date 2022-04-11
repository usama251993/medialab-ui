import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { IaClosureAssetsModel, INITIAL_CLOSURE_ASSETS_MODEL } from '@ia-business/models/common/ia-closure.model'
import { IaHomeService } from '@ia-business/services/ia-home/ia-home.service'
import { CORE_ROUTES } from '@ia-core/ia-core.routes'

@Component({
  selector: 'app-ia-closure',
  templateUrl: './ia-closure.component.html',
  styleUrls: ['./ia-closure.component.scss']
})
export class IaClosureComponent implements OnInit {

  private _assets$: BehaviorSubject<IaClosureAssetsModel> = new BehaviorSubject<IaClosureAssetsModel>(INITIAL_CLOSURE_ASSETS_MODEL)

  @Input()
  set assets(value: IaClosureAssetsModel) { this._assets$.next(value) }
  get assets(): IaClosureAssetsModel { return this._assets$.getValue() }

  constructor(
    private _homeService: IaHomeService
  ) { }

  ngOnInit(): void { }

  navigate() {
    this._homeService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }
}
