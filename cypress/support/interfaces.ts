export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  userName: string;
  email: string;
  password: string;
}

export interface IUserData extends IRegisterData {
  userId: string;
}

interface IResponseBody {
  status: string;
  message: string;
  data: IUserData;
  activeToken: string;
}

interface IResponseActiveBody {
  message: string;
}

export interface IResponseUpdatedUser {
  status: string;
  message: string;
  data: IUserData;
}

interface ILoginBody {
  status: string;
  message: string;
  access_token: string;
  user: IUserData;
}
interface IUsersBody {
  status: string;
  message: string;
  data: IUserData[];
}

export interface IResponseRegister {
  body: IResponseBody;
}
export interface IActiveResponse {
  body: IResponseActiveBody
}

export interface IResponseUpdatedUser {
  body: IResponseUpdatedUser
}

export interface IResponseLogin {
  body: ILoginBody;
}

export interface IUserResponse {
  body: IUsersBody;
}