export interface IProfile {
  name: string;
  email: string;
  birthday: string;
  gender: string;
  location: string;
  primaryClub: string;
  weight: number;
  vanityURL: string;
  profileBio: string;
}

export class Profile implements IProfile {
  name: string; 
  email: string; 
  birthday: string;
  gender: string;
  location: string;
  primaryClub: string;
  weight: number;
  vanityURL: string;
  profileBio: string;
}