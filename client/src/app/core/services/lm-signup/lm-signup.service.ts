import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable, of } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { Dictionary } from '@ngrx/entity'

import { State } from '@lm-core/state'
import * as fromActions from '@lm-core/state/actions/lm-signup.action'
import { selectAssets } from '@lm-core/state/selectors/lm-signup.selector'
import { ENTITY_ID } from '@lm-core/state/types'

import { LmSignupAssetsModel } from '@lm-core/models/lm-signup.model'

@Injectable({
  providedIn: 'root'
})
export class LmSignupService {

  assetsModel: LmSignupAssetsModel
  formModel: LmSignupAssetsModel
  formGroup: FormGroup

  constructor(
    private _store$: Store<State>,
    private _fb: FormBuilder
  ) {
    this.formModel = {
      id: '',
      assets: null,
      form: {
        givenname: {
          name: 'givenname',
          label: 'Your First Name',
          placeholder: 'Your First Name',
          type: 'text',
          initialization: { value: '', disabled: false },
          validation: { bIsMandatory: true }
        },
        lastname: {
          name: 'lastname',
          label: 'Your Last Name',
          placeholder: 'Your Last Name',
          type: 'text',
          initialization: { value: '', disabled: false },
          validation: { bIsMandatory: true }
        },
        email: {
          name: 'email',
          label: 'Your Work E-mail',
          placeholder: 'Your Work E-mail',
          type: 'email',
          initialization: { value: '', disabled: false },
          validation: { bIsMandatory: true }
        },
        password: {
          name: 'password',
          label: 'Choose a Password',
          placeholder: 'Choose a Password',
          type: 'password',
          initialization: { value: '', disabled: false },
          validation: {
            bIsMandatory: true,
            pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\*\.\!\@\#\$\%\^\&\(\)\{\}\[\]\:\;\<\>\,\.\?\/\~\\_\+\-\=\|\\])(.){8,32}$/
          }
        },
        confirm: {
          name: 'confirm',
          label: 'Confirm Password',
          placeholder: 'Confirm Password',
          type: 'password',
          initialization: { value: '', disabled: false },
          validation: { bIsMandatory: true }
        },
        country: {
          name: 'country',
          label: 'Your Country',
          placeholder: 'Your Country',
          type: 'text',
          initialization: { value: '', disabled: false },
          validation: { bIsMandatory: true }
        },
        organization: {
          name: 'organization',
          label: 'Your Organization',
          placeholder: 'Your Organization',
          type: 'select',
          initialization: { value: 'Disney', disabled: false },
          validation: { bIsMandatory: true }
        },
        designation: {
          name: 'designation',
          label: 'Your Designation',
          placeholder: 'Your Designation',
          type: 'text',
          initialization: { value: '', disabled: false },
          validation: { bIsMandatory: true }
        }
      },
      error: null
    }

    this.formGroup = this._fb.group({
      givenname: [
        {
          value: this.formModel.form.givenname.initialization.value,
          disabled: this.formModel.form.givenname.initialization.disabled
        },
        [
          Validators.required
        ]
      ],
      lastname: [
        {
          value: this.formModel.form.lastname.initialization.value,
          disabled: this.formModel.form.lastname.initialization.disabled
        },
        [
          Validators.required
        ]
      ],
      email: [
        {
          value: this.formModel.form.email.initialization.value,
          disabled: this.formModel.form.email.initialization.disabled
        },
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        {
          value: this.formModel.form.password.initialization.value,
          disabled: this.formModel.form.password.initialization.disabled
        },
        [
          Validators.required,
          Validators.pattern(this.formModel.form.password.validation.pattern)
        ]
      ],
      confirm: [
        {
          value: this.formModel.form.confirm.initialization.value,
          disabled: this.formModel.form.confirm.initialization.disabled
        },
        [
          Validators.required
        ]
      ],
      country: [
        {
          value: this.formModel.form.country.initialization.value,
          disabled: this.formModel.form.country.initialization.disabled
        },
        [
          Validators.required
        ]
      ],
      organization: [
        {
          value: this.formModel.form.organization.initialization.value,
          disabled: this.formModel.form.organization.initialization.disabled
        },
        [
          Validators.required
        ]
      ],
      designation: [
        {
          value: this.formModel.form.designation.initialization.value,
          disabled: this.formModel.form.designation.initialization.disabled
        },
        [
          Validators.required
        ]
      ]
    })

    this.assetsModel = {
      id: '',
      assets: {
        title: 'Sign up for LTI MediaLabs',
        login: 'Login',
        signup: 'Signup',
        passwordPolicy: {
          conditions: [
            {
              policy: 'length',
              statement: 'At least 8 characters long, but no more than 32',
              bIsValid: false
            },
            {
              policy: 'uppercase',
              statement: 'An uppercase letter',
              bIsValid: false
            },
            {
              policy: 'lowercase',
              statement: 'A lowercase letter',
              bIsValid: false
            },
            {
              policy: 'digit',
              statement: 'A number',
              bIsValid: false
            },
            {
              policy: 'special',
              statement: 'A special character *.!@#$%^&(){}[]:;<>,.?/~_+-=|\\',
              bIsValid: false
            }
          ]
        }
      },
      form: null,
      error: null
    }
  }

  getAssetsDict(): Observable<Dictionary<LmSignupAssetsModel>> {
    this._store$.dispatch(new fromActions.LmLoadSignupAssets({ id: ENTITY_ID.ASSETS }))
    return this._store$.pipe(select(selectAssets))
  }

  getAssetsEntityID(): Observable<string> {
    return of(ENTITY_ID.ASSETS)
  }

  getFormDict(): Observable<Dictionary<LmSignupAssetsModel>> {
    this._store$.dispatch(new fromActions.LmLoadSignupForm({ id: ENTITY_ID.FORM }))
    return this._store$.pipe(select(selectAssets))
  }

  getFormEntityID(): Observable<string> {
    return of(ENTITY_ID.FORM)
  }

  getContextEntityID(): Observable<string> {
    return of(ENTITY_ID.SIGNUP)
  }

  getFormGroup(): Observable<FormGroup> {
    return of(this.formGroup)
  }

  // getOrganizationList(): Observable<any> {
  // return this.authService.retrieveKBTenantID()
  // }

  fetchAssets(id: string): Observable<LmSignupAssetsModel> {
    return of({ ...this.assetsModel, id })
  }

  fetchForm(id: string): Observable<LmSignupAssetsModel> {
    return of({ ...this.formModel, id })
  }
}
