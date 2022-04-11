import { TestBed } from '@angular/core/testing';

import { CdBucketService } from './cd-bucket.service';

describe('CdBucketService', () => {
  let service: CdBucketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdBucketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
