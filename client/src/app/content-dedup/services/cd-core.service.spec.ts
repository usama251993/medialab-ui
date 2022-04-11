import { TestBed } from '@angular/core/testing';

import { CdCoreService } from './cd-core.service';

describe('CdCoreService', () => {
  let service: CdCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
