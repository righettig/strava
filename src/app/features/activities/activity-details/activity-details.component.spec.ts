import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDetailsComponent } from './activity-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivitiesApiService } from '../services/activities-api.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestHelpers } from 'src/testing/dummy-data';
import { By } from '@angular/platform-browser';
import { AuthService } from '../../auth/auth.service';

describe('ActivityDetailsComponent', () => {

  describe('user is activity.user', () => {
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
          { provide: AuthService, useValue: { currentUsername: 'giacomo' } },
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

    it('edit and delete buttons should be visible', () => {
      let buttons = fixture.debugElement.queryAll(By.css('button'));

      expect(buttons.length).toEqual(3);
      expect(buttons[0].nativeElement.textContent.trim()).toBe("Edit");
      expect(buttons[1].nativeElement.textContent.trim()).toBe("Delete");
    });

    it('giveKudos btn should be disabled', () => {
      let kudosBtn = fixture.debugElement.queryAll(By.css('button'))[2];
  
      expect(kudosBtn.nativeElement.disabled).toBeTrue();
    });
  });

  describe('user is not activity.user', () => {
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
          { provide: AuthService, useValue: { currentUsername: 'foo' } },
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
      
    it('edit and delete buttons should NOT be visible', () => {
      let buttons = fixture.debugElement.queryAll(By.css('button'));

      expect(buttons.length).toEqual(1);
    });

    it('giveKudos btn should NOT be disabled', () => {
      let kudosBtn = fixture.debugElement.query(By.css('button'));
  
      expect(kudosBtn.nativeElement.disabled).toBeFalse();
    });
  });
 
  // check template bindings after passing an activity
    // card-header (username, name, distance)
    // card-body (description)

  // delete: 
    // this.activitiesApi.deleteActivity(activity.id);
    // this.onDelete.emit();

  // edit: redirect to edit route

  // give kudos

});
