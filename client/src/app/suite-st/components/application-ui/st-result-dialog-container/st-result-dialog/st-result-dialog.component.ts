import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-st-result-dialog',
  templateUrl: './st-result-dialog.component.html',
  styleUrls: ['./st-result-dialog.component.scss']
})
export class StResultDialogComponent implements OnInit {

  _testPackResult$: BehaviorSubject<any>
  _data$: BehaviorSubject<any>

  @Input()
  set testPackResult(value: any) { this._testPackResult$.next(value) }
  get testPackResult(): any { return this._testPackResult$.getValue() }

  @Input()
  set data(value: any) { this._data$.next(value) }
  get data(): any { return this._data$.getValue() }

  constructor() {
    this._testPackResult$ = new BehaviorSubject<any>(null)
    this._data$ = new BehaviorSubject<any>(null)
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this._testPackResult$, this._data$)
  }

}
