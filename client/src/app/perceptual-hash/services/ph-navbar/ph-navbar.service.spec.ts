import { TestBed } from '@angular/core/testing';

import { PhNavbarService } from './ph-navbar.service';

describe('PhNavbarService', () => {
  let service: PhNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
