import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LmContactAssetsModel } from '@lm-core/models/lm-contact/lm-contact-assets.model';
import { AppOptionModel } from '@shared/models/app-assets.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lm-contact',
  templateUrl: './lm-contact.component.html',
  styleUrls: ['./lm-contact.component.scss']
})
export class LmContactComponent implements OnInit {

  private _formGroup$: BehaviorSubject<any>
  private _form$: BehaviorSubject<any>
  private _assets$: BehaviorSubject<LmContactAssetsModel>
  private _industry$: BehaviorSubject<AppOptionModel[]>
  private _country$: BehaviorSubject<AppOptionModel[]>
  private _referredBy$: BehaviorSubject<AppOptionModel[]>
  private _services$: BehaviorSubject<AppOptionModel[]>

  @Input()
  set formGroup(value: FormGroup) { this._formGroup$.next(value) };
  get formGroup(): FormGroup { return this._formGroup$.getValue() };

  @Input()
  set assets(value: LmContactAssetsModel) { this._assets$.next(value) };
  get assets(): LmContactAssetsModel { return this._assets$.getValue() };

  @Input()
  set form(value: any) { this._form$.next(value) };
  get form(): any { return this._form$.getValue() };

  @Input()
  set industry(value: AppOptionModel[]) { this._industry$.next(value) };
  get industry(): AppOptionModel[] { return this._industry$.getValue() };

  @Input()
  set country(value: AppOptionModel[]) { this._country$.next(value) };
  get country(): AppOptionModel[] { return this._country$.getValue() };

  @Input()
  set referredBy(value: AppOptionModel[]) { this._referredBy$.next(value) };
  get referredBy(): AppOptionModel[] { return this._referredBy$.getValue() };

  @Input()
  set services(value: AppOptionModel[]) { this._services$.next(value) };
  get services(): AppOptionModel[] { return this._services$.getValue() };

  @Output() triggerSubmit$: EventEmitter<void> = new EventEmitter<void>()

  constructor() {
    this._formGroup$ = new BehaviorSubject<any>(null)
    this._form$ = new BehaviorSubject<any>(null)
    this._industry$ = new BehaviorSubject<AppOptionModel[]>(null)
    this._country$ = new BehaviorSubject<AppOptionModel[]>(null)
    this._referredBy$ = new BehaviorSubject<AppOptionModel[]>(null)
    this._services$ = new BehaviorSubject<AppOptionModel[]>(null)
    this._assets$ = new BehaviorSubject<LmContactAssetsModel>(null)
  }

  ngOnInit(): void {
  }

  triggerSubmit(_: any) {
    this.triggerSubmit$.emit(_)
  }

}
