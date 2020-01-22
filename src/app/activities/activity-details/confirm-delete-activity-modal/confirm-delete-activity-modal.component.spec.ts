import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteActivityModal } from './confirm-delete-activity-modal.component';

describe('ConfirmDeleteActivityModalComponent', () => {
  let component: ConfirmDeleteActivityModal;
  let fixture: ComponentFixture<ConfirmDeleteActivityModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteActivityModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteActivityModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
