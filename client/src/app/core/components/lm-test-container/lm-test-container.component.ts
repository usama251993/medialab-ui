import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import * as fromEndpoint from '@shared/models/app-endpoint.model'
import { AppEndpointService } from '@shared/facade/services/app-endpoint/app-endpoint.service'

@Component({
  selector: 'app-lm-test-container',
  template: `<app-lm-test [response]    = "response$   | async"
                          [bIsPending]  = "bIsPending"
                          (submitForm$) = "processFormData($event)"></app-lm-test>`
})
export class LmTestContainerComponent implements OnInit {

  bIsPending: boolean

  response$: Observable<fromEndpoint.AppEndpointResponseModel>

  constructor(
    private _endpoint: AppEndpointService
  ) {
    this.bIsPending = false
  }

  ngOnInit(): void {
  }

  processFormData(formData: FormData) {

    this.bIsPending = true
    let endpoint = `http://localhost:3000/api/${formData['app']}/${formData['api']}`
    let reqBody: fromEndpoint.AppEndpointRequestModel = {
      auth: { username: '', password: '' },
      headers: {},
      params: {},
      data: {},
      route: ''
    }

    reqBody.auth = { ...formData['auth'], password: btoa(formData['auth'].password) }
    reqBody.headers = setupRequest(formData['headers'])
    reqBody.params = setupRequest(formData['params'])
    reqBody.data = setupRequest(formData['data'])

    function setupRequest(parameterList) {
      return parameterList.reduce((_, $) => ({ ..._, [$.key]: $.value }), {})
    }

    this.response$ = this._endpoint.triggerPostRequest({ endpoint, reqBody })
    this.response$.pipe(
      tap(_ => console.log(_))
    ).subscribe(
      _ => {
        this.bIsPending = false
        console.log('Results retrieved successfully')
      },
      __ => {
        this.bIsPending = false
        console.log('Error retrieving results')
      }
    )

    // getTenantDetails headers
    // 'accept': 'application/json',
    // 'X-Killbill-ApiKey': 'Disney',
    // 'X-Killbill-ApiSecret': 'medialab123',
    // 'Cookie': 'BCSI-CS-5f9302ec8120e41e=1; BCSI-CS-af5bec53686655c6=1'

    // getAccountDetails headers
    // 'accept': 'application/json',
    // 'X-Killbill-ApiKey': 'DisneyImaginery',
    // 'X-Killbill-ApiSecret': 'medialab123'

    // getAccountDetails params
    // externalKey: 'DisneyImaginery-john@disney.com'

    // createAccount headers
    //   'accept': 'application/json',
    //   'X-Killbill-ApiKey': 'DisneyImaginery',
    //   'X-Killbill-ApiSecret': 'medialab123'

    // createAccount payload
    // 'name': 'Usama',
    // 'externalKey': 'DisneyImaginery-usama@disney.com',
    // 'email': 'usama@disney.com',
    // 'company': 'DisneyImaginery',
    // 'country': 'IN',
    // 'currency': 'USD' // can be added later during payments
  }

}


