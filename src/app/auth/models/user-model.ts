export interface IUserModel {
  username: string;
  authToken: string;
  refreshToken: string;
}

export class UserModel implements IUserModel {
  
  constructor(public username: string) {}

  authToken: string;
  refreshToken: string;

}