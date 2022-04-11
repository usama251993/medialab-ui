import { TestBed } from '@angular/core/testing';

import { LmAuthService } from './lm-auth.service';

describe('LmAuthService', () => {
  let service: LmAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
