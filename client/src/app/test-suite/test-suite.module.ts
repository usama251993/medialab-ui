import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TestSuiteRoutingModule } from './test-suite-routing.module'

const DECLARATIONS = []

const IMPORTS = [
  CommonModule,
  TestSuiteRoutingModule
]

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS
})
export class TestSuiteModule { }
