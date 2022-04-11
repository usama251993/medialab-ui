import { TestBed } from '@angular/core/testing';

import { PhPhashResultService } from './ph-phash-result.service';

describe('PhPhashResultService', () => {
  let service: PhPhashResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhPhashResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
