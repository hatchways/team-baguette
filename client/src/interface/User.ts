export interface User {
  email: string;
  username: string;
  id?: string;
  avatar: string;
  gallery: string[]
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
