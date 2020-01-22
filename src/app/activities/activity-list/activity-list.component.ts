import { Component, OnInit } from '@angular/core';
import { IActivity } from '../../models/activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.activities = [
      {
        "id": 1,
        "name": "Longrun #1",
        "description": "20M longrun",
        "creationDate": "January 20, 2020",
        "category": "run",
        "subcategory": "longrun",
        "icon": "assets/running.jpg"
      },
      {
        "id": 2,
        "name": "Interval training session #1",
        "description": "4 x 1M threshold intervals, 90 sec rest",
        "creationDate": "January 21, 2020",
        "category": "run",
        "subcategory": "workout",
        "icon": "assets/running.jpg"
      }
    ]
  }

  activities: IActivity[];

}
