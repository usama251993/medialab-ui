import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Observable, of } from 'rxjs'

import { AppOptionModel } from '@shared/models/app-assets.model'
import { AppEndpointRequestModel } from '@shared/models/app-endpoint.model'
import { AppSnackbarModel } from '@shared/models/app-snackbar.model'
import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'
import { COMMON_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

import { LmFeedbackModel } from '@lm-core/models/lm-feedback/lm-feedback.model'
import { LmCoreService } from '../lm-core.service'
import { LmFeedbackAssetsModel } from '@lm-core/models/lm-feedback/lm-feedback-assets.model'

@Injectable({
  providedIn: 'root'
})
export class LmFeedbackService {

  formModel: LmFeedbackModel
  formGroup: FormGroup
  private _industry: AppOptionModel[]
  private _services: AppOptionModel[]
  private _country: AppOptionModel[]
  assets: LmFeedbackAssetsModel

  constructor(
    private _fb: FormBuilder,
    private _coreService: LmCoreService,
    private _endpointService: AppEndpointService
  ) {
    this.assets = {
      buttons: {
        text: 'Submit',
        link: null,
        appearance: 'stroked',
        color: 'primary',
        type: 'submit',
        disabled: false
      }
    }
    this.formModel = {
      firstName: {
        name: 'firstName',
        label: 'First Name',
        placeholder: 'First Name',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      lastName: {
        name: 'lastName',
        label: 'Last Name',
        placeholder: 'Last Name',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      emailAddress: {
        name: 'emailAddress',
        label: 'Email Address',
        placeholder: 'Email Address',
        type: 'email',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      contactNumber: {
        name: 'contactNumber',
        label: 'Contact Number',
        placeholder: 'Contact Number',
        type: 'number',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      companyName: {
        name: 'companyName',
        label: 'Company Name',
        placeholder: 'Company Name',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      country: {
        name: 'country',
        label: 'Country',
        placeholder: 'Country',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: false }
      },
      industry: {
        name: 'industry',
        label: 'Industry',
        placeholder: 'Industry',
        type: 'select',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: false }
      },
      services: {
        name: 'services',
        label: 'Services/Technologies',
        placeholder: 'Services/Technologies',
        type: 'select',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      description: {
        name: 'description',
        label: 'Let us know you idea',
        placeholder: '',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: false }
      }
    }

    this.formGroup = this._fb.group({
      firstName: [
        {
          value: this.formModel.firstName.initialization.value,
          disabled: this.formModel.firstName.initialization.disabled
        },
        [Validators.required]
      ],
      lastName: [
        {
          value: this.formModel.lastName.initialization.value,
          disabled: this.formModel.lastName.initialization.disabled
        },
        [Validators.required]
      ],
      emailAddress: [
        {
          value: this.formModel.emailAddress.initialization.value,
          disabled: this.formModel.emailAddress.initialization.disabled
        },
        [Validators.required, Validators.email]
      ],
      contactNumber: [
        {
          value: this.formModel.contactNumber.initialization.value,
          disabled: this.formModel.contactNumber.initialization.disabled
        },
        [Validators.required]
      ],
      country: [
        {
          value: this.formModel.country.initialization.value,
          disabled: this.formModel.country.initialization.disabled
        },
        []
      ],
      companyName: [
        {
          value: this.formModel.companyName.initialization.value,
          disabled: this.formModel.companyName.initialization.disabled
        },
        [Validators.required]
      ],
      industry: [
        {
          value: this.formModel.industry.initialization.value,
          disabled: this.formModel.industry.initialization.disabled
        },
        []
      ],
      services: [
        {
          value: this.formModel.services.initialization.value,
          disabled: this.formModel.services.initialization.disabled
        },
        [Validators.required]
      ],
      description: [
        {
          value: this.formModel.description.initialization.value,
          disabled: this.formModel.description.initialization.disabled
        },
        []
      ]
    })

    this._industry = [
      { value: 'Banking & Finance', viewValue: 'Banking & Finance' },
      { value: 'Insurance', viewValue: 'Insurance' },
      { value: 'Oil & Gas', viewValue: 'Oil & Gas' },
      { value: 'Utilities', viewValue: 'Utilities' },
      { value: 'CPG', viewValue: 'CPG' },
      { value: 'Retail', viewValue: 'Retail' },
      { value: 'Logistics', viewValue: 'Logistics' },
      { value: 'Hi Tech', viewValue: 'Hi Tech' },
      { value: 'Life Sciences', viewValue: 'Life Sciences' },
      { value: 'Healthcare', viewValue: 'Healthcare' },
      { value: 'Media & Entertainment', viewValue: 'Media & Entertainment' },
      { value: 'Process Manufacturing', viewValue: 'Process Manufacturing' },
      { value: 'Automotive & Aerospace', viewValue: 'Automotive & Aerospace' },
      { value: 'Industrial Manufacturing', viewValue: 'Industrial Manufacturing' },
      { value: 'Engineering & Construction', viewValue: 'Engineering & Construction' }
    ]

    this._country = [
      { value: 'US', viewValue: 'United States of America' },
    ]

    this._services = [
      { value: 'Content DeDuplication', viewValue: 'Content DeDuplication' },
      { value: 'Perceptual Hashing', viewValue: 'Perceptual Hashing' },
      { value: 'Media AnalyFX', viewValue: 'Media AnalyFX' },
      { value: 'Others', viewValue: 'Others' }
    ]
  }

  fetchFormAssets(): Observable<LmFeedbackModel> {
    return of({ ...this.formModel })
  }

  fetchFormGroup(): Observable<FormGroup> {
    return of(this.formGroup)
  }

  fetchIndustries(): Observable<AppOptionModel[]> {
    return of(this._industry)
  }

  fetchCountries(): Observable<AppOptionModel[]> {
    return of(this._country)
  }

  fetchServicies(): Observable<AppOptionModel[]> {
    return of(this._services)
  }

  triggerSubmit(_): Observable<any> {
    const reqBody: AppEndpointRequestModel = {
      headers: { 'Content-Type': 'application/json' },
      auth: null,
      params: null,
      data: { ..._ },
      route: null
    }
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.MAIL,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.MAIL.SUBMITFEEDBACK
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody })
  }

  showSnackbar(_: AppSnackbarModel): void {
    this._coreService.showSnackbar(_)
  }

  fetchFeedbackAssets(): Observable<LmFeedbackAssetsModel> {
    return of({ ...this.assets })
  }
}
