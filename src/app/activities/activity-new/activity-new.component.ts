import { Component, OnInit } from '@angular/core';
import { IActivity } from '../models/activity';
import { Router } from '@angular/router';
import { ActivitiesApiService } from '../activities-api.service';

@Component({
  selector: 'app-activity-new',
  templateUrl: './activity-new.component.html',
  styleUrls: ['./activity-new.component.scss']
})
export class ActivityNewComponent implements OnInit {

  constructor(
    private router: Router,
    private activitiesApi: ActivitiesApiService) { }

  ngOnInit() {
    this.activity = this.default();
  }

  save() {
    this.activitiesApi.insertActivity(this.activity).subscribe(data => {
      this.router.navigate(['activities']);
    })
  }

  discard() {
    // TODO: confirmation

    this.activity = this.default();
  }

  private default() {
    return {
      id: 0,
      name: '',
      category: '',
      description: '',
      creationDate: '',
      subcategory: '',
      icon: null
    };
  }

  activity: IActivity;

}
