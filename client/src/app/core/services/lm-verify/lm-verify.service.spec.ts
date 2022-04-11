import { TestBed } from '@angular/core/testing';

import { LmVerifyService } from './lm-verify.service';

describe('LmVerifyService', () => {
  let service: LmVerifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmVerifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
