import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityEditComponent } from './activity-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { ActivitiesApiService } from '../services/activities-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

describe('ActivityEditComponent', () => {

  let component: ActivityEditComponent;
  let fixture: ComponentFixture<ActivityEditComponent>;
  let activitiesApiMock;

  describe("when the user is allowed to edit the activity", () => {
    let router: Router;

    beforeEach(async(() => {
      activitiesApiMock = jasmine.createSpyObj(['getActivity', 'editActivity']);
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

      router = TestBed.get(Router);
      spyOn(router, 'navigate').and.stub();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ActivityEditComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    fit('save should invoke "editActivity" and redirect to the activities page', () => {
      activitiesApiMock.editActivity.and.returnValue(
        of({}) // we do not care about the returned value
      )

      component.save();

      expect(router.navigate).toHaveBeenCalledWith(['activities']);
    });

    // reset

    // dirty
  })

  describe("when the user is NOT allowed to edit the activity", () => {
    let router: Router;

    beforeEach(async(() => {
      activitiesApiMock = jasmine.createSpyObj(['getActivity']);
      activitiesApiMock.getActivity.and.returnValue(
        of({
          "id": 1,
          "name": "Longrun #1",
          "description": "20M longrun",
          "username": "FOO", // the user won't be able to edit this activity
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
        ],
      })
        .compileComponents();

      router = TestBed.get(Router);
      spyOn(router, 'navigate').and.stub();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ActivityEditComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should redirect to /activities', () => {
      expect(router.navigate).toHaveBeenCalledWith(['activities']);
    });
  })

});