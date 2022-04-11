import { TestBed } from '@angular/core/testing';

import { PhPhashBucketService } from './ph-phash-bucket.service';

describe('PhPhashBucketService', () => {
  let service: PhPhashBucketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhPhashBucketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
