import { TestBed } from '@angular/core/testing';

import { PhPhashService } from './ph-phash.service';

describe('PhPhashService', () => {
  let service: PhPhashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhPhashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
