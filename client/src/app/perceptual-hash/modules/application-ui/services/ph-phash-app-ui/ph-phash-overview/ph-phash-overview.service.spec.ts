import { TestBed } from '@angular/core/testing';

import { PhPhashOverviewService } from './ph-phash-overview.service';

describe('PhPhashOverviewService', () => {
  let service: PhPhashOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhPhashOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
