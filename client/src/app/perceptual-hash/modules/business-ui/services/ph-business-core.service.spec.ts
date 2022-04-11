import { TestBed } from '@angular/core/testing';

import { PhBusinessCoreService } from './ph-business-core.service';

describe('PhBusinessCoreService', () => {
  let service: PhBusinessCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhBusinessCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
