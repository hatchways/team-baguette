export interface Profile {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  email: string;
  phone: string;
  address: string;
  description: string;
}
export interface ProfileApiData {
  profile?: Profile;
  error?: { message: string };
  success?: { message: string };
}
