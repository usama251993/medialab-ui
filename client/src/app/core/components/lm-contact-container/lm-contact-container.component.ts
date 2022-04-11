import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { AppOptionModel } from '@shared/models/app-assets.model'
import { AppEndpointResponseModel } from '@shared/models/app-endpoint.model'

import { LmContactService } from '@lm-core/services/lm-contact/lm-contact.service'
import { LmContactModel } from '@lm-core/models/lm-contact/lm-contact.model'
import { LmContactAssetsModel } from '@lm-core/models/lm-contact/lm-contact-assets.model'

@Component({
  selector: 'app-lm-contact-container',
  template: `<app-lm-contact  [form]           = "form$       | async"
                              [assets]         = "assets$     | async"
                              [industry]       = "industry$   | async"
                              [country]        = "country$    | async"
                              [referredBy]     = "referredBy$ | async"
                              [services]       = "services$   | async"
                              [formGroup]      = "formGroup$  | async"
                              (triggerSubmit$) = "triggerSubmit($event)"> </app-lm-contact>`
})
export class LmContactContainerComponent implements OnInit {

  form$: Observable<LmContactModel>
  assets$: Observable<LmContactAssetsModel>
  country$: Observable<AppOptionModel[]>
  services$: Observable<AppOptionModel[]>
  referredBy$: Observable<AppOptionModel[]>
  industry$: Observable<AppOptionModel[]>
  formGroup$: Observable<FormGroup>

  constructor(
    private _contactService: LmContactService
  ) { }

  ngOnInit(): void {
    this.form$ = this._contactService.fetchFormAssets()
    this.assets$ = this._contactService.fetchContactAssets()
    this.formGroup$ = this._contactService.fetchFormGroup()
    this.country$ = this._contactService.fetchCountries()
    this.services$ = this._contactService.fetchServicies()
    this.referredBy$ = this._contactService.fetchReferredBy()
    this.industry$ = this._contactService.fetchIndustries()
  }

  triggerSubmit(_: LmContactModel) {
    this._contactService.triggerSubmit(_).pipe(
      tap((__: AppEndpointResponseModel<any>) => {
        this._contactService.showSnackbar({ message: 'Thank You for Details', button: { text: 'OK!', link: '' } })
      })
    ).subscribe()
  }
}
