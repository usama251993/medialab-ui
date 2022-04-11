import { TestBed } from '@angular/core/testing';

import { IaResultOverviewResolver } from './ia-result-overview.resolver';

describe('IaResultOverviewResolver', () => {
  let resolver: IaResultOverviewResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IaResultOverviewResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
