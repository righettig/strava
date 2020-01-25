import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingChangesModal } from './pending-changes-modal.component';

describe('PendingChangesModalComponent', () => {
  let component: PendingChangesModal;
  let fixture: ComponentFixture<PendingChangesModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
