import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TrainingLogComponent } from './training-log/training-log.component';
import { TrainingLogEditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: "training-log",
    children: [
      {
        path: "",
        component: TrainingLogComponent
      },
      {
        path: "edit/:id",
        // canActivate: [TrainingLogEditGuard],
        // canDeactivate: [TrainingLogEditGuard],
        component: TrainingLogEditComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TrainingLogRoutingModule { }