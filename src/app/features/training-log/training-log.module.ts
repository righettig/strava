import { NgModule } from '@angular/core';
import { TrainingLogRoutingModule } from './training-log-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrainingLogComponent } from './training-log/training-log.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { TrainingLogEditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    TrainingLogComponent, 
    TrainingLogEditComponent
  ],
  imports: [
    SharedModule,
    LoadingBarModule,
    TrainingLogRoutingModule,
  ]
})
export class TrainingLogModule { }
