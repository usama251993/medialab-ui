import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { LmHomeAssetsSolutionModel } from '@lm-core/models/assets/lm-home.model'
import { NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-lm-home-solutions',
  templateUrl: './lm-home-solutions.component.html',
  styleUrls: ['./lm-home-solutions.component.scss']
})
export class LmHomeSolutionsComponent implements OnInit {

  private _assets$: BehaviorSubject<LmHomeAssetsSolutionModel>

  @Input()
  set assets(value: LmHomeAssetsSolutionModel) { this._assets$.next(value) };
  get assets(): LmHomeAssetsSolutionModel { return this._assets$.getValue() };

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() {
    this._assets$ = new BehaviorSubject<LmHomeAssetsSolutionModel>(null)
  }

  ngOnInit(): void { }

  navigate() {
    this.triggerNavigate$.emit({ path: [], extras: {} })
  }

}
