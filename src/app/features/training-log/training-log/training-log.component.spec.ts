import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLogComponent } from './training-log.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { AppStoreModule } from '../store/store.module';
import { HttpClientModule } from '@angular/common/http';

describe('TrainingLogComponent', () => {
  let component: TrainingLogComponent;
  let fixture: ComponentFixture<TrainingLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoadingBarModule, AppStoreModule, HttpClientModule],
      declarations: [ TrainingLogComponent ]
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
