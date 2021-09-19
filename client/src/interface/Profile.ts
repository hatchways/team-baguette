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
export interface InitValue {
  firstName: string;
  lastName: string;
  gender: string;
  day: string;
  month: string;
  year: string;
  email: string;
  phone: string;
  address: string;
  description: string;
}
export interface ProfileApiData {
  error?: { message: string };
  success?: Profile;
}
