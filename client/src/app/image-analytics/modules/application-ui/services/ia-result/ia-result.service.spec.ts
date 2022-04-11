import { TestBed } from '@angular/core/testing';

import { IaResultService } from './ia-result.service';

describe('IaResultService', () => {
  let service: IaResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
