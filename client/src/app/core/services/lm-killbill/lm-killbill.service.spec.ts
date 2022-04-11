import { TestBed } from '@angular/core/testing';

import { LmKillbillService } from './lm-killbill.service';

describe('LmKillbillService', () => {
  let service: LmKillbillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmKillbillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
