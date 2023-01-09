export interface IUserInfo {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string | null;
  login: string;
  avatar: string | null;
  email: string;
  phone: string;
}

export interface IUserSearch {
  login: string;
}
