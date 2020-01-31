import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListComponent } from './activity-list.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { FiltersComponent } from './filters/filters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityDetailsComponent } from '../activity-details/activity-details.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivitiesApiService } from '../services/activities-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('ActivityListComponent', () => {
  let component: ActivityListComponent;
  let fixture: ComponentFixture<ActivityListComponent>;
  let activitiesApiMock;

  beforeEach(async(() => {
    activitiesApiMock = jasmine.createSpyObj(['getActivities']);   
    activitiesApiMock.getActivities.and.returnValue(
      of([])
    )
    
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        AgmCoreModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ 
        UserStatsComponent, 
        FiltersComponent, 
        ActivityListComponent,
        ActivityDetailsComponent
      ],
      providers: [
        { provide: ActivitiesApiService, useValue: activitiesApiMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
