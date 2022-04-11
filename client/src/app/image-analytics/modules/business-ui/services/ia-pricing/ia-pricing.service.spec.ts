import { TestBed } from '@angular/core/testing';

import { IaPricingService } from './ia-pricing.service';

describe('IaPricingService', () => {
  let service: IaPricingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaPricingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
