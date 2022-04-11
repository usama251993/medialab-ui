import { TestBed } from '@angular/core/testing';

import { IaSummaryResolver } from './ia-summary.resolver';

describe('IaSummaryResolver', () => {
  let resolver: IaSummaryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IaSummaryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
