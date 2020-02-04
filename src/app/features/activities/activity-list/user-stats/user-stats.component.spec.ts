import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatsComponent } from './user-stats.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserStatsComponent', () => {
  let component: UserStatsComponent;
  let fixture: ComponentFixture<UserStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ UserStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // totalDistance > 0  => totalDistance should be displayed in template

  // totalDistance == 0 => no data

  // goToFullAnalytics => redirect

});
