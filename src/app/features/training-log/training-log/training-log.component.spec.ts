import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLogComponent } from './training-log.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { AppStoreModule } from '../store/store.module';
import { HttpClientModule } from '@angular/common/http';
import { TrainingLogEditComponent } from '../edit/edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrainingLogService } from '../services/training-log.service';
import { of } from 'rxjs';

describe('TrainingLogComponent', () => {
  let component: TrainingLogComponent;
  let fixture: ComponentFixture<TrainingLogComponent>;

  beforeEach(async(() => {
    let trainingLogServiceMock = jasmine.createSpyObj(['getAll']);
    trainingLogServiceMock.entities$ = { subscribe: () => of([]) };
    trainingLogServiceMock.loading$ = { subscribe: () => of([]) };

    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        LoadingBarModule, 
        AppStoreModule, 
        HttpClientModule, 
        RouterTestingModule
      ],
      declarations: [ TrainingLogComponent, TrainingLogEditComponent ],
      providers: [{
        provide: TrainingLogService, useValue: trainingLogServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
