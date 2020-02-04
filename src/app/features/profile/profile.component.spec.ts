import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProfileApiService } from './services/profile-api.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let profileApiMock;

  beforeEach(async(() => {
    profileApiMock = jasmine.createSpyObj(['get']);
    profileApiMock.get.and.returnValue(
      of({})
    )

    TestBed.configureTestingModule({
      imports: [
        SharedModule, 
        ReactiveFormsModule, 
        RouterTestingModule
      ],
      declarations: [ ProfileComponent ],
      providers: [
        { provide: ProfileApiService, useValue: profileApiMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // display data based on profile

  // save

});
