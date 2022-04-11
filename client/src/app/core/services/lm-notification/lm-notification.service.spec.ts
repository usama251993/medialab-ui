import { TestBed } from '@angular/core/testing';

import { LmNotificationService } from './lm-notification.service';

describe('LmNotificationService', () => {
  let service: LmNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
