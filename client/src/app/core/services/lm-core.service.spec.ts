import { TestBed } from '@angular/core/testing';

import { LmCoreService } from './lm-core.service';

describe('LmCoreService', () => {
  let service: LmCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
