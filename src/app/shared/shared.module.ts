import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultPageLinkComponent } from './default-page-link/default-page-link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DefaultPageLinkComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    DefaultPageLinkComponent,
    
    RouterModule,
    CommonModule,
    FormsModule,
    NgbModule,
    
    // only icons I have explicitly imported will end up in the bundle and the remaining ones will be tree-shaken away.
    FontAwesomeModule,    
  ]
})
export class SharedModule { }
