import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './features/auth/auth.module';

import { AppRoutingModule } from './routing/app-routing.module';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { AppComponent } from './root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AppStoreModule } from './features/training-log/store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule, // necessary for ngx-charts to work fine
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AuthModule,  
    AppStoreModule,  
    AppRoutingModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
