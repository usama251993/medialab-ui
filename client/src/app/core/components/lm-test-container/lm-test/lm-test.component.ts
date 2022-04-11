import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
import { FormGroup, FormBuilder, FormArray } from '@angular/forms'
import { BehaviorSubject } from 'rxjs'
import { MatSelectChange } from '@angular/material/select'

import { AppEndpointResponseModel } from '@shared/models/app-endpoint.model'

interface LmSelectModel {
  value: string
  viewValue: string
}

interface LmTestAppModel extends LmSelectModel {
  apis: LmTestAPIModel[],
  auth: {
    username: string
    password: string
  }
}

interface LmTestAPIModel extends LmSelectModel {
  headers: LmReqHeaderModel[],
  params: LmReqParamModel[],
  data: LmReqDataModel[]
}

interface LmReqModel {
  key: string
  value: string | boolean
}
interface LmReqHeaderModel extends LmReqModel { }
interface LmReqParamModel extends LmReqModel { }
interface LmReqDataModel extends LmReqModel { }

@Component({
  selector: 'app-lm-test',
  templateUrl: './lm-test.component.html',
  styleUrls: ['./lm-test.component.scss']
})
export class LmTestComponent implements OnInit {

  testForm: FormGroup
  headers: FormArray
  data: FormArray
  params: FormArray

  response$: BehaviorSubject<AppEndpointResponseModel>
  pending$: BehaviorSubject<boolean>

  @Output() submitForm$: EventEmitter<FormGroup>

  apps: LmTestAppModel[]
  apis: LmTestAPIModel[]
  reqHeaders: LmReqHeaderModel[]
  reqParams: LmReqParamModel[]
  reqData: LmReqDataModel[]

  @Input()
  set response(value: AppEndpointResponseModel) { this.response$.next(value) };
  get response(): AppEndpointResponseModel { return this.response$.getValue() };

  @Input()
  set bIsPending(value: boolean) { this.pending$.next(value) };
  get bIsPending(): boolean { return this.pending$.getValue() };

  constructor(
    private _fb: FormBuilder
  ) {
    this.response$ = new BehaviorSubject<AppEndpointResponseModel>({
      data: null,
      error: null,
      status: 0
    })
    this.pending$ = new BehaviorSubject<boolean>(false)
    this.submitForm$ = new EventEmitter<FormGroup>()
  }

  ngOnInit(): void {

    this.apps = [
      {
        value: 'wso2', viewValue: 'WSO2',
        apis: [
          {
            value: 'test', viewValue: 'Test',
            headers: [],
            params: [],
            data: []
          },
          {
            value: 'login', viewValue: 'Authenticate User',
            headers: [
              { key: 'content-type', value: 'application/json' }
            ],
            params: [],
            data: []
          },
          {
            value: 'getUserDetails', viewValue: 'Get User Details',
            headers: [
              { key: 'content-type', value: 'application/json' }
            ],
            params: [],
            data: []
          }
        ],
        auth: { username: 'usama.ansari', password: 'Password#123' }
      },
      {
        value: 'kb', viewValue: 'KillBill',
        apis: [
          {
            value: 'test', viewValue: 'Test',
            headers: [],
            params: [],
            data: []
          },
          {
            value: 'createAccount', viewValue: 'Create Account',
            headers: [
              { key: 'X-Killbill-CreatedBy', value: 'MediaLabsUI' },
              { key: 'Cookie', value: 'BCSI-CS-3cdb396b518b1e07=1' }
            ],
            params: [],
            data: []
          },
          {
            value: 'getAccountDetails', viewValue: 'View Account Details',
            headers: [
              { key: 'accept', value: 'application/json' },
              { key: 'X-Killbill-ApiKey', value: 'DisneyImaginery' },
              { key: 'X-Killbill-CreatedBy', value: 'MediaLabsUI' },
              { key: 'X-Killbill-ApiSecret', value: 'medialab123' },
              { key: 'Cookie', value: 'BCSI-CS-1fda5118a876df55=1' }
            ],
            params: [
              { key: 'externalKey', value: 'DisneyImaginery-john@disney.com' },
              { key: 'accountWithBalance', value: false },
              { key: 'accountWithBalanceAndCBA', value: false },
              { key: 'audit', value: 'NONE' }
            ],
            data: []
          },
          {
            value: 'getTenantDetails', viewValue: 'View Tenant Details',
            headers: [
              { key: 'accept', value: 'application/json' },
              { key: 'X-Killbill-CreatedBy', value: 'MediaLabsUI' },
              { key: 'X-Killbill-ApiSecret', value: 'medialab123' }
            ],
            params: [
              { key: 'apiKey', value: '' }
            ],
            data: []
          },
          {
            value: 'getPushNotification', viewValue: 'Publish Push Notification',
            headers: [
              { key: 'X-Killbill-CreatedBy', value: 'MediaLabsUI' }
            ],
            params: [],
            data: []
          }
        ],
        auth: {
          username: 'admin',
          password: 'password'
        }
      }
    ]

    this.testForm = this._fb.group({
      app: [{ value: '', disabled: false }],
      api: [{ value: '', disabled: false }],
      headers: this._fb.array([this.createHeaderGroup({ key: '', value: '' })]),
      auth: this._fb.group({
        username: [{ value: '', disabled: false }],
        password: [{ value: '', disabled: false }],
      }),
      params: this._fb.array([this.createHeaderGroup({ key: '', value: '' })]),
      data: this._fb.array([]),
      route: [{ value: '', disabled: false }]
    })

    this.headers = <FormArray>this.testForm.get('headers')
    this.data = <FormArray>this.testForm.get('data')
    this.params = <FormArray>this.testForm.get('params')
  }

