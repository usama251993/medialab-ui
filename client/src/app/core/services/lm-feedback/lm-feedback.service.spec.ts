import { TestBed } from '@angular/core/testing';

import { LmFeedbackService } from './lm-feedback.service';

describe('LmFeedbackService', () => {
  let service: LmFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
