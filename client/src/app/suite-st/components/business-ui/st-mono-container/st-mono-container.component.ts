import { Component, OnInit } from '@angular/core'
import { StMonoService } from '@st-core/services/business-ui/st-mono/st-mono.service'
import { CORE_ROUTES } from '@st-core/st-core.routes'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-st-mono-container',
  template: `<app-st-mono  [assets] = "assets$ | async"
                            (triggerNavigate$) = "navigate()"> </app-st-mono>`
})
export class StMonoContainerComponent implements OnInit {

  assets$: Observable<any>

  constructor(
    private _monoService: StMonoService
  ) { }

  ngOnInit(): void {
    this._monoService.fetchAssets()
    this.assets$ = this._monoService.watchAssets$()
  }

  navigate() {
    this._monoService.navigate({ path: [CORE_ROUTES.CONTACT], extras: {} })
  }
}
