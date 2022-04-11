import { TestBed } from '@angular/core/testing';

import { CdNavbarService } from './cd-navbar.service';

describe('CdNavbarService', () => {
  let service: CdNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
