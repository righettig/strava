import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityNewComponent } from './activity-new.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivitiesApiService } from '../services/activities-api.service';

describe('ActivityNewComponent', () => {
  let component: ActivityNewComponent;
  let fixture: ComponentFixture<ActivityNewComponent>;
  let activitiesApiMock;

  beforeEach(async(() => {
    activitiesApiMock = jasmine.createSpyObj(['insertActivity']);   

    TestBed.configureTestingModule({
      imports: [
        SharedModule, HttpClientModule, RouterTestingModule
      ],
      declarations: [ ActivityNewComponent ],
      providers: [
        { provide: ActivitiesApiService, useValue: activitiesApiMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
