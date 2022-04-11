import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-st-home-closure',
  templateUrl: './st-home-closure.component.html',
  styleUrls: ['./st-home-closure.component.scss']
})
export class StHomeClosureComponent implements OnInit {

  private _assets$: BehaviorSubject<any>

  @Input()
  set assets(value: any) { this._assets$.next(value) };
  get assets(): any { return this._assets$.getValue() };

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() {
    this._assets$ = new BehaviorSubject<any>(null)
  }

  ngOnInit(): void {
  }

  triggerNavigate() {
    this.triggerNavigate$.emit({ path: [], extras: {} })
  }

}
