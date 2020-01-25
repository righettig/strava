import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './features/auth/auth.module';

import { AppRoutingModule } from './routing/app-routing.module';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { AppComponent } from './root/app.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AuthModule,    
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
