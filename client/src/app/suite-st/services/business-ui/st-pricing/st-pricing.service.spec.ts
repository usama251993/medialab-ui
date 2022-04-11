import { TestBed } from '@angular/core/testing';

import { StPricingService } from './st-pricing.service';

describe('StPricingService', () => {
  let service: StPricingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StPricingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
