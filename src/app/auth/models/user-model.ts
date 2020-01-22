export interface IUserModel {
  username: string;
  firstname: string;
  lastname: string;
  authToken: string;
  refreshToken: string;
}

export class UserModel implements IUserModel {
  
  constructor(public username: string) {}

  firstname: string;
  lastname: string;
  authToken: string;
  refreshToken: string;

}