import { TestBed } from '@angular/core/testing';

import { RacesResolverService } from './races-resolver.service';

describe('RaceResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RacesResolverService = TestBed.get(RacesResolverService);
    expect(service).toBeTruthy();
  });
});
