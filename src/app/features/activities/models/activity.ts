import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IActivity {
  id: number;
  name: string;
  description: string;
  username: string;
  creationDate: Date;
  distance: number;
  category: string;
  subcategory: string;
  location: {
    lat: number; // = 40.730610;
    lng: number; // -73.935242;
  }
  icon: IconDefinition;
  kudos: number;
}