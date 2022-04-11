import { TestBed } from '@angular/core/testing';

import { LmLoginService } from './lm-login.service';

describe('LmLoginService', () => {
  let service: LmLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
