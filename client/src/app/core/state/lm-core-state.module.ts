import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import * as fromStore from '@lm-core/state'
import { CORE_EFFECTS } from '@lm-core/state/effects'


const IMPORT_MODULES = [
  StoreModule.forFeature(fromStore.FEATURE_NAME, fromStore.reducers, { metaReducers: fromStore.metaReducers }),
  EffectsModule.forFeature(CORE_EFFECTS)
]

const EXPORT_MODULES = [
  StoreModule,
  EffectsModule
]

@NgModule({
  imports: IMPORT_MODULES,
  exports: EXPORT_MODULES
})
export class LmCoreStateModule { }
