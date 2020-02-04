import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDetailsComponent } from './activity-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivitiesApiService } from '../services/activities-api.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestHelpers } from 'src/testing/dummy-data';

describe('ActivityDetailsComponent', () => {
  let component: ActivityDetailsComponent;
  let fixture: ComponentFixture<ActivityDetailsComponent>;
  let activitiesApiMock;

  beforeEach(async(() => {
    activitiesApiMock = jasmine.createSpyObj(['deleteActivity', 'giveKudos']);   
    
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule, 
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ActivityDetailsComponent ],
      providers: [
        { provide: ActivitiesApiService, useValue: activitiesApiMock } 
      ],
      schemas: [NO_ERRORS_SCHEMA] // GR: this allows me to skip errors related to any agm-xxx controls
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDetailsComponent);
    component = fixture.componentInstance;
    component.activity = component.activity = TestHelpers.data.activity;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
