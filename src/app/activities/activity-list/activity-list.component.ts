import { Component, OnInit } from '@angular/core';
import { IActivity } from 'src/app/activities/models/activity';
import { ActivitiesApiService } from '../activities-api.service';
import { ActivitiesParamsService } from '../activities-params.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  constructor(
    private activitiesApi: ActivitiesApiService,
    private params: ActivitiesParamsService) { 
  }

  ngOnInit() {
    this.getActivities();
  }

  set filterBy(value: string) {
    this.params.filterBy = value;
  }

  get filterBy() {
    return this.params.filterBy;
  }

  getActivities() {
    this.activitiesApi.getActivities()
      .subscribe({
        next: data => {
          this.activities = data;
          this.filterActivities();
        },
        error: err => this.errorMessage = err
      });
  }

  onFilter(type) {
    this.filterBy = type;
    this.filterActivities();
  }

  filterActivities() {
    if (this.filterBy === "all") {
      this.filteredActivities = this.activities;
      
    } else {
      this.filteredActivities = 
        this.activities.filter(el => el.category === this.filterBy);
    }
  }

  dismissError() {
    this.errorMessage = "";
  }

  errorMessage: string = "foo";

  activities: IActivity[];
  filteredActivities: IActivity[];

}
