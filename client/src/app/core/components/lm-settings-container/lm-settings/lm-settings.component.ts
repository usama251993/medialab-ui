import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { LmKBAccountModel, LmKBPaymentMethodModel } from '@lm-core/models/lm-kb.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lm-settings',
  templateUrl: './lm-settings.component.html',
  styleUrls: ['./lm-settings.component.scss']
})
export class LmSettingsComponent implements OnInit {

  _kBAccountDetails$: BehaviorSubject<LmKBAccountModel>
  _paymentMethods$: BehaviorSubject<LmKBPaymentMethodModel[]>
  _assets$: BehaviorSubject<any>
  quickLinks: { index: number, value: string }[]
  selectedCard: string = "WSO2 Profile";

  @Input()
  set kBAccountDetails(value: LmKBAccountModel) { this._kBAccountDetails$.next(value) };
  get kBAccountDetails(): LmKBAccountModel { return this._kBAccountDetails$.getValue() };

  @Input()
  set paymentMethods(value: LmKBPaymentMethodModel[]) { this._paymentMethods$.next(value) };
  get paymentMethods(): LmKBPaymentMethodModel[] { return this._paymentMethods$.getValue() };

  @Input()
  set assets(value: any) { this._assets$.next(value) };
  get assets(): any { return this._assets$.getValue() };

  @Output() triggerAddCard$: EventEmitter<void>

  constructor() {
    this._assets$ = new BehaviorSubject<any>(null)
    this._kBAccountDetails$ = new BehaviorSubject<LmKBAccountModel>(null)
    this._paymentMethods$ = new BehaviorSubject<LmKBPaymentMethodModel[]>(null)
    this.triggerAddCard$ = new EventEmitter<any>()
  }

  ngOnInit(): void {
    this._initializeQuickLinks()
  }

  ngOnChanges(changes: SimpleChange) {
    // console.log(this.assets)
  }

  private _initializeQuickLinks() {
    this.quickLinks = [];
    // console.log(this.assets[0])
    for (let i = 0; i < this.assets.length; i++) {
      // this.assets.forEach(data => {
      // console.log(this.assets[i].title)
      this.quickLinks.push({ index: i, value: this.assets[i].title })
    }
  }

  selectValue(_: any) {
    // console.log(_)
    this.selectedCard = _.value
  }

  addPaymentMethod() {
    console.log("Add")
    this.triggerAddCard$.emit();
  }


}
