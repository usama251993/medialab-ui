import { TestBed } from '@angular/core/testing'

import { CdResultListGuard } from './cd-result-list.guard'

describe('CdResultListGuard', () => {
  let service: CdResultListGuard

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CdResultListGuard)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
