import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Observable } from 'rxjs'
import { Dictionary } from '@ngrx/entity'

import { LmLoginRequestModel } from '@shared/models/lm-auth.model'
import { LmLoginAssetsModel } from '@lm-core/models/lm-login.model'
import { LmLoginService } from '@lm-core/services/lm-login/lm-login.service'
import { LmAuthService } from '@lm-core/services/lm-auth/lm-auth.service'

@Component({
  selector: 'app-lm-login-container',
  template: `<app-lm-login [assetsDict]      = "assetsDict$      | async"
                           [assetsEntityID]  = "assetsEntityID$  | async"
                           [formDict]        = "formDict$        | async"
                           [formEntityID]    = "formEntityID$    | async"
                           [formGroup]       = "formGroup$       | async"
                           [contextEntityID] = "contextEntityID$ | async"
                           (triggerLogin$)   = "triggerLogin($event)"
                           (gotoSignup$)     = "gotoSignup()"></app-lm-login>`
})
export class LmLoginContainerComponent implements OnInit {

  assetsDict$: Observable<Dictionary<LmLoginAssetsModel>>
  assetsEntityID$: Observable<string>
  formDict$: Observable<Dictionary<LmLoginAssetsModel>>
  formEntityID$: Observable<string>
  contextEntityID$: Observable<string>
  formGroup$: Observable<FormGroup>

  constructor(
    private loginService: LmLoginService,
    private authService: LmAuthService
  ) { }

  ngOnInit(): void {
    this.assetsDict$ = this.loginService.getAssetsDict()
    this.assetsEntityID$ = this.loginService.getAssetsEntityID()
    this.formDict$ = this.loginService.getFormDict()
    this.formEntityID$ = this.loginService.getFormEntityID()
    this.contextEntityID$ = this.loginService.getContextEntityID()
    this.formGroup$ = this.loginService.getFormGroup()
  }

  triggerLogin(data: LmLoginRequestModel) {
    this.authService.triggerLogin(data)
  }

  gotoSignup() {
    this.authService.gotoSignup()
  }

}
