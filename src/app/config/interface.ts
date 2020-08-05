export const USER_INFO = 'userData';

export interface Article {
  tittle: string;
  subtitle: string;
  subData: ArticleAdditional;
  owner?: string;
}

export interface ArticleAdditional {
  imgLink: string;
  text: string;
}

export interface User {
  login: string;
  email: string;
  password: string;
  userData: UserData;
}

export interface UserData {
  id: string;
  name: string;
  surname: string;
  birthday: string;
  gender: string;
  phone: string;
}

export interface Login {
  email: string;
  password: string;
  checkbox: boolean;
}
