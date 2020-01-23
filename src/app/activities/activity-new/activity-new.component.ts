import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesApiService } from '../activities-api.service';

@Component({
  selector: 'app-activity-new',
  templateUrl: './activity-new.component.html',
  styleUrls: ['./activity-new.component.scss']
})
export class ActivityNewComponent {

  constructor(
    private router: Router,
    private activitiesApi: ActivitiesApiService) { }

  save(activity) {
    this.activitiesApi.insertActivity(activity).subscribe(data => {
      this.router.navigate(['activities']);
    })
  }

}
