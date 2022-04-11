import { TestBed } from '@angular/core/testing';

import { LmContactService } from './lm-contact.service';

describe('LmContactService', () => {
  let service: LmContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
