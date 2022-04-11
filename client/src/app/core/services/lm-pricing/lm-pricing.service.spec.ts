import { TestBed } from '@angular/core/testing';

import { LmPricingService } from './lm-pricing.service';

describe('LmPricingService', () => {
  let service: LmPricingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmPricingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
