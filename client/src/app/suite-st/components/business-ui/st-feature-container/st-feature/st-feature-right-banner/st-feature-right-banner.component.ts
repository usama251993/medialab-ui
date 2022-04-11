import { Component, Input, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs/'

@Component({
  selector: 'app-st-feature-right-banner',
  templateUrl: './st-feature-right-banner.component.html',
  styleUrls: ['./st-feature-right-banner.component.scss']
})
export class StFeatureRightBannerComponent implements OnInit {

  private _assets$: BehaviorSubject<any>

  @Input()
  set assets(value: any) { this._assets$.next(value) };
  get assets(): any { return this._assets$.getValue() };

  constructor() {
    this._assets$ = new BehaviorSubject<any>(null)
  }

  ngOnInit() { }

}
