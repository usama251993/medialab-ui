import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppButton2Model, INITIAL_BUTTON_MODEL } from '@shared/models/app-assets.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-button-container',
  template: `<app-button  [assets]="assets"
                          [disabled]="disabled"
                          (triggerButton$)="triggerButton($event)"></app-button>`
})
export class AppButtonContainerComponent implements OnInit {

  private _assets$: BehaviorSubject<AppButton2Model> = new BehaviorSubject<AppButton2Model>(null)
  private _disabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null)

  @Input()
  set assets(value: AppButton2Model) { this._assets$.next(value) }
  get assets(): AppButton2Model { return this._assets$.getValue() }

  @Input()
  set disabled(value: boolean) { this._disabled$.next(value) }
  get disabled(): boolean { return this._disabled$.getValue() }

  // @Input() assets: AppButton2Model

  @Output() triggerButton$: EventEmitter<{ type: string }> = new EventEmitter<{ type: string }>()

  constructor() { }

  ngOnInit(): void {
  }

  triggerButton(_: { type: string }) {
    this.triggerButton$.emit(_)
  }

}
