import { TestBed } from '@angular/core/testing';

import { CdResultService } from './cd-result.service';

describe('CdResultService', () => {
  let service: CdResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
