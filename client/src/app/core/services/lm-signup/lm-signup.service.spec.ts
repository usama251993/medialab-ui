import { TestBed } from '@angular/core/testing';

import { LmSignupService } from './lm-signup.service';

describe('LmSignupService', () => {
  let service: LmSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
