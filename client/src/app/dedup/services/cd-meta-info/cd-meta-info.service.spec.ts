import { TestBed } from '@angular/core/testing';

import { CdMetaInfoService } from './cd-meta-info.service';

describe('CdMetaInfoService', () => {
  let service: CdMetaInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdMetaInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
