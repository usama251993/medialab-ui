import { TestBed } from '@angular/core/testing';

import { PhAudioService } from './ph-audio.service';

describe('PhAudioService', () => {
  let service: PhAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
