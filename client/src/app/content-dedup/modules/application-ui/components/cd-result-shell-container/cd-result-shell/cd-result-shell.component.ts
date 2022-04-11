import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { AppOptionModel } from '@shared/models/app-assets.model'
import { CdNextButtonModel, CdResultOverviewListModel } from '@cd-app/models/cd-result.model'

@Component({
  selector: 'app-cd-result-shell',
  templateUrl: './cd-result-shell.component.html',
  styleUrls: ['./cd-result-shell.component.scss']
})
export class CdResultShellComponent implements OnInit {

  private _bucketForm$: BehaviorSubject<FormData>
  private _bIsProcessing$: BehaviorSubject<boolean>
  private _error$: BehaviorSubject<any>
  private _assets$: BehaviorSubject<CdNextButtonModel>

  bucketLocation: string

  @Input()
  set bucketForm(value: FormData) { this._bucketForm$.next(value) }
  get bucketForm(): FormData { return this._bucketForm$.getValue() }

  @Input()
  set bIsProcessing(value: boolean) { this._bIsProcessing$.next(value) }
  get bIsProcessing(): boolean { return this._bIsProcessing$.getValue() }

  @Input()
  set error(value: any) { this._error$.next(value) }
  get error(): any { return this._error$.getValue() }

  @Input()
  set assets(value: CdNextButtonModel) { this._assets$.next(value) }
  get assets(): CdNextButtonModel { return this._assets$.getValue() }

  @Output() gotoBucketSelection$: EventEmitter<void>

  constructor() {
    this._bucketForm$ = new BehaviorSubject<FormData>(null)
    this._bIsProcessing$ = new BehaviorSubject<boolean>(true)
    this._error$ = new BehaviorSubject<any>({})
    this._assets$ = new BehaviorSubject<CdNextButtonModel>(null)
    this.gotoBucketSelection$ = new EventEmitter<void>()
  }

  ngOnInit(): void {
    this.bucketLocation = (!!this.bucketForm) ? this.bucketForm['bucket'].toString() : ''
  }

  gotoBucketSelection(): void {
    this.gotoBucketSelection$.emit()
  }
}
