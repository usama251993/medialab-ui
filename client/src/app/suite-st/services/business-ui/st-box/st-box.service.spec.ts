import { TestBed } from '@angular/core/testing';

import { StBoxService } from './st-box.service';

describe('StBoxService', () => {
  let service: StBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
