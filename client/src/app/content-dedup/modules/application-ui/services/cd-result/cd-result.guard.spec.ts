import { TestBed } from '@angular/core/testing'

import { CdResultResolveGuard } from './cd-result.guard'

describe('CdResultResolveGuard', () => {
  let service: CdResultResolveGuard

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CdResultResolveGuard)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
