import { TestBed } from '@angular/core/testing'

import { AppStyleService } from './app-style.service'

describe('AppStyleService', () => {
  let service: AppStyleService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AppStyleService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
