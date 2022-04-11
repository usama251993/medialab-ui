import { Component, Input, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { CdClosureAssetsModel, INITIAL_CLOSURE_ASSETS_MODEL } from '@cd-business/models/common/cd-closure.model'
import { CdHomeService } from '@cd-business/services/cd-home/cd-home.service'
import { CORE_ROUTES } from '@cd-core/cd-core.routes'

@Component({
  selector: 'app-cd-closure',
  templateUrl: './cd-closure.component.html',
  styleUrls: ['./cd-closure.component.scss']
})
export class CdClosureComponent implements OnInit {

  private _assets$: BehaviorSubject<CdClosureAssetsModel> = new BehaviorSubject<CdClosureAssetsModel>(INITIAL_CLOSURE_ASSETS_MODEL)

  @Input()
  set assets(value: CdClosureAssetsModel) { this._assets$.next(value) }
  get assets(): CdClosureAssetsModel { return this._assets$.getValue() }

  constructor(
    private _homeService: CdHomeService
  ) { }

  ngOnInit(): void { }

  navigate() {
    this._homeService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }
}
