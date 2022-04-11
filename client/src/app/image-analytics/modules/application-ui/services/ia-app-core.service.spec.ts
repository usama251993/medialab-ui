import { TestBed } from '@angular/core/testing';

import { IaAppCoreService } from './ia-app-core.service';

describe('IaAppCoreService', () => {
  let service: IaAppCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaAppCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
