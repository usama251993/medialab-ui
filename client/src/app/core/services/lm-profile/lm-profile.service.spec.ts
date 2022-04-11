import { TestBed } from '@angular/core/testing';

import { LmProfileService } from './lm-profile.service';

describe('LmProfileService', () => {
  let service: LmProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
