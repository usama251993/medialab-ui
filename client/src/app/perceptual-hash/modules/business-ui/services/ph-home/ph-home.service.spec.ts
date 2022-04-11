import { TestBed } from '@angular/core/testing';

import { PhHomeService } from './ph-home.service';

describe('PhHomeService', () => {
  let service: PhHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
