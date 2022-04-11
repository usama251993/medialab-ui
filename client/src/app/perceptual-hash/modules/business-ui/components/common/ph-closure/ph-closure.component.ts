import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { PhClosureAssetsModel, INITIAL_CLOSURE_ASSETS_MODEL } from '@ph-core/modules/business-ui/models/common/ph-closure.model'
import { NavigationExtras } from '@angular/router'
import { PhHomeService } from '@ph-core/modules/business-ui/services/ph-home/ph-home.service'
import { CORE_ROUTES } from '@ph-core/ph-core.routes'

@Component({
  selector: 'app-ph-closure',
  templateUrl: './ph-closure.component.html',
  styleUrls: ['./ph-closure.component.scss']
})
export class PhClosureComponent implements OnInit {

  private _assets$: BehaviorSubject<PhClosureAssetsModel> = new BehaviorSubject<PhClosureAssetsModel>(INITIAL_CLOSURE_ASSETS_MODEL)

  @Input()
  set assets(value: PhClosureAssetsModel) { this._assets$.next(value) }
  get assets(): PhClosureAssetsModel { return this._assets$.getValue() }

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor(
    private _homeService: PhHomeService
  ) { }

  ngOnInit(): void { }

  navigate() {
    this._homeService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }


}
