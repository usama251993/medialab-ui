import { TestBed } from '@angular/core/testing';

import { StCoreService } from './st-core.service';

describe('StCoreService', () => {
  let service: StCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
