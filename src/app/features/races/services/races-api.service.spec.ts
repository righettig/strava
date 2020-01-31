import { TestBed } from '@angular/core/testing';

import { RacesApiService } from './races-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('RacesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: RacesApiService = TestBed.get(RacesApiService);
    expect(service).toBeTruthy();
  });
});
