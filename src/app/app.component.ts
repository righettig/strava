import { Component } from '@angular/core';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'strava';
  faRunning = faRunning;
}
