import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLogComponent } from './training-log.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { AppStoreModule } from '../store/store.module';
import { HttpClientModule } from '@angular/common/http';
import { TrainingLogEditComponent } from '../edit/edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';

describe('TrainingLogComponent', () => {
  let component: TrainingLogComponent;
  let fixture: ComponentFixture<TrainingLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        LoadingBarModule, 
        AppStoreModule, 
        HttpClientModule, 
        RouterTestingModule
      ],
      declarations: [ TrainingLogComponent, TrainingLogEditComponent ]
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
