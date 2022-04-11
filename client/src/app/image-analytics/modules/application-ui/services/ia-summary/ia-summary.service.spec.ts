import { TestBed } from '@angular/core/testing';

import { IaSummaryService } from './ia-summary.service';

describe('IaSummaryService', () => {
  let service: IaSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
