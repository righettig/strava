import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IActivity } from '../../models/activity';

@Component({
  templateUrl: './confirm-delete-activity-modal.component.html',
  styleUrls: ['./confirm-delete-activity-modal.component.scss']
})
export class ConfirmDeleteActivityModal {

  @Input() activity: IActivity;

  constructor(public modal: NgbActiveModal) { }

}