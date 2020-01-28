import { Injectable } from '@angular/core';
import { IActivity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesFilterService {

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
      return ((now - el.creationDate.getTime()) / (1000 * 3600 * 24)) <= 7;
    })

    return currentWeekActivities.reduce((curr, el) => curr + el.distance, 0);
  }

}
