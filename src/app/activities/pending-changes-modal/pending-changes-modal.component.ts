import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './pending-changes-modal.component.html',
  styleUrls: ['./pending-changes-modal.component.scss']
})
export class PendingChangesModal {

  constructor(public modal: NgbActiveModal) { }

}
