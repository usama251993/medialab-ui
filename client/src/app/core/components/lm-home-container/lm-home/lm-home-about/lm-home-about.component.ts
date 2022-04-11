import { Component, OnInit, Input } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { LmHomeAssetsAboutModel } from '@lm-core/models/lm-home.model'

@Component({
  selector: 'app-lm-home-about',
  templateUrl: './lm-home-about.component.html',
  styleUrls: ['./lm-home-about.component.scss']
})
export class LmHomeAboutComponent implements OnInit {

  assets$: BehaviorSubject<LmHomeAssetsAboutModel>

  @Input()
  set assets(value: LmHomeAssetsAboutModel) { this.assets$.next(value) };
  get assets(): LmHomeAssetsAboutModel { return this.assets$.getValue() };

  constructor() {
    this.assets$ = new BehaviorSubject<LmHomeAssetsAboutModel>(null)
  }

  ngOnInit(): void { }

}
