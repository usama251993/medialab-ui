import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Observable, of } from 'rxjs'
import { Dictionary } from '@ngrx/entity'

import { LmSignupRequestModel } from '@shared/models/lm-auth.model'
import { LmSignupAssetsModel } from '@lm-core/models/lm-signup.model'
import { LmSignupService } from '@lm-core/services/lm-signup/lm-signup.service'
import { LmAuthService } from '@lm-core/services/lm-auth/lm-auth.service'

@Component({
  selector: 'app-lm-signup-container',
  template: `<app-lm-signup [assetsDict]      = "assetsDict$      | async"
                            [assetsEntityID]  = "assetsEntityID$  | async"
                            [formDict]        = "formDict$        | async"
                            [formEntityID]    = "formEntityID$    | async"
                            [formGroup]       = "formGroup$       | async"
                            [contextEntityID] = "contextEntityID$ | async"
                            [organizations]   = "organizations$   | async"
                            (triggerSignup$)  = "triggerSignup($event)"
                            (gotoLogin$)      = "gotoLogin()"></app-lm-signup>`
})
export class LmSignupContainerComponent implements OnInit {

  assetsDict$: Observable<Dictionary<LmSignupAssetsModel>>
  assetsEntityID$: Observable<string>
  formDict$: Observable<Dictionary<LmSignupAssetsModel>>
  formEntityID$: Observable<string>
  contextEntityID$: Observable<string>
  formGroup$: Observable<FormGroup>

  organizations$: Observable<any>

  constructor(
    private signupService: LmSignupService,
    private authService: LmAuthService
  ) { }

  ngOnInit(): void {
    this.assetsDict$ = this.signupService.getAssetsDict()
    this.assetsEntityID$ = this.signupService.getAssetsEntityID()
    this.formDict$ = this.signupService.getFormDict()
    this.formEntityID$ = this.signupService.getFormEntityID()
    this.contextEntityID$ = this.signupService.getContextEntityID()
    this.formGroup$ = this.signupService.getFormGroup()

    this.organizations$ = of([
      { value: 'Disney', viewValue: 'Disney' },
      { value: 'DisneyImaginery', viewValue: 'Disney Imaginery' },
      { value: 'Viacom', viewValue: 'Viacom CBS' },
      { value: 'StreaminFromGUI', viewValue: 'Stream' },
    ])
  }

  triggerSignup(data: LmSignupRequestModel) {
    this.authService.triggerSignup(data)
  }

  gotoLogin() {
    this.authService.gotoLogin()
  }

}
