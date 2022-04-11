import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Dictionary } from '@ngrx/entity'

import { LmFooterAssetsModel } from '@lm-core/models/lm-footer.model'
import { LmFooterService } from '@lm-core/services/lm-footer/lm-footer.service'

@Component({
  selector: 'app-lm-footer-container',
  template: `<app-lm-footer [assetsDict]     = "assetsDict$     | async"
                            [assetsEntityID] = "assetsEntityID$ | async"></app-lm-footer>`
})
export class LmFooterContainerComponent implements OnInit {

  assetsDict$: Observable<Dictionary<LmFooterAssetsModel>>
  assetsEntityID$: Observable<string>
  footerData$: Observable<LmFooterAssetsModel[]>

  constructor(
    private footerService: LmFooterService
  ) { }

  ngOnInit(): void {
    this.assetsDict$ = this.footerService.getAssetsDict()
    this.assetsEntityID$ = this.footerService.getEntityID()
  }

}
