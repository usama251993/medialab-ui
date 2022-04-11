import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Observable, of, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

import { AppEndpointRequestModel } from '@shared/models/app-endpoint.model'
import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'
import { COMMON_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

import { LmPaymentMethodAssetsModel } from '@lm-core/models/lm-payment-method/lm-payment-method-assets.model'
import { LmCardModel } from '@lm-core/models/lm-kb.model'

@Injectable({
  providedIn: 'root'
})
export class LmPaymentMethodService {

  assetsModel: any
  formModel: LmCardModel
  formGroup: FormGroup
  assets: LmPaymentMethodAssetsModel

  constructor(
    private _fb: FormBuilder,
    private _endpointService: AppEndpointService,
  ) {
    this.formModel = {
      name: {
        name: 'name',
        label: 'Name On The Card',
        placeholder: 'Name',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      number: {
        name: 'number',
        label: 'Card Number',
        placeholder: 'XXXXXXXXXXXXXXXX',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      exp_month: {
        name: 'exp_month',
        label: 'Expiry Month',
        placeholder: 'Expiry Month',
        type: 'number',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      cvc: {
        name: 'cvc',
        label: 'CVC Code',
        placeholder: 'XXX',
        type: 'password',
        initialization: { value: '', disabled: false },
        validation: {
          bIsMandatory: true
        }
      },
      exp_year: {
        name: 'exp_year',
        label: 'Expiry Year',
        placeholder: 'Expiry Year',
        type: 'number',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: true }
      },
      address_line1: {
        name: 'address_line1',
        label: 'Address Line 1',
        placeholder: 'Address Line 1',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: false }
      },
      address_line2: {
        name: 'address_line2',
        label: 'Address Line 1',
        placeholder: 'Address Line 1',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: false }
      },
      address_city: {
        name: 'address_city',
        label: 'Address City',
        placeholder: 'Address City',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: false }
      },
      address_state: {
        name: 'address_state',
        label: 'Address State',
        placeholder: 'Address State',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: false }
      },
      address_zip: {
        name: 'address_zip',
        label: 'Address Zip',
        placeholder: 'Address Zip',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: false }
      },
      address_country: {
        name: 'address_country',
        label: 'Address Country',
        placeholder: 'Address Country',
        type: 'text',
        initialization: { value: '', disabled: false },
        validation: { bIsMandatory: false }
      }
    }

    this.formGroup = this._fb.group({
      name: [
        {
          value: this.formModel.name.initialization.value,
          disabled: this.formModel.name.initialization.disabled
        },
        [Validators.required]
      ],
      number: [
        {
          value: this.formModel.number.initialization.value,
          disabled: this.formModel.number.initialization.disabled
        },
        [Validators.required]
      ],
      exp_month: [
        {
          value: this.formModel.exp_month.initialization.value,
          disabled: this.formModel.exp_month.initialization.disabled
        },
        [Validators.required]
      ],
      cvc: [
        {
          value: this.formModel.cvc.initialization.value,
          disabled: this.formModel.cvc.initialization.disabled
        },
        [Validators.required]
      ],
      exp_year: [
        {
          value: this.formModel.exp_year.initialization.value,
          disabled: this.formModel.exp_year.initialization.disabled
        },
        [Validators.required]
      ],
      address_line1: [
        {
          value: this.formModel.address_line1.initialization.value,
          disabled: this.formModel.address_line1.initialization.disabled
        },
        []
      ],
      address_line2: [
        {
          value: this.formModel.address_line2.initialization.value,
          disabled: this.formModel.address_line2.initialization.disabled
        },
        []
      ],
      address_city: [
        {
          value: this.formModel.address_city.initialization.value,
          disabled: this.formModel.address_city.initialization.disabled
        },
        []
      ],
      address_state: [
        {
          value: this.formModel.address_state.initialization.value,
          disabled: this.formModel.address_state.initialization.disabled
        },
        []
      ],
      address_zip: [
        {
          value: this.formModel.address_zip.initialization.value,
          disabled: this.formModel.address_zip.initialization.disabled
        },
        []
      ],
      address_country: [
        {
          value: this.formModel.address_country.initialization.value,
          disabled: this.formModel.address_country.initialization.disabled
        },
        []
      ]
    })

    this.assets = {
      buttons: {
        text: 'Add',
        link: null,
        appearance: 'raised',
        color: 'primary',
        type: 'submit',
        disabled: false
      }
    }

  }

  fetchAssets(): Observable<LmPaymentMethodAssetsModel> {
    return of({ ...this.assets })
  }

  fetchFormAssets(): Observable<LmCardModel> {
    return of({ ...this.formModel })
  }

  fetchFormGroup(): Observable<FormGroup> {
    return of(this.formGroup)
  }

  addToStripeAccount(_: { card: any }): Observable<any> {
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.STRIPE,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.STRIPE.ADDCARD
    }

    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)

    const reqBody: AppEndpointRequestModel = {
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      auth: {
        username: "sk_test_51HFExzB8rjCGw0o1uH68EfHLNhi1vznUq6k14PmdMtNc4b3CpPmpTsADMpEM6ubKnon6Uyx47hZDPQqxArM6W84G00y9Gj65w9"
      },
      params: null,
      data: {
        // "card[name]": _["name"],
        "card[exp_month]": _["exp_month"],
        "card[exp_year]": _["exp_year"],
        "card[number]": _["number"],
        "card[cvc]": _["cvc"]
      },
      route: null
    }

    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }
}
