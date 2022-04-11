import { TestBed } from '@angular/core/testing';

import { IaBusinessCoreService } from './ia-business-core.service';

describe('IaBusinessCoreService', () => {
  let service: IaBusinessCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaBusinessCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
