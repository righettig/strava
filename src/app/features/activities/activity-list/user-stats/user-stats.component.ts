import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserStatsComponent {

  @Input() totalDistance: number

  constructor(private router: Router) { }

  goToFullAnalytics() {
    this.router.navigate(['analytics']);
  }

}
