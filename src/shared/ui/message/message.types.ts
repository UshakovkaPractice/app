export interface IUser {
    name: string;
    avatar: {
      url: string;
    };
  }

  export interface IMessageProps {
    user: IUser;
    text: string;
    time: Date;
  }
