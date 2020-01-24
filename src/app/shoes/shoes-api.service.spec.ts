import { TestBed } from '@angular/core/testing';

import { ShoesApiService } from './shoes-api.service';

describe('ShoesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoesApiService = TestBed.get(ShoesApiService);
    expect(service).toBeTruthy();
  });
});
