import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { LmHomeAssetsCookiebarModel } from '@lm-core/models/lm-home.model'

@Component({
  selector: 'app-lm-home-cookiebar',
  templateUrl: './lm-home-cookiebar.component.html',
  styleUrls: ['./lm-home-cookiebar.component.scss']
})
export class LmHomeCookiebarComponent implements OnInit {

  assets$: BehaviorSubject<LmHomeAssetsCookiebarModel>

  @Input()
  set cookiebar(value: LmHomeAssetsCookiebarModel) { this.assets$.next(value) };
  get cookiebar(): LmHomeAssetsCookiebarModel { return this.assets$.getValue() };

  @Output() triggerDismissCookiebar$: EventEmitter<void>

  constructor() {
    this.assets$ = new BehaviorSubject<LmHomeAssetsCookiebarModel>(null)
    this.triggerDismissCookiebar$ = new EventEmitter<void>()
  }

  ngOnInit(): void { }

  triggerDismissCookiebar() {
    this.triggerDismissCookiebar$.emit()
  }

}
