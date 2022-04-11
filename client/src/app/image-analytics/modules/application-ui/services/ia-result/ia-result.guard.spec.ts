import { TestBed } from '@angular/core/testing'

import { IaResultResolveGuard } from './ia-result.guard'

describe('IaResultResolveGuard', () => {
  let service: IaResultResolveGuard

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(IaResultResolveGuard)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
