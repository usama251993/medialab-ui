import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { AppOptionModel } from '@shared/models/app-assets.model'
import { AppEndpointResponseModel } from '@shared/models/app-endpoint.model'

import { LmFeedbackService } from '@lm-core/services/lm-feedback/lm-feedback.service'
import { LmFeedbackModel } from '@lm-core/models/lm-feedback/lm-feedback.model'
import { LmFeedbackAssetsModel } from '@lm-core/models/lm-feedback/lm-feedback-assets.model'

@Component({
  selector: 'app-lm-feedback-container',
  template: `<app-lm-feedback [form]           = "form$      | async"
                              [assets]         = "assets$    | async"
                              [industry]       = "industry$  | async"
                              [country]        = "country$   | async"
                              [services]       = "services$  | async"
                              [formGroup]      = "formGroup$ | async"
                              (triggerSubmit$) = "triggerSubmit($event)"></app-lm-feedback>`
})

export class LmFeedbackContainerComponent implements OnInit {

  form$: Observable<LmFeedbackModel>
  assets$: Observable<LmFeedbackAssetsModel>
  country$: Observable<AppOptionModel[]>
  services$: Observable<AppOptionModel[]>
  industry$: Observable<AppOptionModel[]>
  formGroup$: Observable<FormGroup>

  constructor(
    private _feedbackService: LmFeedbackService,
  ) { }

  ngOnInit(): void {
    this.form$ = this._feedbackService.fetchFormAssets()
    this.assets$ = this._feedbackService.fetchFeedbackAssets()
    this.formGroup$ = this._feedbackService.fetchFormGroup()
    this.country$ = this._feedbackService.fetchCountries()
    this.services$ = this._feedbackService.fetchServicies()
    this.industry$ = this._feedbackService.fetchIndustries()
  }

  triggerSubmit(_: any) {
    this._feedbackService.triggerSubmit(_).pipe(
      tap((__: AppEndpointResponseModel<any>) => {
        this._feedbackService.showSnackbar({ message: 'Thank You for Idea', button: { text: 'OK!', link: '' } })
      })
    ).subscribe()
  }

}
