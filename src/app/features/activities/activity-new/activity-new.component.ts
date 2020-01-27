import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesApiService } from '../services/activities-api.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './activity-new.component.html',
  styleUrls: ['./activity-new.component.scss']
})
export class ActivityNewComponent {

  @ViewChild(NgForm, { static: true } ) public formGroup: NgForm;

  constructor(
    private router: Router,
    private activitiesApi: ActivitiesApiService) { }

  save(activity) {
    this.activitiesApi.insertActivity(activity).subscribe(data => {
      this.formGroup.form.markAsPristine();
      this.formGroup.form.markAsUntouched();

      this.router.navigate(['activities']);
    })
  }

  get dirty() {
    return this.formGroup.dirty
  }

  // for AOT to work fine
  name: string;
  description: string;
  category: string;
  subcategory: string;

}
