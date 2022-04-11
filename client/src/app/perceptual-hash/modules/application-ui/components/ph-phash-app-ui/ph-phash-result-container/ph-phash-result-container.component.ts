import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { Observable } from 'rxjs'

import { AppFormFieldModel } from '@shared/models/app-form.model'

import { PhPhashResultService } from '@ph-app/services/ph-phash-app-ui/ph-phash-result/ph-phash-result.service'
import { PhPhashResultModel } from '@ph-core/modules/application-ui/models/ph-phash-app-ui/ph-phash-result/ph-phash-result.model'

@Component({
  selector: 'app-ph-phash-result-container',
  template: `<app-ph-phash-result [result]                  = "result$                  | async"
                                  [playerControlForm]       = "playerControlForm$       | async"
                                  [playerControlFormAssets] = "playerControlFormAssets$ | async"
                                  (gotoOverview$)           = "gotoOverview()"
                                  (gotoBucketSelection$)    = "gotoBucketSelection()"></app-ph-phash-result>`
})
export class PhPhashResultContainerComponent implements OnInit {

  result$: Observable<PhPhashResultModel>
  playerControlForm$: Observable<FormGroup>
  playerControlFormAssets$: Observable<{ frameIndex: AppFormFieldModel }>

  constructor(
    private _resultService: PhPhashResultService
  ) { }

  ngOnInit(): void {
    this.result$ = this._resultService.watchResult$()
    this.playerControlForm$ = this._resultService.watchPlayerControlForm$()
    this.playerControlFormAssets$ = this._resultService.watchPlayerControlFormAssets$()
  }

  gotoOverview(): void {
    this._resultService.gotoOverview()
  }

  gotoBucketSelection(): void {
    this._resultService.gotoBucketSelection()
  }

}
