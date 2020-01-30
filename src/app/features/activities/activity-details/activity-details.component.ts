import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faRunning, faHiking, faBicycle, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { IActivity } from '../models/activity';
import { ConfirmDeleteActivityModal } from './confirm-delete-activity-modal/confirm-delete-activity-modal.component';
import { ActivitiesApiService } from '../services/activities-api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityDetailsComponent implements OnInit {

  @Input() activity: IActivity;
  @Output() onDelete = new EventEmitter()

  lat = 40.730610;
  lng = -73.935242;

  constructor(
    private auth: AuthService,
    private router: Router,
    private modalService: NgbModal,
    private activitiesApi: ActivitiesApiService) { }

  ngOnInit() {
    this.currentUsername = this.auth.currentUsername;

    switch (this.activity.category) {
      case "run":  this.activity.icon = faRunning; break;
      case "ride": this.activity.icon = faBicycle; break;
      case "hike": this.activity.icon = faHiking;  break;
    }
  }

  delete(activity: IActivity) {
    const modal = this.modalService.open(ConfirmDeleteActivityModal);
    modal.componentInstance.activity = activity;

    modal.result.then(() => {
      this.activitiesApi.deleteActivity(activity.id);
      this.onDelete.emit();
    })
  }

  edit(activity: IActivity) {
    this.router.navigate(['/activities', activity.id])
  }

  giveKudos(activity) {
    this.activitiesApi.giveKudos(activity);
  }

  currentUsername: string;

  faThumbsUp = faThumbsUp;

}
