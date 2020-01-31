import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLogEditComponent } from './edit.component';

describe('TrainingLogEditComponent', () => {
  let component: TrainingLogEditComponent;
  let fixture: ComponentFixture<TrainingLogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingLogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