  submitForm(event: Event): void {
    this.submitForm$.emit(this.testForm.value)
  }

  addHeader(): void {
    this.headers = <FormArray>this.testForm.get('headers')
    this.headers.push(this.createHeaderGroup({ key: '', value: '' }))
  }

  addData(): void {
    this.data = <FormArray>this.testForm.get('data')
    this.data.push(this.createDataGroup({ key: '', value: '' }))
  }

  addParam(): void {
    this.params = <FormArray>this.testForm.get('params')
    this.params.push(this.createParamGroup({ key: '', value: '' }))
  }

  createHeaderGroup(init: LmReqModel): FormGroup {
    return this._fb.group({
      key: [{ value: init.key, disabled: false }],
      value: [{ value: init.value, disabled: false }]
    })
  }

  createDataGroup(init: LmReqModel): FormGroup {
    return this._fb.group({
      key: [{ value: init.key, disabled: false }],
      value: [{ value: init.value, disabled: false }]
    })
  }

  createParamGroup(init: LmReqModel): FormGroup {
    return this._fb.group({
      key: [{ value: init.key, disabled: false }],
      value: [{ value: init.value, disabled: false }]
    })
  }

  removeHeader(index: number): void {
    this.headers.removeAt(index)
  }

  removeData(index: number): void {
    this.data.removeAt(index)
  }

  removeParam(index: number): void {
    this.params.removeAt(index)
  }

  populateAPI(event: MatSelectChange): void {
    let selectedApp = this.apps.find(_ => _.value === event.value)
    this.apis = selectedApp.apis
    this.testForm.get('auth').patchValue(selectedApp.auth)
  }

  setupRequest(event: MatSelectChange): void {
    this.setupHeaders(event.value)
    this.setupParams(event.value)
    this.setupData(event.value)
  }

  setupHeaders(selectedApi: string) {
    this.headers.clear()
    this.reqHeaders = this.apis.find(_ => _.value === selectedApi).headers
    this.reqHeaders.forEach(_ => this.headers.push(this.createHeaderGroup(_)))
    this.headers.patchValue(this.reqHeaders)
  }

  setupParams(selectedApi: string) {
    this.params.clear()
    this.reqParams = this.apis.find(_ => _.value === selectedApi).params
    this.reqParams.forEach(_ => this.params.push(this.createParamGroup(_)))
    this.params.patchValue(this.reqParams)
  }

  setupData(selectedApi: string) {
    this.data.clear()
    this.reqData = this.apis.find(_ => _.value === selectedApi).data
    this.reqData.forEach(_ => this.data.push(this.createParamGroup(_)))
    this.data.patchValue(this.reqData)
  }

}
