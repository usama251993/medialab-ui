import { TestBed } from '@angular/core/testing';

import { IaBucketService } from './ia-bucket.service';

describe('IaBucketService', () => {
  let service: IaBucketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaBucketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
