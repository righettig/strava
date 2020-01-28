import { TestBed } from '@angular/core/testing';

import { ActivitiesFilterService } from './activities-filter.service';

describe('ActivitiesFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivitiesFilterService = TestBed.get(ActivitiesFilterService);
    expect(service).toBeTruthy();
  });
});
