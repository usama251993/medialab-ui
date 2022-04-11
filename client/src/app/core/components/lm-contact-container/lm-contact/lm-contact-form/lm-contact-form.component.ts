import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { AppOptionModel } from '@shared/models/app-assets.model'

import { LmContactAssetsModel } from '@lm-core/models/lm-contact/lm-contact-assets.model'
import { LmContactModel } from '@lm-core/models/lm-contact/lm-contact.model'

@Component({
  selector: 'app-lm-contact-form',
  templateUrl: './lm-contact-form.component.html',
  styleUrls: ['./lm-contact-form.component.scss']
})
export class LmContactFormComponent implements OnInit {

  private _assets$: BehaviorSubject<LmContactModel>
  private _buttonAssets$: BehaviorSubject<LmContactAssetsModel>
  private _formGroup$: BehaviorSubject<any>
  private _industry$: BehaviorSubject<AppOptionModel[]>
  private _country$: BehaviorSubject<AppOptionModel[]>
  private _services$: BehaviorSubject<AppOptionModel[]>
  private _referredBy$: BehaviorSubject<AppOptionModel[]>

  @Input()
  set industry(value: any) { this._industry$.next(value) };
  get industry(): any { return this._industry$.getValue() };

  @Input()
  set country(value: any) { this._country$.next(value) };
  get country(): any { return this._country$.getValue() };

  @Input()
  set services(value: any) { this._services$.next(value) };
  get services(): any { return this._services$.getValue() };

  @Input()
  set referredBy(value: any) { this._referredBy$.next(value) };
  get referredBy(): any { return this._referredBy$.getValue() };

  @Input()
  set asset(value: any) { this._assets$.next(value) };
  get asset(): any { return this._assets$.getValue() };

  @Input()
  set buttonAssets(value: LmContactAssetsModel) { this._buttonAssets$.next(value) };
  get buttonAssets(): LmContactAssetsModel { return this._buttonAssets$.getValue() };

  @Input()
  set formGroup(value: any) { this._formGroup$.next(value) };
  get formGroup(): any { return this._formGroup$.getValue() };

  @Output() triggerSubmit$: EventEmitter<void> = new EventEmitter<void>()

  constructor() {
    this._formGroup$ = new BehaviorSubject<any>(null)
    this._assets$ = new BehaviorSubject<any>(null)
    this._industry$ = new BehaviorSubject<AppOptionModel[]>(null)
    this._country$ = new BehaviorSubject<AppOptionModel[]>(null)
    this._services$ = new BehaviorSubject<AppOptionModel[]>(null)
    this._referredBy$ = new BehaviorSubject<AppOptionModel[]>(null)
    this._buttonAssets$ = new BehaviorSubject<LmContactAssetsModel>(null)
  }

  ngOnInit(): void {
  }

  submitForm($: Event): void {
    if ($['submitter'].type === 'submit') {
      this.triggerSubmit$.emit(this.formGroup.value)
    }
  }

}
