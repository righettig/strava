import { Component, OnInit, Input } from '@angular/core';
import { IActivity } from 'src/app/activities/models/activity';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {

  @Input() activity: IActivity;

  constructor() { }

  ngOnInit() {
  }

}
