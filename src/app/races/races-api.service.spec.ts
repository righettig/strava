import { TestBed } from '@angular/core/testing';

import { RacesApiService } from './races-api.service';

describe('RacesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RacesApiService = TestBed.get(RacesApiService);
    expect(service).toBeTruthy();
  });
});
