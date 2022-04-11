import { Component, OnInit, Input } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Dictionary } from '@ngrx/entity'

import { LmFooterAssetsModel } from '@lm-core/models/lm-footer.model'

@Component({
  selector: 'app-lm-footer',
  templateUrl: './lm-footer.component.html',
  styleUrls: ['./lm-footer.component.scss']
})
export class LmFooterComponent implements OnInit {

  data$: BehaviorSubject<Dictionary<LmFooterAssetsModel>>

  @Input()
  set assetsDict(value: Dictionary<LmFooterAssetsModel>) { this.data$.next(value) };
  get assetsDict(): Dictionary<LmFooterAssetsModel> { return this.data$.getValue() };

  @Input()
  assetsEntityID: string

  constructor() {
    this.data$ = new BehaviorSubject<Dictionary<LmFooterAssetsModel>>(null)
  }

  ngOnInit(): void { }

  navigate(route: string) { }

}
