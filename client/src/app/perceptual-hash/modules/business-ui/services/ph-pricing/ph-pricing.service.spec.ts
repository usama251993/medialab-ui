import { TestBed } from '@angular/core/testing';

import { PhPricingService } from './ph-pricing.service';

describe('PhPricingService', () => {
  let service: PhPricingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhPricingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
