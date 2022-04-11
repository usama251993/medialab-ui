import { TestBed } from '@angular/core/testing'

import { AppEndpointService } from './app-endpoint.service'

describe('AppEndpointService', () => {
  let service: AppEndpointService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AppEndpointService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
