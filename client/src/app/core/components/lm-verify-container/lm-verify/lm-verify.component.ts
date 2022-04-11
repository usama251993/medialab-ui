import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { ParamMap } from '@angular/router'

import { BehaviorSubject } from 'rxjs'

import { INITIAL_COMPONENT_FLAGS, LmVerifyAssetsModel, LmVerifyComponentFlags } from '@lm-core/models/lm-verify/lm-verify.model'
import { LmWSO2ErrorResponseModel } from '@lm-core/models/lm-wso2-error.model'

const _USER: string = 'username'
const _TOKEN: string = 'token'
const _REALM: string = 'realm'

@Component({
  selector: 'app-lm-verify',
  templateUrl: './lm-verify.component.html',
  styleUrls: ['./lm-verify.component.scss']
})
export class LmVerifyComponent implements OnInit {

  private _assets$: BehaviorSubject<LmVerifyAssetsModel> = new BehaviorSubject<LmVerifyAssetsModel>(null)
  private _user$: BehaviorSubject<{ username: string, realm: string }> = new BehaviorSubject<{ username: string, realm: string }>(null)
  private _queryParams$: BehaviorSubject<ParamMap> = new BehaviorSubject<ParamMap>(null)
  private _error$: BehaviorSubject<LmWSO2ErrorResponseModel> = new BehaviorSubject<LmWSO2ErrorResponseModel>(null)

  private _componentFlags$: BehaviorSubject<LmVerifyComponentFlags> = new BehaviorSubject<LmVerifyComponentFlags>(INITIAL_COMPONENT_FLAGS)

  @Input()
  set assets(value: LmVerifyAssetsModel) { this._assets$.next(value) }
  get assets(): LmVerifyAssetsModel { return this._assets$.getValue() }

  @Input()
  set user(value: { username: string, realm: string }) { this._user$.next(value) }
  get user(): { username: string, realm: string } { return this._user$.getValue() }

  @Input()
  set queryParams(value: ParamMap) { this._queryParams$.next(value) }
  get queryParams(): ParamMap { return this._queryParams$.getValue() }

  @Input()
  set error(value: LmWSO2ErrorResponseModel) { this._error$.next(value) }
  get error(): LmWSO2ErrorResponseModel { return this._error$.getValue() }

  @Input()
  set componentFlags(value: LmVerifyComponentFlags) { this._componentFlags$.next(value) }
  get componentFlags(): LmVerifyComponentFlags { return this._componentFlags$.getValue() }

  @Output() triggerResendCode$: EventEmitter<{ username: string, realm: string }> = new EventEmitter<{ username: string, realm: string }>()
  @Output() triggerVerification$: EventEmitter<{ token: string }> = new EventEmitter<{ token: string }>()
  @Output() triggerComponentFlagChange$: EventEmitter<LmVerifyComponentFlags> = new EventEmitter<LmVerifyComponentFlags>()

  constructor() { }

  ngOnInit(): void {
    this._queryParams$.subscribe(_ => {
      console.groupCollapsed('[LM Verify] queryParams$ subscription')

      const bIsVerifying: boolean = !!_.get(_USER) && !!_.get(_REALM)
      const bIsRegistering: boolean = !!_.get(_TOKEN)

      if (bIsVerifying) {
        console.groupEnd()
        this.triggerComponentFlagChange$.emit({
          ...INITIAL_COMPONENT_FLAGS,
          resend: {
            ...INITIAL_COMPONENT_FLAGS.resend,
            visible: true
          }
        })
        return
      }

      if (bIsRegistering) {
        console.groupEnd()
        this.triggerComponentFlagChange$.emit({
          ...INITIAL_COMPONENT_FLAGS,
          verify: {
            ...INITIAL_COMPONENT_FLAGS.verify,
            visible: true
          }
        })
        return
      }

      console.groupEnd()
      this.triggerComponentFlagChange$.emit({ ...INITIAL_COMPONENT_FLAGS })
    })
  }

  resendCode(_: { username: string, realm: string }): void {
    this.triggerResendCode$.emit(_)
  }

  verifyCode(): void {
    const token: string = this.queryParams.get(_TOKEN)
    if (!!token) this.triggerVerification$.emit({ token })
    else this.triggerVerification$.emit({ token: null })
  }
}
