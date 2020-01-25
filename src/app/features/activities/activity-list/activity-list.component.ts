import { Component, OnInit } from '@angular/core';
import { ActivitiesApiService } from '../services/activities-api.service';
import { ActivitiesParamsService } from '../services/activities-params.service';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { IActivity } from '../models/activity';

@Component({
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

  faPlusSquare = faPlusSquare;

  errorMessage: string;

  activities: IActivity[];
  filteredActivities: IActivity[];

}