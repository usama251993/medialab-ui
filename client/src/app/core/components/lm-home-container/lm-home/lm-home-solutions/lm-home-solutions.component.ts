import { Component, OnInit, Input } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { LmHomeAssetsSolutionModel } from '@lm-core/models/lm-home.model'

@Component({
  selector: 'app-lm-home-solutions',
  templateUrl: './lm-home-solutions.component.html',
  styleUrls: ['./lm-home-solutions.component.scss']
})
export class LmHomeSolutionsComponent implements OnInit {
  assets$: BehaviorSubject<LmHomeAssetsSolutionModel>

  @Input()
  set assets(value: LmHomeAssetsSolutionModel) { this.assets$.next(value) };
  get assets(): LmHomeAssetsSolutionModel { return this.assets$.getValue() };

  constructor() {
    this.assets$ = new BehaviorSubject<LmHomeAssetsSolutionModel>(null)
  }

  ngOnInit(): void { }

}
