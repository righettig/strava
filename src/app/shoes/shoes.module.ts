import { NgModule } from '@angular/core';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationGuard } from '../authentication.guard';

@NgModule({
  declarations: [ShoesListComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ShoesModule { 

  static routes = [
    { 
      path: "shoes", 
      canActivate: [AuthenticationGuard],
      component: ShoesListComponent 
    }
  ]

}
