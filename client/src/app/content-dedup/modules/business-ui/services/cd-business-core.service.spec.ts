import { TestBed } from '@angular/core/testing';

import { CdBusinessCoreService } from './cd-business-core.service';

describe('CdBusinessCoreService', () => {
  let service: CdBusinessCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdBusinessCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
