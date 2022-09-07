declare namespace API {
  interface IRole {
    isAdmin: boolean;
    isEditor: boolean;
  }

  interface IUser {
    id: number;
    username: string;
    password?: string;
    role?: IRole;
  }
  interface UserList {
    data?: IUser[];
    success: boolean;
  }
  interface PageParams {
    pageSize: number;
    current: number;
  }
}
