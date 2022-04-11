import { Component, OnInit, Input, OnChanges, SimpleChange, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LmKBPlanModel } from '@lm-core/models/lm-kb.model';

@Component({
  selector: 'app-lm-pricing',
  templateUrl: './lm-pricing.component.html',
  styleUrls: ['./lm-pricing.component.scss']
})
export class LmPricingComponent implements OnInit {
  private _pricingData$: BehaviorSubject<LmKBPlanModel[]>

  @Input()
  set pricingData(value: LmKBPlanModel[]) { this._pricingData$.next(value) }
  get pricingData(): LmKBPlanModel[] { return this._pricingData$.getValue() }

  @Output() triggerNavigate$: EventEmitter<{ path: string }>

  constructor() {
    this._pricingData$ = new BehaviorSubject<any>(null)
    this.triggerNavigate$ = new EventEmitter<{ path: string }>()
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(this.pricingData)
  }
}
