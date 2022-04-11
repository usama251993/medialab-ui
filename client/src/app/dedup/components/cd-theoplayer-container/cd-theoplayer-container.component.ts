import { Component, OnInit, Input } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { CdResultModel } from '@cd-core/models/cd-result.model'

@Component({
  selector: 'app-cd-theoplayer-container',
  template: `<app-cd-theoplayer [result] = "result"></app-cd-theoplayer>`
})
export class CdTheoplayerContainerComponent implements OnInit {

  private _result$: BehaviorSubject<CdResultModel>

  @Input()
  set result(value: CdResultModel) { this._result$.next(value) };
  get result(): CdResultModel { return this._result$.getValue() };

  constructor() {
    this._result$ = new BehaviorSubject<CdResultModel>(null)
  }

  ngOnInit(): void { }

}
