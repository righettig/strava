import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { TrainingLog } from '../models/training-log';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { TrainingLogService } from '../services/training-log.service';

@Component({
  selector: 'app-training-log-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class TrainingLogEditComponent {

  @ViewChild(NgForm, { static: false } ) public formGroup: NgForm;

  @Output() onSave = new EventEmitter<TrainingLog>();

  constructor(
    private route: ActivatedRoute,
    private trainingLogService: TrainingLogService) { }

  ngOnInit() {
    const trainingLogId = +this.route.snapshot.paramMap.get("id");
    if (trainingLogId) {
      // use service to retrieve trainingLog
      this.trainingLogService.getByKey(trainingLogId).subscribe(data => {
        this.trainingLog_backup = data;
        this.amend = true;
        this.reset();
      });

    } else {
      this.reset();
    }
  }

  reset() {
    this.trainingLog = { ... this.trainingLog_backup };

    // need to convert as ngDatePicker uses a different format
    const tmp = new Date(this.trainingLog.date);

    this.trainingLog.date = {
      year:  tmp.getFullYear(),
      month: tmp.getMonth() + 1,
      day:   tmp.getDate(),
    }
  }

  save() {
    this.trainingLog.date = 
      new Date(
        this.trainingLog.date.year, 
        this.trainingLog.date.month-1, 
        this.trainingLog.date.day);

    if (this.amend) { 
      this.trainingLogService.update(this.trainingLog).subscribe(result => {
        this.trainingLog_backup = this.trainingLog;
        this.reset();
      })
      
    } else {
      this.onSave.emit(this.trainingLog);
      this.reset();
    }

  }

  trainingLog;

  faCalendarDay = faCalendarDay;

  private trainingLog_backup = { // used when entering a new training log
    id: 0,
    date: new Date(),
    entry: "",
    fitness_score: 3, // TODO; could be improved using starComponent
    motivation_score: 3
  }

  private amend = false;

}
