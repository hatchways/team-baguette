import { User } from './User';

export interface AvatarApiData {
  error?: { message: string };
  success?: AvatarApiDataSuccess;
}

export interface AvatarApiDataSuccess {
  user: User;
}
