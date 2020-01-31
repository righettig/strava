import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsComponent } from './analytics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ActivitiesApiService } from '../activities/services/activities-api.service';
import { ActivitiesFilterService } from '../activities/services/activities-filter.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AnalyticsComponent', () => {
  let component: AnalyticsComponent;
  let fixture: ComponentFixture<AnalyticsComponent>;
  let activitiesApiMock;
  let activitierFilterMock;

  beforeEach(async(() => {
    activitiesApiMock    = jasmine.createSpyObj(['getActivities']);   
    activitierFilterMock = jasmine.createSpyObj(['totalDistanceByWeeks']);

    activitiesApiMock.getActivities.and.returnValue(
      // we do not care about the actual data as long as we get something in return so that we then invoke 'totalDistanceByWeeks'
      of([])
    )

    activitierFilterMock.totalDistanceByWeeks.and.returnValue([
      {
        name: "week1",
        value: 10,
      },
      {
        name: "week2",
        value: 20,
      }
    ])

    TestBed.configureTestingModule({
      imports: [
        SharedModule, 
        NgxChartsModule,
        HttpClientModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [ AnalyticsComponent ],
      providers: [
        { provide: ActivitiesApiService,    useValue: activitiesApiMock },
        { provide: ActivitiesFilterService, useValue: activitierFilterMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
