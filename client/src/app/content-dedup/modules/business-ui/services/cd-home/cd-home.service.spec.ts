import { TestBed } from '@angular/core/testing';

import { CdHomeService } from './cd-home.service';

describe('CdHomeService', () => {
  let service: CdHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
