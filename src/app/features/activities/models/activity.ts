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
  icon: IconDefinition;
  kudos: number;
}