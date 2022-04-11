import { TestBed } from '@angular/core/testing';

import { PhPhashAppService } from './ph-phash-app.service';

describe('PhPhashAppService', () => {
  let service: PhPhashAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhPhashAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
