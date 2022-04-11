import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-st-box-banner',
  templateUrl: './st-box-banner.component.html',
  styleUrls: ['./st-box-banner.component.scss']
})
export class StBoxBannerComponent implements OnInit {

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
