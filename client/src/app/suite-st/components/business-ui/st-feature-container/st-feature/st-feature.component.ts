import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-st-feature',
  templateUrl: './st-feature.component.html',
  styleUrls: ['./st-feature.component.scss']
})
export class StFeatureComponent implements OnInit {

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

  navigate() {
    this.triggerNavigate$.emit({ path: [], extras: {} })
  }

}
