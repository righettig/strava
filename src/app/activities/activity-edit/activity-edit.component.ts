import { Component, OnInit } from '@angular/core';
import { ActivitiesApiService } from '../activities-api.service';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent implements OnInit {

  constructor(
    private activitiesApi: ActivitiesApiService) { }

  ngOnInit() {
    // retrieve activityId from route params
    const activityId = 1;
    //this.activitiesApi.getActivityById(activityId);
  }

}
