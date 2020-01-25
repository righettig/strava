export interface IUserModel {
  username: string;
  authToken: string;
  refreshToken: string;
  isPremium: boolean; 
}

export class UserModel implements IUserModel {
  
  constructor(
    public username: string,
    public isPremium: boolean) { }

  authToken: string;
  refreshToken: string;

}