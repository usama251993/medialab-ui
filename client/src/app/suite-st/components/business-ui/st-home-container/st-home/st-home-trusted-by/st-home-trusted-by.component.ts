import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-st-home-trusted-by',
  templateUrl: './st-home-trusted-by.component.html',
  styleUrls: ['./st-home-trusted-by.component.scss']
})
export class StHomeTrustedByComponent implements OnInit {

  private _assets$: BehaviorSubject<any>

  @Input()
  set assets(value: any) { this._assets$.next(value) };
  get assets(): any { return this._assets$.getValue() };

  constructor() {
    this._assets$ = new BehaviorSubject<any>(null)
  }

  ngOnInit(): void {
  }

}
