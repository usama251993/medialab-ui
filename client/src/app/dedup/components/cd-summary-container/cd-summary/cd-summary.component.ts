import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-cd-summary',
  templateUrl: './cd-summary.component.html',
  styleUrls: ['./cd-summary.component.scss']
})
export class CdSummaryComponent implements OnInit {

  private _data$: BehaviorSubject<{ parameter: string; count: number }[]>

  @Input()
  set metaInfo(value: { parameter: string; count: number }[]) { this._data$.next(value) }
  get metaInfo(): { parameter: string; count: number }[] { return this._data$.getValue() }

  displayedColumns: string[]
  // @Output() gotoSummary$: EventEmitter<{parameter: string;count: number}>

  constructor() {
    this.displayedColumns = ['parameter', 'count']
    this._data$ = new BehaviorSubject<{ parameter: string; count: number }[]>([])
  }

  ngOnInit(): void { }

}
