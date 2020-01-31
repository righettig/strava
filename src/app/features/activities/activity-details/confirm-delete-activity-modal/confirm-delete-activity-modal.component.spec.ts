import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteActivityModal } from './confirm-delete-activity-modal.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TestHelpers } from 'src/test-helpers/dummy-data';

describe('ConfirmDeleteActivityModalComponent', () => {
  let component: ConfirmDeleteActivityModal;
  let fixture: ComponentFixture<ConfirmDeleteActivityModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ NgbModal, NgbActiveModal ],
      declarations: [ ConfirmDeleteActivityModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteActivityModal);
    component = fixture.componentInstance;
    component.activity = TestHelpers.data.activity;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
