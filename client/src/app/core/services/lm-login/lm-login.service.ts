import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable, of } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { Dictionary } from '@ngrx/entity'

import { State } from '@lm-core/state'
import * as fromActions from '@lm-core/state/actions/lm-login.action'
import { selectAssets } from '@lm-core/state/selectors/lm-login.selector'
import { ENTITY_ID } from '@lm-core/state/types'

import { LmLoginAssetsModel } from '@lm-core/models/lm-login.model'

@Injectable({
  providedIn: 'root'
})
export class LmLoginService {

  assetsModel: LmLoginAssetsModel
  formModel: LmLoginAssetsModel
  formGroup: FormGroup

  constructor(
    private _store$: Store<State>,
    private _fb: FormBuilder
  ) {
    this.formModel = {
      id: '',
      assets: null,
      form: {
        username: {
          name: 'username',
          type: 'text',
          placeholder: 'Username',
          label: 'Username',
          initialization: { value: '', disabled: false },
          validation: { bIsMandatory: true }
        },
        password: {
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          label: 'Password',
          initialization: { value: '', disabled: false },
          validation: { bIsMandatory: true }
        },
      },
      error: null
    }

    this.formGroup = this._fb.group({
      username: [
        {
          value: this.formModel.form.username.initialization.value,
          disabled: this.formModel.form.username.initialization.disabled
        },
        [
          Validators.required
        ]
      ],
      password: [
        {
          value: this.formModel.form.password.initialization.value,
          disabled: this.formModel.form.password.initialization.disabled
        },
        [
          Validators.required
        ]
      ]
    })

    this.assetsModel = {
      id: '',
      assets: {
        title: 'Login to LTI MediaLabs',
        login: 'Login',
        signup: 'Signup'
      },
      form: null,
      error: null
    }
  }

  getAssetsDict(): Observable<Dictionary<LmLoginAssetsModel>> {
    this._store$.dispatch(new fromActions.LmLoadLoginAssets({ id: ENTITY_ID.ASSETS }))
    return this._store$.pipe(select(selectAssets))
  }

  getAssetsEntityID(): Observable<string> {
    return of(ENTITY_ID.ASSETS)
  }

  getFormDict(): Observable<Dictionary<LmLoginAssetsModel>> {
    this._store$.dispatch(new fromActions.LmLoadLoginForm({ id: ENTITY_ID.FORM }))
    return this._store$.pipe(select(selectAssets))
  }

  getFormEntityID(): Observable<string> {
    return of(ENTITY_ID.FORM)
  }

  getContextEntityID(): Observable<string> {
    return of(ENTITY_ID.LOGIN)
  }

  getFormGroup(): Observable<FormGroup> {
    return of(this.formGroup)
  }

  fetchAssets(id: string): Observable<LmLoginAssetsModel> {
    return of({ ...this.assetsModel, id })
  }

  fetchForm(id: string): Observable<LmLoginAssetsModel> {
    return of({ ...this.formModel, id })
  }
}
