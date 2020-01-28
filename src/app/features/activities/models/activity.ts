import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IActivity {
  id: number;
  name: string;
  description: string;
  creationDate: string; // Date;
  distance: number;
  category: string;
  subcategory: string;
  icon: IconDefinition;
  kudos: number;
}