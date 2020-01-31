import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingChangesModal } from './pending-changes-modal.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('PendingChangesModalComponent', () => {
  let component: PendingChangesModal;
  let fixture: ComponentFixture<PendingChangesModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ NgbModal, NgbActiveModal ],
      declarations: [ PendingChangesModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingChangesModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
