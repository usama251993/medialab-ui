import { TestBed } from '@angular/core/testing';

import { LmHomeService } from './lm-home.service';

describe('LmHomeService', () => {
  let service: LmHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
