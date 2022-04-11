import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

import { BehaviorSubject, Observable } from 'rxjs'

import { AppFormFieldModel } from '@shared/models/app-form.model'

import { PhPhashResultModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-result/ph-phash-result.model'
import { PhPhashAppService } from '../ph-phash-app.service'
import { first } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PhPhashResultService {

  private _playerControlForm$: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(null)
  private _playerControlFormAssets$: BehaviorSubject<{ frameIndex: AppFormFieldModel }> = new BehaviorSubject<{ frameIndex: AppFormFieldModel }>(null)

  private _playerControlFormAssets: { frameIndex: AppFormFieldModel }

  constructor(
    private _appService: PhPhashAppService,
    private _fb: FormBuilder
  ) {
    this._playerControlFormAssets = {
      frameIndex: {
        name: 'frameIndex',
        label: 'Frame Index',
        placeholder: 'Frame Index',
        type: 'number',
        validation: {
          bIsMandatory: true,
          min: 0
        },
        initialization: {
          value: 0,
          disabled: false
        }
      }
    }
  }

  setResult(_: PhPhashResultModel): void {
    this._appService.setResult(_)
  }

  resetResult(): void {
    this._appService.resetResult()
  }

  watchResult$(): Observable<PhPhashResultModel> {
    return this._appService.watchResult$()
  }

  watchPlayerControlFormAssets$(): Observable<{ frameIndex: AppFormFieldModel }> {
    this._playerControlFormAssets$.next(this._playerControlFormAssets)
    return this._playerControlFormAssets$.asObservable()
  }

  watchPlayerControlForm$(): Observable<FormGroup> {
    const _: FormGroup = this._fb.group({
      frameIndex: [{ ...this._playerControlFormAssets.frameIndex.initialization }]
    })
    this._playerControlForm$.next(_)
    return this._playerControlForm$.asObservable()
  }

  gotoOverview(): void {
    this._appService.watchOverviewParams$().pipe(first()).subscribe({
      next: __ => { this._appService.gotoOverview(__) }
    })
  }

  gotoBucketSelection(): void {
    this._appService.gotoBucketSelection()
  }

}
