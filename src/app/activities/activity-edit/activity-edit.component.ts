import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivitiesApiService } from '../activities-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IActivity } from '../models/activity';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent implements OnInit {

  @ViewChild(NgForm, { static: false } ) public formGroup: NgForm;

  constructor(
    private activitiesApi: ActivitiesApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // retrieve activityId from route params
    const activityId = +this.route.snapshot.paramMap.get("id");

    this.activitiesApi.getActivity(activityId).subscribe(data => {
      this.activity = Object.assign({}, data); // cloning the returned activity
    });
  }

  save() {
    this.activitiesApi.editActivity(this.activity).subscribe(data => {
      this.formGroup.form.markAsPristine();
      this.formGroup.form.markAsUntouched();

      this.router.navigate(['activities']);
    });
  }

  get dirty() {
    return this.formGroup.dirty
  }

  activity: IActivity;

}
