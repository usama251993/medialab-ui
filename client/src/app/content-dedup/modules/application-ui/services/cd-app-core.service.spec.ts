import { TestBed } from '@angular/core/testing';

import { CdAppCoreService } from './cd-app-core.service';

describe('CdAppCoreService', () => {
  let service: CdAppCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdAppCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
