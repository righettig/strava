import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivitiesApiService } from '../services/activities-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IActivity } from '../models/activity';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent implements OnInit {

  @ViewChild(NgForm, { static: false } ) public formGroup: NgForm;

  constructor(
    private auth: AuthService,
    private activitiesApi: ActivitiesApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // retrieve activityId from route params
    const activityId = +this.route.snapshot.paramMap.get("id");

    this.activitiesApi.getActivity(activityId).subscribe(data => {
      this.checkCanModify(data);

      this.activity = { ...data }; // cloning the returned activity
      this.activity_backup = { ...this.activity };
    });
  }

  save() {
    this.activitiesApi.editActivity(this.activity).subscribe(data => {
      this.formGroup.form.markAsPristine();
      this.formGroup.form.markAsUntouched();

      this.router.navigate(['activities']);
    });
  }

  reset() {
    this.activity = { ...this.activity_backup };

    this.formGroup.reset(this.activity);
  }

  get dirty() {
    return this.formGroup.dirty
  }

  private checkCanModify(activity: IActivity) {
    if (this.auth.currentUsername != activity.username) {
      this.router.navigate(['activities']);
    }
  }

  // NB: used when resetting the form. It holds the previous activity value.
  activity_backup: IActivity;

  activity: IActivity;

}
