import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoesRoutingModule } from './shoes-routing.module';
import { ShoesListComponent } from './shoes-list/shoes-list.component';

@NgModule({
  declarations: [ShoesListComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    ShoesRoutingModule
  ]
})
export class ShoesModule { }
