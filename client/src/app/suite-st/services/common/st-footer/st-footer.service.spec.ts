import { TestBed } from '@angular/core/testing';

import { StFooterService } from './st-footer.service';

describe('StFooterService', () => {
  let service: StFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
