import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLogEditComponent } from './edit.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute } from '@angular/router';
import { TrainingLogService } from '../services/training-log.service';

describe('TrainingLogEditComponent', () => {
  let component: TrainingLogEditComponent;
  let fixture: ComponentFixture<TrainingLogEditComponent>;

  beforeEach(async(() => {   
    let trainingLogServiceMock = jasmine.createSpyObj(['update', 'getKey']);   

    TestBed.configureTestingModule({
      imports: [FormsModule, NgbModule, FontAwesomeModule],
      declarations: [ TrainingLogEditComponent ],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: {
            snapshot: {
              paramMap: { get: (key) => 0 }
            }
          }
        },
        { provide: TrainingLogService, useValue: trainingLogServiceMock }
      ]
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
