import { Component, OnInit, Input } from '@angular/core';
import { IActivity } from 'src/app/activities/models/activity';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteActivityModal } from './confirm-delete-activity-modal/confirm-delete-activity-modal.component';
import { faRunning, faHiking, faBicycle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {

  @Input() activity: IActivity;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    switch (this.activity.category) {
      case "run":     this.activity.icon = faRunning; break;
      case "cycling": this.activity.icon = faBicycle; break;
      case "hiking":  this.activity.icon = faHiking;  break;
    }
  }

  delete(activity: IActivity) {
    const modal = this.modalService.open(ConfirmDeleteActivityModal);
    modal.componentInstance.activity = activity;
  }

}
