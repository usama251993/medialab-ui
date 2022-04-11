import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { CdResultModel } from '@cd-core/models/cd-result.model'

@Component({
  selector: 'app-cd-dialog',
  templateUrl: './cd-dialog.component.html',
  styleUrls: ['./cd-dialog.component.scss']
})
export class CdDialogComponent implements OnInit {

  private _result$: BehaviorSubject<CdResultModel>

  @Input()
  set result(value: CdResultModel) { this._result$.next(value) };
  get result(): CdResultModel { return this._result$.getValue() };

  @Output() closeDialog$: EventEmitter<void>

  constructor() {
    this._result$ = new BehaviorSubject<CdResultModel>(null)
    this.closeDialog$ = new EventEmitter<void>()
  }

  ngOnInit(): void { }

  closeDialog(): void {
    this.closeDialog$.emit()
  }

}
