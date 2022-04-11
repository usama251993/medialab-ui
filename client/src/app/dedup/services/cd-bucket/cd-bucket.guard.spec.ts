import { TestBed } from '@angular/core/testing'

import { CdBucketGuard } from './cd-bucket.guard'

describe('CdBucketGuard', () => {
  let guard: CdBucketGuard

  beforeEach(() => {
    TestBed.configureTestingModule({})
    guard = TestBed.inject(CdBucketGuard)
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})
