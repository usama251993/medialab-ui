import { TestBed } from '@angular/core/testing';

import { LmFooterService } from './lm-footer.service';

describe('LmFooterService', () => {
  let service: LmFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
