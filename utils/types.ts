export interface IUser {
    userId: string;
    userName: string;
    email: string;
    password: string;
    avatar?: string;
  }

  export interface IDecodedToken {
    id?: string,
    user?: IUser; 
    iat: number,
    exp: number
  }


  export interface IPost {
    postId: string;
    text: string;
    postUserId: string;
    postTopicId: string;
    image?: string;
  }
