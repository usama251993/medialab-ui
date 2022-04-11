import { TestBed } from '@angular/core/testing'

import { PhAppUIShellService } from './ph-app-ui-shell.service'

describe('PhAppUIShellService', () => {
  let service: PhAppUIShellService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PhAppUIShellService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
