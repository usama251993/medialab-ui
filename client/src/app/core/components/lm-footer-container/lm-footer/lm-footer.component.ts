import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { LmFooterAssetsModel } from '@lm-core/models/assets/lm-footer.model'
import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-lm-footer',
  templateUrl: './lm-footer.component.html',
  styleUrls: ['./lm-footer.component.scss']
})
export class LmFooterComponent implements OnInit {

  private _assets$: BehaviorSubject<LmFooterAssetsModel>

  @Input()
  set assets(value: LmFooterAssetsModel) { this._assets$.next(value) };
  get assets(): LmFooterAssetsModel { return this._assets$.getValue() };

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() {
    this._assets$ = new BehaviorSubject<LmFooterAssetsModel>(null)
  }

  ngOnInit(): void { }

  navigate(route: string) {
    this.triggerNavigate$.emit({ path: [route], extras: {} })
  }

}
