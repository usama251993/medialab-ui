import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-st-feature-left-banner',
  templateUrl: './st-feature-left-banner.component.html',
  styleUrls: ['./st-feature-left-banner.component.scss']
})
export class StFeatureLeftBannerComponent implements OnInit {


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
