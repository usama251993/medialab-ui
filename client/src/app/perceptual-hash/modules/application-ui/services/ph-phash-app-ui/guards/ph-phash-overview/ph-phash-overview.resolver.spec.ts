import { TestBed } from '@angular/core/testing';

import { PhPhashOverviewResolver } from './ph-phash-overview.resolver';

describe('PhPhashOverviewResolver', () => {
  let resolver: PhPhashOverviewResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PhPhashOverviewResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
