import { TestBed } from '@angular/core/testing';

import { StNavbarService } from './st-navbar.service';

describe('StNavbarService', () => {
  let service: StNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
