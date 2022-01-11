export interface IUser {
    id: string;
    userName: string;
    email: string;
    password: string;
    avatar?: string;
  }

  export interface IDecodedToken {
    tokenId?: string,
    user?: IUser; 
    iat: number,
    exp: number
  }