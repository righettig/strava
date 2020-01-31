import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingLog } from '../models/training-log';
import { TrainingLogService } from '../services/training-log.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { SubSink } from 'subsink';
import { AuthService } from '../../auth/auth.service';

@Component({
  templateUrl: './training-log.component.html',
  styleUrls: ['./training-log.component.scss']
})
export class TrainingLogComponent implements OnInit, OnDestroy {

  constructor(
    private auth: AuthService,
    private loadingBar: LoadingBarService,
    private trainingLogService: TrainingLogService) {
      
    this.trainingLogs$ = trainingLogService.entities$;
    this.loading$ = trainingLogService.loading$;
  }

  ngOnInit() {
    this.getTrainingLogs();

    this.subs.sink = this.trainingLogs$.subscribe(data => {
      debugger;
    })

    this.subs.sink = this.loading$.subscribe(data => {
      if (data) {
        this.loadingBar.start();
      } else {
        this.loadingBar.stop();
      }
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  add(trainingLog: TrainingLog) {
    trainingLog.username = this.auth.currentUsername;
    
    this.trainingLogService.add(trainingLog);
  }
  
  delete(trainingLog: TrainingLog) {
    this.trainingLogService.delete(trainingLog);
  }
  
  getTrainingLogs() {
    // TODO: the server should only return the items belonging to the current user
    this.trainingLogService.getAll();
  }

  trainingLogs$: Observable<TrainingLog[]>;
  loading$: Observable<boolean>;
 
  private subs = new SubSink();

}
