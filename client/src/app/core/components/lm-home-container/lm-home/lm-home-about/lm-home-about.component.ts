import { Component, OnInit, Input } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { LmHomeAssetsAboutModel } from '@lm-core/models/assets/lm-home.model'

@Component({
  selector: 'app-lm-home-about',
  templateUrl: './lm-home-about.component.html',
  styleUrls: ['./lm-home-about.component.scss']
})
export class LmHomeAboutComponent implements OnInit {

  private _assets$: BehaviorSubject<LmHomeAssetsAboutModel>

  @Input()
  set assets(value: LmHomeAssetsAboutModel) { this._assets$.next(value) };
  get assets(): LmHomeAssetsAboutModel { return this._assets$.getValue() };

  constructor() {
    this._assets$ = new BehaviorSubject<LmHomeAssetsAboutModel>(null)
  }

  ngOnInit(): void { }

}
