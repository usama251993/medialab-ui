import { TestBed } from '@angular/core/testing';

import { StMonoService } from './st-mono.service';

describe('StMonoService', () => {
  let service: StMonoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StMonoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
