import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesListComponent } from './shoes-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ShoesListComponent', () => {
  let component: ShoesListComponent;
  let fixture: ComponentFixture<ShoesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [ ShoesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
