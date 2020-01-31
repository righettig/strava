import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { TrainingLog } from '../models/training-log';

@Injectable({ providedIn: 'root' })
export class TrainingLogService extends EntityCollectionServiceBase<TrainingLog> {
  
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('TrainingLog', serviceElementsFactory);
  }

}