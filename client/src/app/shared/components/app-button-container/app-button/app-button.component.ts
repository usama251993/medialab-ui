import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppButton2Model } from '@shared/models/app-assets.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent implements OnInit {

  @Input() assets: AppButton2Model
  private _disabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null)

  @Input()
  set disabled(value: boolean) { this._disabled$.next(value) }
  get disabled(): boolean { return this._disabled$.getValue() }

  @Output() triggerButton$: EventEmitter<{ type: string }> = new EventEmitter<{ type: string }>()

  constructor() { }

  ngOnInit(): void {
  }

  triggerButton(): void {
    this.triggerButton$.emit();
  }

}
