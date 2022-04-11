import { Injectable } from '@angular/core'

import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

import { AppEndpointRequestModel, AppEndpointResponseModel } from '@shared/models/app-endpoint.model'
import { AppEndpointService } from '@shared/services/app-endpoint/app-endpoint.service'
import { COMMON_ENDPOINT_CONSTANTS } from '@shared/constants/app-endpoint.constants'

import { LmInvoiceModel, LmKBAccountModel, LmKBAccountRequestModel, LmKBPaymentMethodModel, LmKBPlanModel } from '@lm-core/models/lm-kb.model'
import { LmCoreService } from '../lm-core.service'

@Injectable({
  providedIn: 'root'
})
export class LmKillbillService {

  constructor(
    private _endpointService: AppEndpointService,
    private _coreService: LmCoreService
  ) { }

  createKBAccount(_: LmKBAccountRequestModel): Observable<AppEndpointResponseModel<any>> {
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.KB,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.KB.CREATEACCOUNT
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-Killbill-ApiKey': 'Sony',
        'X-Killbill-ApiSecret': 'medialab123',
        'X-Killbill-CreatedBy': 'MediaLab'
      },
      auth: {
        username: 'admin',
        password: 'password'
      },
      params: null,
      data: { ..._ },
      route: null
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  fetchBasePlans(): Observable<LmKBPlanModel[]> {
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.KB,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.KB.PLANS
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-Killbill-ApiKey': 'Sony',
        'X-Killbill-ApiSecret': 'medialab123'
      },
      auth: {
        username: 'admin',
        password: 'password'
      },
      params: null,
      data: null,
      route: null
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  getAccountDetails(_: string): Observable<LmKBAccountModel> {
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.KB,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.KB.ACCOUNT
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-Killbill-ApiKey': 'Sony',
        'X-Killbill-ApiSecret': 'medialab123'
      },
      auth: {
        username: 'admin',
        password: 'password'
      },
      params: {
        externalKey: _,
        accountWithBalance: false,
        accountWithBalanceAndCBA: false,
        audit: 'NONE'
      },
      data: null,
      route: null
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  getInvoices(_: string): Observable<LmInvoiceModel[]> {
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.KB,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.KB.INVOICES
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-Killbill-ApiKey': 'Sony',
        'X-Killbill-ApiSecret': 'medialab123'
      },
      auth: {
        username: "admin",
        password: "password"
      },
      params: {
        includeVoidedInvoices: false,
        withMigrationInvoices: false,
        unpaidInvoicesOnly: false,
        audit: "NONE"
      },
      data: null,
      route: _
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  getPaymentMethodsForAccount(_: string): Observable<LmKBPaymentMethodModel[]> {
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.KB,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.KB.FETCHPAYMENTMETHOD
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-Killbill-ApiKey': 'Sony',
        'X-Killbill-ApiSecret': 'medialab123'
      },
      auth: {
        username: 'admin',
        password: 'password'
      },
      params: {
        withPluginInfo: false,
        includedDeleted: false,
        audit: 'NONE'
      },
      data: null,
      route: _
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  createAccountTags(_: string): Observable<LmKBPlanModel[]> {
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.KB,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.KB.CREATEACCOUNTTAGS
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-Killbill-ApiKey': 'Sony',
        'X-Killbill-ApiSecret': 'medialab123',
        'X-Killbill-CreatedBy': 'MediaLab'
      },
      auth: {
        username: 'admin',
        password: 'password'
      },
      params: null,
      data: null,
      route: _
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  createSubscription(_: any): Observable<any> {
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.KB,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.KB.CREATESUBSCRIPTION
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-Killbill-ApiKey': 'Sony',
        'X-Killbill-ApiSecret': 'medialab123',
        'X-Killbill-CreatedBy': 'MediaLab'
      },
      auth: {
        username: 'admin',
        password: btoa('password')
      },
      params: null,
      data: null,
      route: null
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  addPaymentMethod(_: string): Observable<any> {
    console.log(_)
    const endpointConfig = {
      context: COMMON_ENDPOINT_CONSTANTS.CONTEXT.KB,
      endpoint: COMMON_ENDPOINT_CONSTANTS.ENDPOINT.KB.ADDPAYMENTMETHOD
    }
    const endpoint: string = this._endpointService.getEndpoint(endpointConfig)
    let reqBody: AppEndpointRequestModel = {
      headers: {
        'X-Killbill-ApiKey': 'Sony',
        'X-Killbill-ApiSecret': 'medialab123',
        'X-Killbill-CreatedBy': 'MediaLab'
      },
      auth: {
        username: 'admin',
        password: 'password'
      },
      params: {
        isDefault: true,
        payAllUnpaidInvoices: false,
        pluginProperty: 'token=' + _
      },
      data: {
        'pluginName': 'killbill-stripe'
      },
      route: localStorage.getItem('accountId')
    }
    return this._endpointService.triggerPostRequest<any>({ endpoint, reqBody }).pipe(
      map(_ => _.data),
      catchError(__ => throwError(__))
    )
  }

  storeAccountId(_: { accountId: string }): void {
    this._coreService.setAccountId(_)
  }

  fetchAccountId(): Observable<string> {
    return this._coreService.watchAccountId()
  }

}
