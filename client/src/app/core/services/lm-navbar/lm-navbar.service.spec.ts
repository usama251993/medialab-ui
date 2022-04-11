import { TestBed } from '@angular/core/testing';

import { LmNavbarService } from './lm-navbar.service';

describe('LmNavbarService', () => {
  let service: LmNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
