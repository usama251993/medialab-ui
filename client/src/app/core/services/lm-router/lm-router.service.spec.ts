import { TestBed } from '@angular/core/testing';

import { LmRouterService } from './lm-router.service';

describe('LmRouterService', () => {
  let service: LmRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
