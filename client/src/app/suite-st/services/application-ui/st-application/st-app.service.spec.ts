import { TestBed } from '@angular/core/testing';

import { StAppService } from './st-app.service';

describe('StAppService', () => {
  let service: StAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
