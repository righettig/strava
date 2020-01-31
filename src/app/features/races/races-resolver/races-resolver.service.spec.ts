import { TestBed } from '@angular/core/testing';

import { RacesResolverService } from './races-resolver.service';
import { HttpClientModule } from '@angular/common/http';

describe('RaceResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: RacesResolverService = TestBed.get(RacesResolverService);
    expect(service).toBeTruthy();
  });
});
