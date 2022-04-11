import { Component, Input, OnInit } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

import { IaAppCoreService } from '@ia-app/services/ia-app-core.service'
import { IaNextButtonModel } from '../../models/ia-result.model'

@Component({
  selector: 'app-ia-result-metadata-container',
  template: `<app-ia-result-metadata [assets]           = "buttonAsset$ | async"
                                     [sampleCount]      = "sampleCount$ | async"
                                     [bucketLocation]   = "bucketLocation"
                                     (triggerNavigate$) = "triggerNavigate()"></app-ia-result-metadata>`
})
export class IaResultMetadataContainerComponent implements OnInit {

  private _bucketLocation$: BehaviorSubject<string>
  buttonAsset$: Observable<IaNextButtonModel>
  sampleCount$: Observable<number>

  @Input()
  set bucketLocation(value: string) { this._bucketLocation$.next(value) }
  get bucketLocation(): string { return this._bucketLocation$.getValue() }

  constructor(
    private _coreService: IaAppCoreService
  ) {
    this._bucketLocation$ = new BehaviorSubject<string>('')
    this._coreService.setButtonAsset()
    this.buttonAsset$ = this._coreService.watchButtonAsset$()
    this.sampleCount$ = this._coreService.watchSampleCount$()
  }

  ngOnInit(): void { }

  triggerNavigate(): void {
    this._coreService.gotoBucketSelection()
  }

}
