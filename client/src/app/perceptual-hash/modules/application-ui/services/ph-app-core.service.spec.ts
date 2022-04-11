import { TestBed } from '@angular/core/testing';

import { PhAppCoreService } from './ph-app-core.service';

describe('PhAppCoreService', () => {
  let service: PhAppCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhAppCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
