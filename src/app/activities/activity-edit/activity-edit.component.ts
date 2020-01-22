import { Component, OnInit } from '@angular/core';
import { ActivitiesApiService } from '../activities-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent implements OnInit {

  constructor(
    private activitiesApi: ActivitiesApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // retrieve activityId from route params
    const activityId = +this.route.snapshot.paramMap.get("id");
    //this.activitiesApi.getActivityById(activityId);
  }

  get pendingChanges() {
    return false;
  }

}
