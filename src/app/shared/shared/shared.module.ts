import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    
    // only icons I have explicitly imported will end up in the bundle and the remaining ones will be tree-shaken away.
    FontAwesomeModule,    
  ]
})
export class SharedModule { }
