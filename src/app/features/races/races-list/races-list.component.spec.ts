import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesListComponent } from './races-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('RacesListComponent', () => {
  let component: RacesListComponent;
  let fixture: ComponentFixture<RacesListComponent>;

  // TODO: snapshot.data['resolvedData']

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ RacesListComponent ]
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
