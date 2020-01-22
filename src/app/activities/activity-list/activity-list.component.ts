import { Component, OnInit } from '@angular/core';
import { IActivity } from 'src/app/activities/models/activity';
import { ActivitiesApiService } from '../activities-api.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  constructor(private activitiesApi: ActivitiesApiService) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities() {
    this.activitiesApi.getActivities()
      .subscribe(data => {
        this.activities = data;
        this.filteredActivities = this.activities;
      });
  }

  onFilter(type) {
    if (type === "all") {
      this.filteredActivities = this.activities;
    } else {
      this.filteredActivities = 
        this.activities.filter(el => el.category === type);
    }
  }

  initialFilter = "all"; // convert to enum

  activities: IActivity[];
  filteredActivities: IActivity[];

}
