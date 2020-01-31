import { TestBed } from '@angular/core/testing';

import { ActivitiesApiService } from './activities-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ActivitiesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ActivitiesApiService = TestBed.get(ActivitiesApiService);
    expect(service).toBeTruthy();
  });
});
