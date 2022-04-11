import { TestBed } from '@angular/core/testing';

import { CdResultListService } from './cd-result-list.service';

describe('CdResultListService', () => {
  let service: CdResultListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdResultListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
