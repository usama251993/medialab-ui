import { TestBed } from '@angular/core/testing';

import { LmPaymentMethodService } from './lm-payment-method.service';

describe('LmPaymentMethodService', () => {
  let service: LmPaymentMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmPaymentMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
