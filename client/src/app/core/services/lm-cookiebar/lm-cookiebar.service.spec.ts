import { TestBed } from '@angular/core/testing';

import { LmCookiebarService } from './lm-cookiebar.service';

describe('LmCookiebarService', () => {
  let service: LmCookiebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmCookiebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
