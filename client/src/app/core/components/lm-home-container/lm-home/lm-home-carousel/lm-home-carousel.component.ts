import { Component, OnInit, Input } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { LmHomeAssetsCarouselModel } from '@lm-core/models/lm-home.model'

@Component({
  selector: 'app-lm-home-carousel',
  templateUrl: './lm-home-carousel.component.html',
  styleUrls: ['./lm-home-carousel.component.scss']
})
export class LmHomeCarouselComponent implements OnInit {

  assets$: BehaviorSubject<LmHomeAssetsCarouselModel>

  @Input()
  set assets(value: LmHomeAssetsCarouselModel) { this.assets$.next(value) };
  get assets(): LmHomeAssetsCarouselModel { return this.assets$.getValue() };

  constructor() {
    this.assets$ = new BehaviorSubject<LmHomeAssetsCarouselModel>(null)
  }

  ngOnInit(): void { }

}
