import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { IaNextButtonModel, IaResultModel } from '@ia-app/models/ia-result.model'
import { AppTHEOplayerModel } from '@shared/models/app-theoplayer.model'

@Component({
  selector: 'app-ia-dialog',
  templateUrl: './ia-dialog.component.html',
  styleUrls: ['./ia-dialog.component.scss']
})
export class IaDialogComponent implements OnInit {

  private _result$: BehaviorSubject<IaResultModel>
  private _assets$: BehaviorSubject<IaNextButtonModel>

  @Input()
  set result(value: IaResultModel) { this._result$.next(value) }
  get result(): IaResultModel { return this._result$.getValue() }

  @Input()
  set assets(value: IaNextButtonModel) { this._assets$.next(value) }
  get assets(): IaNextButtonModel { return this._assets$.getValue() }

  firstVideo: AppTHEOplayerModel
  secondVideo: AppTHEOplayerModel

  bIsPaused: boolean

  @Output() closeDialog$: EventEmitter<void>


  constructor() {
    this._result$ = new BehaviorSubject<IaResultModel>(null)
    this._assets$ = new BehaviorSubject<IaNextButtonModel>(null)
    this.closeDialog$ = new EventEmitter<void>()

  }

  ngOnInit(): void {
    this._result$.subscribe(_ => {
      console.groupCollapsed(`[C-Ia-Dialog] _result$ subscribe`)
      console.log(_)
      console.groupEnd()
    })
  }

  closeDialog(): void {
    this.closeDialog$.emit()
  }

}
