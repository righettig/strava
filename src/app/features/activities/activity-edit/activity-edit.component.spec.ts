import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEditComponent } from './activity-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { ActivitiesApiService } from '../services/activities-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../auth/auth.service';

describe('ActivityEditComponent', () => {
  let component: ActivityEditComponent;
  let fixture: ComponentFixture<ActivityEditComponent>;
  let activitiesApiMock;

  beforeEach(async(() => {
    activitiesApiMock = jasmine.createSpyObj(['getActivity']);
    activitiesApiMock.getActivity.and.returnValue(
      of({
        "id": 1,
        "name": "Longrun #1",
        "description": "20M longrun",
        "username": "giacomo",
        "creationDate": "2020-01-28",
        "category": "run",
        "subcategory": "longrun",
        "location": {
          "lat": 44.3653,
          "lng": 10.0922
        },
        "distance": 20,
        "kudos": 2
      })
    )
  
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ActivityEditComponent],
      providers: [
        { provide: AuthService, useValue: { currentUsername: 'giacomo' } },
        { provide: ActivitiesApiService, useValue: activitiesApiMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // trying to edit an actity that does not belong to the current user should redirect to 'activities'

  // save

  // reset

  // dirty

});
