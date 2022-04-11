import { Component, Input, OnInit } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

import { CdAppCoreService } from '@cd-app/services/cd-app-core.service'
import { CdNextButtonModel } from '../../models/cd-result.model'

@Component({
  selector: 'app-cd-result-metadata-container',
  template: `<app-cd-result-metadata [bucketLocation]   = "bucketLocation"
                                     [assets]           = "buttonAsset$ | async"
                                     (triggerNavigate$) = "triggerNavigate()"></app-cd-result-metadata>`
})
export class CdResultMetadataContainerComponent implements OnInit {

  private _bucketLocation$: BehaviorSubject<string>
  buttonAsset$: Observable<CdNextButtonModel>

  @Input()
  set bucketLocation(value: string) { this._bucketLocation$.next(value) }
  get bucketLocation(): string { return this._bucketLocation$.getValue() }

  constructor(
    private _coreService: CdAppCoreService
  ) {
    this._bucketLocation$ = new BehaviorSubject<string>('')
    this._coreService.setButtonAsset()
    this.buttonAsset$ = this._coreService.watchButtonAsset$()
  }

  ngOnInit(): void { }

  triggerNavigate(): void {
    this._coreService.gotoBucketSelection()
  }

}
