import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { entityConfig } from './entity-metadata';
import { NgrxDataModule, DefaultDataServiceConfig } from 'ngrx-data';
import { environment } from 'src/environments/environment';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3120/api'
}

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    NgrxDataModule.forRoot(entityConfig),
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ]
})
export class AppStoreModule { }
