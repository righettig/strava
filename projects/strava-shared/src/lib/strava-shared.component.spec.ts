import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StravaSharedComponent } from './strava-shared.component';

describe('StravaSharedComponent', () => {
  let component: StravaSharedComponent;
  let fixture: ComponentFixture<StravaSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StravaSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StravaSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
