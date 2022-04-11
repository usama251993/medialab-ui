import { TestBed } from '@angular/core/testing';

import { StHomeService } from './st-home.service';

describe('StHomeService', () => {
  let service: StHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
