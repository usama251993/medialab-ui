import { TestBed } from '@angular/core/testing';

import { IaResultDetailResolver } from './ia-result-detail.resolver';

describe('IaResultDetailResolver', () => {
  let resolver: IaResultDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IaResultDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
