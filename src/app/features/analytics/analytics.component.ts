import { Component } from '@angular/core';
import { ActivitiesFilterService } from '../activities/services/activities-filter.service';
import { ActivitiesApiService } from '../activities/services/activities-api.service';

@Component({
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {

  constructor(
    private activitiesApi: ActivitiesApiService,
    private activitierFilter: ActivitiesFilterService) { }

  ngOnInit() {
    this.activitiesApi.getActivities().subscribe(data => {
      this.chartData = this.activitierFilter.totalDistanceByWeeks(data)
    })
  }

  chartData = [];
  view = [600, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Weeks';
  showYAxisLabel = true;
  yAxisLabel = 'Mileage';

  onSelect(event) {
    console.log(event);
  }

}
