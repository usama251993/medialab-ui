import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Observable, of } from 'rxjs'

import { AppOptionModel } from '@shared/models/app-assets.model'
import { AppEndpointRequestModel } from '@shared/models/app-endpoint.model'
import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'
import { AppSnackbarModel } from '@shared/models/app-snackbar.model'
import { COMMON_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

import { LmContactModel } from '@lm-core/models/lm-contact/lm-contact.model'
import { LmContactAssetsModel } from '@lm-core/models/lm-contact/lm-contact-assets.model'
import { LmCoreService } from '../lm-core.service'

@Injectable({
  providedIn: 'root'
})
export class LmContactService {

  formGroup: FormGroup
  assetsModel: any
  formModel: LmContactModel
  assets: LmContactAssetsModel

  private _industry: AppOptionModel[]
  private _services: AppOptionModel[]
  private _referredBy: AppOptionModel[]
  private _country: AppOptionModel[]


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
      referredBy: {
        name: 'referredBy',
        label: 'Referred By',
        placeholder: 'Referred By',
        type: 'select',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: false }
      },
      description: {
        name: 'description',
        label: 'Let us know how we can help you today',
        placeholder: '',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: false }
      },
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
      referredBy: [
        {
          value: this.formModel.referredBy.initialization.value,
          disabled: this.formModel.referredBy.initialization.disabled
        },
        []
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
      { value: 'Media AnalyFX', viewValue: 'Media AnalyFX' }
    ]

    this._referredBy = [
      { value: 'Search Engine', viewValue: 'Search Engine' },
      { value: 'Sales Person', viewValue: 'Sales Person' },
      { value: 'Trade Show / Conferences', viewValue: 'Trade Show / Conferences' },
      { value: 'Referred by Peer', viewValue: 'Referred by Peer' },
      { value: 'Referred by Industry Analyst', viewValue: 'Referred by Industry Analyst' },
      { value: 'Corporate Connect', viewValue: 'Corporate Connect' },
      { value: 'Others', viewValue: 'Others' }
    ]

  }

  fetchFormAssets(): Observable<LmContactModel> {
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

  fetchReferredBy(): Observable<AppOptionModel[]> {
    return of(this._referredBy)
  }

  fetchServicies(): Observable<AppOptionModel[]> {
    return of(this._services)
  }

  fetchContactAssets(): Observable<LmContactAssetsModel> {
    return of({ ...this.assets })
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
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.MAIL.SUBMITCONTACT
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody })
  }

  showSnackbar(_: AppSnackbarModel): void {
    this._coreService.showSnackbar(_)
  }
}
