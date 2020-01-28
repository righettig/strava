import { Component, OnInit } from '@angular/core';
import { ActivitiesApiService } from '../services/activities-api.service';
import { ActivitiesParamsService } from '../services/activities-params.service';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { IActivity } from '../models/activity';
import { ActivitiesFilterService } from '../services/activities-filter.service';

@Component({
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  constructor(
    private activitiesApi: ActivitiesApiService,
    private activitiesFilter: ActivitiesFilterService,
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
          this.currentWeekTotalDistance = 
            this.activitiesFilter.currentWeekTotalDistance(this.activities);
        },
        error: err => this.errorMessage = err
      });
  }

  onFilter(type) {
    this.filterBy = type;
    this.filterActivities();
  }

  filterActivities() {
    this.filteredActivities = 
      this.activitiesFilter.filterByCategory(this.activities, this.filterBy);
  }

  dismissError() {
    this.errorMessage = "";
  }

  currentWeekTotalDistance: number;

  faPlusSquare = faPlusSquare;

  errorMessage: string;

  activities: IActivity[];
  filteredActivities: IActivity[];

}
