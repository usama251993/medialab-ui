import { TestBed } from '@angular/core/testing';

import { PhPhashResultResolver } from './ph-phash-result.resolver';

describe('PhPhashResultResolver', () => {
  let resolver: PhPhashResultResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PhPhashResultResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
