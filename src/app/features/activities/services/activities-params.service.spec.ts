import { TestBed } from '@angular/core/testing';

import { ActivitiesParamsService } from './activities-params.service';

describe('ActivitiesParamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivitiesParamsService = TestBed.get(ActivitiesParamsService);
    expect(service).toBeTruthy();
  });
});
