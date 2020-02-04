import { TestBed } from '@angular/core/testing';

import { ActivitiesApiService } from './activities-api.service';
import { HttpClientModule } from '@angular/common/http';
import { PusherService } from 'src/app/core/pusher.service';

describe('ActivitiesApiService', () => {
  const pusherServiceMock = jasmine.createSpyObj(['bind'])

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [{
      provide: PusherService, useValue: pusherServiceMock 
    }]
  }));

  it('should be created', () => {
    const service: ActivitiesApiService = TestBed.get(ActivitiesApiService);
    expect(service).toBeTruthy();
  });
});