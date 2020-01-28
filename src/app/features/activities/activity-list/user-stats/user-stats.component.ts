import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserStatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
