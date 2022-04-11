import { TestBed } from '@angular/core/testing';

import { StFeatureService } from './st-feature.service';

describe('StFeatureService', () => {
  let service: StFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
