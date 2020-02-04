import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesListComponent } from './races-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from 'src/app/testing/activated-route-stub';

describe('RacesListComponent', () => {
  let component: RacesListComponent;
  let fixture: ComponentFixture<RacesListComponent>;

  beforeEach(async(() => {
    let activatedRouteStub = new ActivatedRouteStub();
    activatedRouteStub.setSnapshotData({
      resolvedData: {
        races: [],
        error: null
      }
    })

    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ RacesListComponent ],
      providers: [{
        provide: ActivatedRoute, useValue: activatedRouteStub
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
