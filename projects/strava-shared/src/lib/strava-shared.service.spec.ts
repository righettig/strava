import { TestBed } from '@angular/core/testing';

import { StravaSharedService } from './strava-shared.service';

describe('StravaSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StravaSharedService = TestBed.get(StravaSharedService);
    expect(service).toBeTruthy();
  });
});
