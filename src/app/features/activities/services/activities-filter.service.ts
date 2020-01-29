import { Injectable } from '@angular/core';
import { IActivity } from '../models/activity';

import groupBy   from 'lodash/groupBy';
import sortBy    from 'lodash/sortBy';
import map       from 'lodash/map';
import mapValues from 'lodash/mapValues';
import sumBy     from 'lodash/sumBy';

import * as moment from 'moment';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesFilterService {

  constructor(private auth: AuthService) { } 

  filterByCategory(data: IActivity[], category: string) {
    let result = data; // all

    if (category !== "all") {
      result = data.filter(el => el.category === category);
    }

    return result;
  }

  currentWeekTotalDistance(data: IActivity[]) {
    const now = new Date().getTime();

    const currentWeekActivities = data.filter(el => {
      return el.username == this.auth.currentUsername && 
        ((now - el.creationDate.getTime()) / (1000 * 3600 * 24)) <= 7;
    })

    return currentWeekActivities.reduce((curr, el) => curr + el.distance, 0);
  }

  totalDistanceByWeeks(data: IActivity[]) {
    const tmp = 
      data
        .filter(el => el.username == this.auth.currentUsername)
        .map(el => {
          const creationDate = moment(el.creationDate);
          return {
            creationDate,
            from_to_date: creationDate.startOf('week').format('DD/MM/YYYY') + "-" + creationDate.endOf('week').format('DD/MM/YYYY'),
            distance: el.distance
          }})

    const sortedData = 
      sortBy(tmp, el => el.creationDate);

    const groupedData = 
      groupBy(sortedData, el => el.from_to_date);

    let result = 
      mapValues(
        groupedData, 
        g => sumBy(g, el => el.distance))

    result = map(result, (totalDistance, week) => {
      return {
        name: week,
        value: totalDistance
      }
    })

    return result;
  }

}
