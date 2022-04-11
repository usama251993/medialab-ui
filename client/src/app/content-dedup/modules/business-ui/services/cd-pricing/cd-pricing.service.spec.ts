import { TestBed } from '@angular/core/testing';

import { CdPricingService } from './cd-pricing.service';

describe('CdPricingService', () => {
  let service: CdPricingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdPricingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
