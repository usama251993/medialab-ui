import { Component, OnInit } from '@angular/core'
import { AppOptionModel } from '@shared/models/app-assets.model'
import { Observable } from 'rxjs'
import { StAppService } from '@st-core/services/application-ui/st-application/st-app.service'

@Component({
  selector: 'app-st-application-container',
  template: `<app-st-application [appList]  = "appList$ | async"
                                 (formSubmit$) = "formSubmit($event)"></app-st-application>`
})

export class StApplicationContainerComponent implements OnInit {

  appList$: Observable<any>

  constructor(
    private _appService: StAppService) { }

  ngOnInit(): void {
    this.appList$ = this._appService.fetchApps$()
  }

  formSubmit(formData: FormData) {
    this._appService.handleForm(formData)
  }

}
